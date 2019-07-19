import { Button, Form, FormField } from "grommet";
import { Edit } from "grommet-icons";
import React, { useState } from "react";
import { Prerequisites } from "./Prep";

export function AgendaItemName({ name, id, meetingId, state, prep, firebase }) {
  const [editMode, toggleEditMode] = useState(state.matches("draft"));
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

  const toggleLockInput = (meetingId, inputId, value) =>
    firebase
      .database()
      .ref("meetings/" + meetingId)
      .set({
        [inputId]: value
      });

  const checkLocked = (meetingId, inputId) =>
    new Promise((resolve, reject) =>
      firebase
        .database()
        .ref(`meetings/${meetingId}/${inputId}`)
        .once("value")
        .then(snap => resolve(snap.val()))
        .catch(error => reject(error))
    );

  const [locked, setLocked] = React.useState(false);

  const checkLocked$ = (meetingId, inputId) =>
    firebase
      .database()
      .ref(`meetings/${meetingId}/${inputId}`)
      .on("value", snap => setLocked(snap.val()));

  React.useEffect(() => {
    const stream$ = checkLocked$(meetingId, "qwe123");
    return () => stream$.off();
  }, []);

  return (
    <div
      className={`flex flex-column justify-start item-start ${
        state.matches("active") ? "w-25-ns" : "w-50-ns"
      }
      `}
    >
      <div>
        {editMode && (state.matches("draft") || state.matches("active")) ? (
          <Form
            // onSubmit={(data: React.FormEvent<HTMLFormElement>) =>
            //   handleSubmit(data)
            // }
            onSubmit={data => handleSubmit(data)}
            data-testid="itemNameForm"
          >
            <FormField
              name="name"
              label="Agenda Item"
              className="measure"
              placeholder="Give your first agenda Item a name"
              required
              value={title || name}
              onChange={e => setTitle(e.target.value)}
              data-testid="editableItemName"
              // onFocus={() => toggleLockInput(meetingId, "qwe123", true)}
              // disabled={locked}
              // onBlur={() => toggleLockInput(meetingId, "qwe123", false)}
            />
            <Button type="submit" label="Save Description" />
          </Form>
        ) : (
          <div className="flex items-center measure flex-grow-1">
            {(state.matches("active") || state.matches("draft")) && (
              <Edit
                className="dim ma3 pointer"
                onClick={() => toggleEditMode(true)}
                data-testid="editTitle"
              />
            )}
            <h2 className="pointer">{title || name}</h2>
          </div>
        )}
      </div>
      {state.matches("active") && (
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
