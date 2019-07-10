import { Button, RadioButton } from "grommet";
import { Close } from "grommet-icons";
import { SFC, useState } from "react";
import firebase from "../../../sideEffects/firebase";

interface IProps {
  name: string;
  id: string;
  editMode: boolean;
  meetingId: number;
  itemId: number;
  status?: string;
}

export const PrepItem: SFC<IProps> = ({
  name,
  id,
  editMode,
  meetingId,
  itemId,
  status
}) => {
  const [completed, markComplete] = useState(false);
  return (
    <div className="ma3">
      {editMode && !status ? (
        <Button
          icon={<Close />}
          type="button"
          label={name}
          plain
          onClick={() =>
            firebase
              .firestore()
              .doc(`meetings/${meetingId}`)
              .update({
                [`items.${itemId}.prep.${id}`]: firebase.firestore.FieldValue.delete()
              })
              .catch(error => console.error(error))
          }
          className="dim"
        />
      ) : (
        <RadioButton
          name={name}
          key={id}
          checked={completed}
          label={name}
          onChange={() => markComplete(true)}
        />
      )}
    </div>
  );
};
