import { Button, Form, FormField } from "grommet";
import { Edit } from "grommet-icons";
import React, { useState } from "react";
import firebase from "../../../sideEffects/firebase";

export function AgendaItemName({ name, id, meetingId, state }) {
  const [editMode, toggleEditMode] = useState(true);
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
    <div className="flex-grow-1">
      {editMode && state === "draft" ? (
        <Form
          // onSubmit={(data: React.FormEvent<HTMLFormElement>) =>
          //   handleSubmit(data)
          // }
          onSubmit={data => handleSubmit(data)}
        >
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
        <div className="flex items-center measure flex-grow-1">
          <Edit
            className="dim ma3 pointer"
            onClick={() => toggleEditMode(true)}
          />
          <h2 className="pointer">{title || name}</h2>
        </div>
      )}
    </div>
  );
}