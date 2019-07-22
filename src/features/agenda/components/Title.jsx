import { Button, Form, FormField } from "grommet";
import { Edit } from "grommet-icons";
import React, { useState } from "react";
import { BehaviorSubject } from "rxjs";
import { debounceTime } from "rxjs/operators";
import { Prerequisites } from "./Prep";

const clickStream$ = new BehaviorSubject("").pipe(debounceTime(3000));

export function AgendaItemName({ name, id, meetingId, state, prep, firebase }) {
  const [editMode, toggleEditMode] = useState(state.matches("draft"));
  const [title, setTitle] = useState(name);

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

  React.useEffect(() => {
    // listens to typing or toggling edit button
    // waits for 3 seconds after last interaction
    // then closes edit mode
    clickStream$.subscribe(val => toggleEditMode(false));
    return () => clickStream$.unsubscribe();
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
              onChange={e => {
                clickStream$.next(e.target.value);
                setTitle(e.target.value);
              }}
              data-testid="editableItemName"
            />
            <Button type="submit" label="Save Description" />
          </Form>
        ) : (
          <div className="flex items-center measure flex-grow-1">
            {(state.matches("active") || state.matches("draft")) && (
              <Edit
                className="dim ma3 pointer"
                onClick={() => {
                  clickStream$.next("");
                  toggleEditMode(true);
                }}
                data-testid="editTitle"
              />
            )}
            <h2 className="pointer f2">{title || name}</h2>
          </div>
        )}
      </div>
      {state.matches("active") && (
        <>
          {prep && <p className="ma3 mt4">Preparations</p>}
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
