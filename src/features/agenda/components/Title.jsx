import { Form, FormField } from "grommet";
import React, { useState } from "react";
import { BehaviorSubject } from "rxjs";
import { debounceTime } from "rxjs/operators";
import { Prerequisites } from "./Prep";

const clickStream$ = new BehaviorSubject("").pipe(debounceTime(2000));

// tk pull the mapping iteration into this file so that it is clearer that you are ampping over multiple items

export function AgendaItemName({ name, id, meetingId, state, prep, firebase }) {
  const [editMode, toggleEditMode] = useState(state.matches("draft"));
  const [title, setTitle] = useState(name);

  // this updates the text in real time if the database gets updated, by someone else for example
  React.useEffect(() => {
    setTitle(name);
  }, [name]);

  const [error, setError] = React.useState("");

  React.useEffect(() => {
    clickStream$.subscribe(({ name, targetId }) => {
      if (name && id === targetId) {
        toggleEditMode(false);
        firebase
          .firestore()
          .doc(`meetings/${meetingId}`)
          .update({
            [`items.${id}.name`]: name
          })
          .catch(error => console.error(error));
      }
    });

    return () => clickStream$.unsubscribe();
  }, [error]);

  return (
    <div
      className={`flex flex-column justify-start item-start 
      ${state.matches("active") ? "w-25-ns" : "w-50-ns"}`}
    >
      {(editMode && state.matches("draft")) || state.matches("active") ? (
        <Form
          // onSubmit={data => handleSubmit(data)}
          data-testid="itemNameForm"
        >
          <FormField
            name="name"
            // label="Agenda Item"
            className="rf-measure-narrow rf-lh-title"
            placeholder="Give your first agenda Item a name"
            required
            value={title || name}
            onChange={e => {
              setError("");
              if (!e.target.value) {
                setError("This title cannot be Blank.");
              }
              setTitle(e.target.value);
              const payload = {
                name: e.target.value,
                targetId: id
              };
              clickStream$.next(payload);
            }}
            data-testid="editableItemName"
            error={error}
          />
          {/* <Button type="submit" label="Save Description" /> */}
        </Form>
      ) : (
        <div
          className="flex items-start rf-measure-narrow flex-grow-1 textPointer pa3 word-wrap"
          onClick={() => {
            if (state.matches("active") || state.matches("draft")) {
              clickStream$.next("");
              toggleEditMode(true);
            }
          }}
        >
          <h2 className="rf-lh-title f2 w-100" data-testid="itemName">
            {title || name}
          </h2>
        </div>
      )}

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

{
  /* tk can you refactor this so that you use props.children so that pre req component doesn't live inthis file */
}
