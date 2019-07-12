import { TextArea } from "grommet";
import { useState } from "react";
import { Subject } from "rxjs";
import { debounceTime, tap } from "rxjs/operators";

const textInput$ = new Subject();

export const Minutes = ({ firebase, itemId, meetingId, minutes }) => {
  console.log({ minutes });

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
      .subscribe(text => {
        console.log(text);
        setSaved(true);
      });
  };
  return (
    <div className="ma3 h5 pointer w-50">
      <TextArea
        data-testid="editableMinutes"
        className="w-100 bg-white"
        placeholder="Enter your minutes here..."
        fill={true}
        onChange={handleTextUpdate}
        style={{ backgroundColor: "white" }}
        value={value}
      />
      <small className="o-50">{`${saved ? "saved" : "Saving..."}`}</small>
    </div>
  );
};
