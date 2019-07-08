import { Button, Form, FormField, RadioButton } from "grommet";
import { Add, Close, Edit } from "grommet-icons";
import { useState } from "react";
import firebase from "../../../sideEffects/firebase";

const AgendaItem = ({ id, name, prep, index, meetingId, state }) => {
  const [showNotes, setShowNotes] = useState(false);

  const deleteItem = (itemId, meetingId) =>
    firebase
      .firestore()
      .doc(`meetings/${meetingId}`)
      .update({
        [`items.${itemId}`]: firebase.firestore.FieldValue.delete()
      })
      .catch(error => console.error(error));

  const [confirm, setConfirm] = React.useState(false);
  return (
    <div className={`flex items-center item${index} pl6 near-black`}>
      {confirm ? (
        <div className="h5 flex flex-column items-center justify-center w-100">
          <p className="f3">You sure you want to delete this item ?</p>
          <div className="w-100 flex justify-center">
            <Button
              label="Confirm Deletion"
              onClick={() => {
                deleteItem(id, meetingId);
                setConfirm(false);
              }}
              className="pointer mh5"
            />
            <div className="w3" />
            <Button
              label="No, I've changed my mind."
              onClick={() => setConfirm(false)}
              className="pointer"
              plain
            />
          </div>
        </div>
      ) : (
        <>
          <dl className="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l pa3">
            <dd className="f3 fw6 ml0 ttu">5</dd>
            <dd className="f6 fw4 ml0 ttu">min</dd>
          </dl>
          <AgendaItemName name={name} id={id} meetingId={meetingId} />

          {(state === "draft" || state === "confirmed") && (
            <Prerequisites meetingId={meetingId} id={id} prep={prep} />
          )}
          {(state === "draft" || state === "active") && (
            <Button
              icon={<Close />}
              onClick={() => setConfirm(true)}
              className="pointer grow"
            />
          )}
          {(state === "active" || state === "complete") && (
            <div
              className="ml5 ma3 w5 h3 pointer"
              onClick={() => setShowNotes(true)}
            >
              <div className="ma3">
                <Button
                  icon={<Add />}
                  label="Add Notes, Tasks, Votes Or Decisions"
                  onClick={() => setItems([...items, { id: +new Date() }])}
                  plain
                />
              </div>
            </div>
          )}
        </>
      )}

      <style jsx>
        {`
          .item0 {
            background-color: #fdfce7;
          }
          .item1 {
            background-color: #faf4c0;
          }
          .item2 {
            background-color: #e0eac3;
          }
          .item3 {
            background-color: #c6e0d7;
          }
          .item4 {
            background-color: #b2cdd7;
          }
          .item5 {
            background-color: #cbb39e;
          }
          .item6 {
            background-color: #e79c74;
          }
          .item7 {
            background-color: #e49883;
          }
          .item8 {
            background-color: #df9598;
          }
          .item9 {
            background-color: #d1869f;
          }
          .item10 {
            background-color: #bc72a7;
          }
          .item11 {
            background-color: #894f9c;
          }
          .item12 {
            background-color: #3a2a76;
          }
        `}
      </style>
    </div>
  );
};

export default AgendaItem;

function AgendaItemName({ name, id, meetingId }) {
  const [editMode, toggleEditMode] = useState(false);

  const [title, setTitle] = useState("");
  return (
    <div className="measure-wide flex-grow-1">
      {editMode ? (
        <Form
          onSubmit={({ value }) => {
            toggleEditMode(false);
            firebase
              .firestore()
              .doc(`meetings/${meetingId}`)
              .update({
                [`items.${id}.name`]: value.name
              })
              .catch(error => console.error(error));
          }}
        >
          <FormField
            name="name"
            label="Agenda Item"
            className="measure"
            placeholder="Give your first agenda Item a name"
            size="large"
            required
            value={title || name}
            onChange={e => setTitle(e.target.value)}
          />
          <Button type="submit" label="Save Description" />
        </Form>
      ) : (
        <div className="flex items-center measure">
          <Edit
            className="dim ma3 pointer"
            onClick={() => toggleEditMode(true)}
          />
          <h2 className="pointer">{name}</h2>
        </div>
      )}
    </div>
  );
}

function Prerequisites({ meetingId, id, prep }) {
  const [editMode, setEditMode] = React.useState(false);

  const prepItems = prep && Object.values(prep);

  const [value, resetForm] = React.useState({ name: "" });
  return (
    <div className="ml5 ma3 flex-grow-1 measure">
      {prepItems &&
        prepItems.map(item => (
          <PrepItem
            {...item}
            editMode={editMode}
            meetingId={meetingId}
            itemId={id}
          />
        ))}

      {editMode ? (
        <div className="ma3 pt4 pl2">
          <Form
            value={value}
            size="small"
            onSubmit={({ value }) => {
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
              size="small"
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
}

function PrepItem({ name, id, editMode, meetingId, itemId }) {
  console.log("name", name);
  const [completed, markComplete] = React.useState(false);
  return (
    <div className="ma3">
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
                [`items.${itemId}.prep.${id}`]: firebase.firestore.FieldValue.delete()
              })
              .catch(error => console.error(error))
          }
          className="dim"
        />
      ) : (
        <RadioButton
          key={id}
          checked={completed}
          label={name}
          onChange={() => markComplete(true)}
        />
      )}
    </div>
  );
}
