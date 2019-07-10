import { Button, Form, FormField } from "grommet";
import { Edit } from "grommet-icons";
import { useState } from "react";
import firebase from "../../../sideEffects/firebase";

export function AgendaItemName({ name, id, meetingId }) {
  const [editMode, toggleEditMode] = useState(false);
  const [title, setTitle] = useState("");

  const handleSubmit = data => {
    const { value } = data;
    toggleEditMode(false);
    firebase
      .firestore()
      .doc(`meetings/${meetingId}`)
      .update({
        [`items.${id}.name`]: value.name
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="measure-wide flex-grow-1">
      {editMode ? (
        <Form onSubmit={data => handleSubmit(data)}>
          <FormField
            name="name"
            label="Agenda Item"
            className="measure"
            placeholder="Give your first agenda Item a name"
            required
            value={title || name}
            onChange={e => setTitle(e.target.value)}
          />
          <Button type="submit" label="Save Description" />
        </Form>
      ) : (
        <div className="flex items-center measure">
          <Edit
            className="dim ma3 pointer"
            onClick={() => toggleEditMode(true)}
          />
          <h2 className="pointer">{name}</h2>
        </div>
      )}
    </div>
  );
}
