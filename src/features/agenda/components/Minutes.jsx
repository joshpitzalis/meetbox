import { Markdown, TextArea } from "grommet";
import React, { useState } from "react";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";

const textInput$ = new Subject().pipe(debounceTime(2000));

export const Minutes = ({ firebase, itemId, meetingId, minutes, state }) => {
  const [value, setValue] = useState(minutes);
  const [saved, setSaved] = useState(true);

  React.useEffect(() => {
    setValue(minutes);
  }, [minutes]);

  React.useEffect(() => {
    textInput$.subscribe(
      ({ text, meetingId, targetId, firebase, setSaved }) => {
        if (text && itemId === targetId) {
          firebase
            .firestore()
            .doc(`meetings/${meetingId}`)
            .update({
              [`items.${itemId}.minutes`]: text
            })
            .then(() => {
              console.log("saved");
              setSaved(true);
            })
            .catch(error => console.error(error));
        }
      }
    );

    return () => textInput$.unsubscribe();
  }, []);

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
            onChange={e => {
              setValue(e.target.value);
              const payload = {
                text: e.target.value,
                meetingId,
                targetId: itemId,
                firebase,
                setSaved
              };
              textInput$.next(payload);
              setSaved(false);
            }}
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
        // <p className="measure">{value}</p>
        <Markdown className="measure">{value || ""}</Markdown>
      )}
    </div>
  );
};
