import { Button, Form, FormField } from "grommet";
import { useState } from "react";
import firebase from "../../../sideEffects/firebase";
import { PrepItem } from "./PrepItem";

interface IProps {
  meetingId: number;
  id: number;
  prep?: { [key: string]: { name: string; id: string } };
}

export const Prerequisites: React.SFC<IProps> = ({ meetingId, id, prep }) => {
  const [editMode, setEditMode] = useState(false);
  const prepItems = prep && Object.values(prep);
  const [value, resetForm] = useState({ name: "" });
  return (
    <div className="ml5 ma3 flex-grow-1 measure">
      {prepItems &&
        prepItems.map(item => (
          <PrepItem
            name={item.name}
            id={item.id}
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
          <Button
            type="button"
            label={
              prepItems && prepItems.length > 0
                ? "Click to add more prep."
                : "Click here to add prep."
            }
            plain
            onClick={() => setEditMode(true)}
            className="h3"
          />
        </div>
      )}
    </div>
  );
};
