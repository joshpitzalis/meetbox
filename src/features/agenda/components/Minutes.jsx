import { TextArea } from "grommet";
import React, { useState } from "react";
import { Subject } from "rxjs";
import { handleMinutesTextUpdate } from "../agendaSideEffects";

const textInput$ = new Subject();

export const Minutes = ({ firebase, itemId, meetingId, minutes, state }) => {
  const [value, setValue] = useState(minutes);
  const [saved, setSaved] = useState(true);

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
            plain
            onChange={e =>
              handleMinutesTextUpdate(
                e,
                setValue,
                setSaved,
                meetingId,
                itemId,
                firebase,
                textInput$
              )
            }
            style={{ backgroundColor: "white" }}
            value={value}
          />
          {saved ? (
            <small className="o-50 dark-green">saved</small>
          ) : (
            <small className="o-50 dark-red">Saving...</small>
          )}
        </>
      ) : (
        <p className="measure">{value}</p>
      )}
    </div>
  );
};
