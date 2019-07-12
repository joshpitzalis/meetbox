import { Button, Form, FormField } from "grommet";
import { useState } from "react";
import firebase from "../../../sideEffects/firebase";
import { PrepItem } from "./PrepItem";

interface IProps {
  meetingId: number;
  id: number;
  prep?: [{ name: string; id: string }];
  state?: string;
}

export const Prerequisites: React.SFC<IProps> = ({
  meetingId,
  id,
  prep,
  state
}) => {
  const [editMode, setEditMode] = useState(false);

  const [value, resetForm] = useState({ name: "" });

  return (
    <div className={`${state === "active" ? "w-100" : "w-25 center"}`}>
      {prep &&
        Object.values(prep).map(item => (
          <PrepItem
            {...item}
            key={item.id}
            editMode={editMode}
            meetingId={meetingId}
            itemId={id}
          />
        ))}

      {editMode ? (
        <div className="ma3 pt4 pl2">
          <Form
            value={value}
            onSubmit={data => {
              const { value } = data;
              const prepId: number = +new Date();
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
        <div className="tc o-50 w-100">
          {state === "draft" && (
            <Button
              type="button"
              label={
                prep && Object.values(prep).length > 0
                  ? "Click to add more prep."
                  : "Click here to add prep."
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
