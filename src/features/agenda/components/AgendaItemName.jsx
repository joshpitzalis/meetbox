import { Button, Form, FormField } from "grommet";
import { Edit } from "grommet-icons";
import React, { useState } from "react";
import firebase from "../../../sideEffects/firebase";
import { Prerequisites } from "./Prerequisites";
export function AgendaItemName({ name, id, meetingId, state, prep }) {
  const [editMode, toggleEditMode] = useState(state === "draft");
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

  console.log("state", state);
  return (
    <div
      className={`flex flex-column justify-start item-start  ${
        state === "active" ? "w-25" : "w-50"
      }`}
    >
      <div className="">
        {editMode ? (
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
            {(state === "draft" || state === "active") && (
              <Edit
                className="dim ma3 pointer"
                onClick={() => toggleEditMode(true)}
              />
            )}
            <h2 className="pointer">{title || name}</h2>
          </div>
        )}
      </div>
      {state === "active" && (
        <>
          {prep && <p className="mt3 mh2">Preparations</p>}
          <Prerequisites
            meetingId={meetingId}
            id={id}
            prep={prep}
            state={state}
          />
        </>
      )}
    </div>
  );
}
