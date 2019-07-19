import { TextArea } from "grommet";
import React, { useState } from "react";
import { Subject } from "rxjs";
import { debounceTime, tap } from "rxjs/operators";
const textInput$ = new Subject();

export const Minutes = ({ firebase, itemId, meetingId, minutes, state }) => {
  const [value, setValue] = useState(minutes);
  const [saved, setSaved] = useState(true);
  const handleTextUpdate = e => {
    setValue(e.target.value);
    textInput$.next(e.target.value);
    setSaved(false);
    textInput$
      .pipe(
        debounceTime(2000),
        tap(
          text =>
            firebase
              .firestore()
              .doc(`meetings/${meetingId}`)
              .update({
                [`items.${itemId}.minutes`]: text
              })
          // .then(() => {
          //   console.log("saved");
          //   setSaved(true);
          // })
          // .catch(error => console.error(error))
        )
      )
      .subscribe(text => setSaved(true));
  };
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
            onChange={handleTextUpdate}
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
