import { Button, CheckBox, Form, FormField } from "grommet";
import { Close } from "grommet-icons";
import React, { useState } from "react";

export function TaskList({ firebase, itemId, meetingId, state, tasks }) {
  const [editMode, setEditMode] = useState(false);
  const [value, resetForm] = useState({ name: "" });
  return (
    <div className="w-25">
      <p>Task list</p>
      {tasks &&
        Object.values(tasks).map(task => (
          <Task
            {...task}
            key={task.taskId}
            editMode={editMode}
            itemId={itemId}
            firebase={firebase}
            meetingId={meetingId}
          />
        ))}
      {editMode ? (
        <div className="pt4 pl2">
          <Form
            value={value}
            onSubmit={data => {
              const { value } = data;
              const taskId = +new Date();
              const { name } = value;
              resetForm({ name: "" });
              firebase
                .firestore()
                .doc(`meetings/${meetingId}`)
                .update({
                  [`items.${itemId}.tasks.${taskId}`]: {
                    taskId,
                    name,
                    complete: false
                  }
                })
                .catch(error => console.error(error));
            }}
          >
            <FormField
              name="name"
              label="Preparation"
              placeholder="Describe any prep you need people to do for this agenda item."
              required
            />

            <div className="w-100 flex items-center">
              <Button type="submit" label="Add" className="pointer" />
              <span className="w3 tc">
                <Button
                  type="button"
                  label="Close"
                  plain
                  onClick={() => setEditMode(false)}
                  className="pointer"
                />
              </span>
            </div>
          </Form>
        </div>
      ) : (
        <div className=" o-50 w-100">
          {state === "active" && (
            <Button
              type="button"
              label={
                tasks && Object.values(tasks).length > 0
                  ? "Click to add more tasks."
                  : "Click here to add a task."
              }
              plain
              onClick={() => setEditMode(true)}
              className="h3"
            />
          )}
        </div>
      )}
    </div>
  );
}

export function Task({
  taskId,
  name,
  complete,
  editMode,
  itemId,
  meetingId,
  firebase
}) {
  return (
    <>
      {editMode ? (
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
                [`items.${itemId}.tasks.${taskId}`]: firebase.firestore.FieldValue.delete()
              })
              .catch(error => console.error(error))
          }
          className="dim"
        />
      ) : (
        <CheckBox
          checked={complete}
          label={name}
          onChange={event =>
            firebase
              .firestore()
              .doc(`meetings/${meetingId}`)
              .update({
                [`items.${itemId}.tasks.${taskId}.complete`]: event.target
                  .checked
              })
              .catch(error => console.error(error))
          }
        />
      )}
    </>
  );
}
