import { Button, Form, FormField } from "grommet";
import { Close } from "grommet-icons";
import React, { useState } from "react";
import firebase from "../../../utilities/firebase";

// interface IProps {
//   meetingId: number;
//   id: number;
//   prep?: [{ name: string, id: string }];
//   state?: string;
// }

// export const Prerequisites: React.SFC<IProps> = ({
//   meetingId,
//   id,
//   prep,
//   state
// }) => {

export const Prerequisites = ({ meetingId, id, prep, state }) => {
  const [editMode, setEditMode] = useState(false);
  const [value, resetForm] = useState({ name: "" });

  return (
    <div
      className={` ${
        state.matches("active") ? "w-100" : "w-25-ns w-100 center"
      }`}
    >
      <ol className="list-decimal h-auto flex flex-column items-start pl4">
        {prep &&
          Object.values(prep).map(item => (
            <PrepItem
              {...item}
              key={item.id}
              editMode={editMode}
              meetingId={meetingId}
              itemId={id}
              state={state}
            />
          ))}
      </ol>

      {editMode && (state.matches("draft") || state.matches("active")) ? (
        <div className="ma3 pt4 pl2">
          <Form
            value={value}
            data-testid="prepForm"
            onSubmit={data => {
              const { value } = data;
              const prepId = +new Date();
              const { name } = value;
              resetForm({ name: "" });
              firebase
                .firestore()
                .doc(`meetings/${meetingId}`)
                .update({
                  [`items.${id}.prep.${prepId}`]: {
                    id: prepId,
                    name
                  }
                })
                .then(() =>
                  window.analytics.track("prep_item_added", {
                    category: "User",
                    action: "Added Prep Item"
                  })
                )
                .catch(error => console.error(error));
            }}
          >
            <FormField
              name="name"
              label="Stuff you want people to do before the meeting starts"
              placeholder="Add some prep"
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
        <div className="tc o-50 w-100">
          {state.matches("draft") && (
            <Button
              type="button"
              label={
                prep && Object.values(prep).length > 0
                  ? "Add More Prep"
                  : "Add Preparation (optional)"
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
};

// interface IProps {
//   name: string;
//   id: string;
//   editMode: boolean;
//   meetingId: number;
//   itemId: number;
//   status?: string;
// }

// export const PrepItem: SFC<IProps> = ({
//   name,
//   id,
//   editMode,
//   meetingId,
//   itemId
// }) => {

export const PrepItem = ({ name, id, editMode, meetingId, itemId, state }) => {
  return editMode && (state.matches("draft") || state.matches("active")) ? (
    <Button
      icon={<Close className="hover-red" />}
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
          .then(() =>
            window.analytics.track("prep_item_deleted", {
              category: "User",
              action: "Deleted Prep Item"
            })
          )
          .catch(error => console.error(error))
      }
      className="hover-red"
    />
  ) : (
    <li
      style={{
        wordWrap: "break-word",
        textOverflow: "ellipsis"
      }}
    >
      {name}
    </li>
  );
};
