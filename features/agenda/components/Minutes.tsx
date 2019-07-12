import { Button, TextArea } from "grommet";
import { Add } from "grommet-icons";
import { useState } from "react";
import { from } from "rxjs";
import { debounceTime } from "rxjs/operators";

export const Minutes = ({ firebase, itemId, meetingId }) => {
  const [editable, setEditable] = useState(false);
  const [value, setValue] = useState("");
  const handleTextUpdate = e => {
    // debounce then save to firebase
    from(e.target.value)
      .pipe(debounceTime(1000))
      .subscribe(val => console.log("val", val));

    setValue(e.target.value);
  };
  return (
    <div className="ma3 h5 pointer measure">
      {editable ? (
        <TextArea
          data-testid="editableMinutes"
          resize="vertical"
          className="w-100 bg-white"
          fill={true}
          onChange={handleTextUpdate}
          value={value}
        />
      ) : (
        <div className="ma3">
          <Button
            icon={<Add />}
            label="Add Notes, Tasks, Votes Or Decisions"
            onClick={() => setEditable(true)}
            plain
            data-testid="minutesButton"
          />
        </div>
      )}
    </div>
  );
};
