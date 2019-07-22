import { Form, FormField } from "grommet";
import React, { useState } from "react";
import { BehaviorSubject } from "rxjs";
import { debounceTime } from "rxjs/operators";
import { Prerequisites } from "./Prep";

const clickStream$ = new BehaviorSubject("").pipe(debounceTime(3000));

export function AgendaItemName({ name, id, meetingId, state, prep, firebase }) {
  const [editMode, toggleEditMode] = useState(state.matches("draft"));
  const [title, setTitle] = useState(name);

  // this updates the text in real time if the database gets updated, by someone else for example
  React.useEffect(() => {
    setTitle(name);
  }, [name]);

  // const handleSubmit = data => {
  //   const { value } = data;
  //   toggleEditMode(false);
  //   firebase
  //     .firestore()
  //     .doc(`meetings/${meetingId}`)
  //     .update({
  //       [`items.${id}.name`]: value.name
  //     })
  //     .then(() => console.log("updated"))
  //     .catch(error => console.error(error));
  // };

  const [error, setError] = React.useState("");

  React.useEffect(() => {
    // listens to typing or toggling edit button
    // waits for 3 seconds after last interaction
    // then closes edit mode

    clickStream$.subscribe(({ name, targetId }) => {
      console.log({ name, targetId });
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
            className="measure"
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
          className="flex items-center measure flex-grow-1 textPointer pa3"
          onClick={() => {
            if (state.matches("active") || state.matches("draft")) {
              clickStream$.next("");
              toggleEditMode(true);
            }
          }}
        >
          <h2 className=" f2" data-testid="itemName">
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
