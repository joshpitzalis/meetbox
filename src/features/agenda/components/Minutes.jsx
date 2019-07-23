import { Markdown, TextArea } from "grommet";
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
    <div className="ma3 h5 pointer w-50" data-testid="editableMinutes">
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
        <Markdown className="measure" data-testid="minutesMarkdown">
          {value || "No Minutes"}
        </Markdown>
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
