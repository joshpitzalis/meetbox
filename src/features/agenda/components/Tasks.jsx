import { Button, CheckBox, Form, FormField } from "grommet";
import { Close } from "grommet-icons";
import React, { useState } from "react";

export function TaskList({ firebase, itemId, meetingId, state, tasks }) {
  const [editMode, setEditMode] = useState(false);
  const [value, resetForm] = useState({ name: "" });
  return (
    <div className="w-25-ns mt0-ns mt5">
      <p>Task list</p>
      <div className="flex flex-column items-start">
        {tasks &&
          Object.values(tasks).map(task => (
            <Task
              {...task}
              key={task.taskId}
              editMode={editMode}
              itemId={itemId}
              firebase={firebase}
              meetingId={meetingId}
              state={state}
            />
          ))}
      </div>
      {editMode && state.matches("active") ? (
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
                .then(() =>
                  window.analytics.track("task_added", {
                    category: "User",
                    action: "Added Task"
                  })
                )
                .catch(error => console.error(error));
            }}
            data-testid="taskEditBox"
          >
            <FormField
              name="name"
              // label="New Task"
              placeholder="Add a new task"
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
          {state.matches("active") && (
            <Button
              type="button"
              label={
                tasks && Object.values(tasks).length > 0
                  ? "Add another task..."
                  : "Click here to add a task."
              }
              plain
              onClick={() => setEditMode(true)}
              className="h3"
              data-testid="editTask"
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
  firebase,
  state
}) {
  return (
    <div className="mv1">
      {editMode && state.matches("active") ? (
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
              .then(() =>
                window.analytics.track("task_deleted", {
                  category: "User",
                  action: "Deleted Task"
                })
              )
              .catch(error => console.error(error))
          }
          className="hover-red"
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
              .then(() =>
                window.analytics.track("task_toggled", {
                  category: "User",
                  action: "Toggled Task"
                })
              )
              .catch(error => console.error(error))
          }
        />
      )}
    </div>
  );
}
