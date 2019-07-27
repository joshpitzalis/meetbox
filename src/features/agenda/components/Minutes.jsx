import { TextArea } from "grommet";
import React, { useState } from "react";
import { textInput$ } from "../agendaStreams$";
import { useSync } from "./../agendaHelpers";

// responsible for updating the minutes and syncing the updates to firebase
const Minutes = ({
  firebase,
  itemId,
  meetingId,
  minutes,
  state,
  handleMinutesTextUpdate
}) => {
  const [saved, setSaved] = useState(true);
  const [value, setValue] = useSync(textInput$, itemId, minutes);

  return (
    <div className="ma3 rf-min-h5 pointer w-50" data-testid="editableMinutes">
      {state.matches("active") ? (
        <>
          <TextArea
            data-testid="editableMinutes"
            className="w-100 bg-white h-100"
            focusIndicator={false}
            placeholder="Enter your minutes here..."
            fill={true}
            onChange={e =>
              handleMinutesTextUpdate(
                e,
                setValue,
                textInput$,
                setSaved,
                meetingId,
                itemId,
                firebase
              )
            }
            style={{ backgroundColor: "white" }}
            value={value}
            plain
          />
          <SavedStatus saved={saved} />
        </>
      ) : (
        <div className="rf-measure rf-pl3" data-testid="minutesMarkdown">
          {value
            ? value.split("\n").map((item, index) => (
                <span key={`${item.substring(0, 1)}${index}`}>
                  {item}
                  <br />
                </span>
              ))
            : "No minutes for this item."}
        </div>
      )}
    </div>
  );
};

export default Minutes;

// responsible for showing whether the minutes have been saved or not
export const SavedStatus = ({ saved }) => {
  return (
    <>
      {saved ? (
        <small className="o-50 dark-green">Saved</small>
      ) : (
        <small className="o-50 dark-red">Saving...</small>
      )}
    </>
  );
};
