import { Button, TextArea } from "grommet";
import { Add, Close } from "grommet-icons";
import { useState } from "react";
import firebase from "../../../sideEffects/firebase";
import { AgendaItemName } from "./AgendaItemName";
import { Prerequisites } from "./Prerequisites";

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

  const [confirm, setConfirm] = useState(false);
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
        <div className="flex justify-between items-centre w-100">
          <dl className="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l pa3">
            <dd className="f3 fw6 ml0 ttu">5</dd>
            <dd className="f6 fw4 ml0 ttu">min</dd>
          </dl>
          <div className={`flex flex-column item-start measure-wide`}>
            <AgendaItemName name={name} id={id} meetingId={meetingId} />
            {state === "active" && (
              <Prerequisites
                meetingId={meetingId}
                id={id}
                prep={prep}
                status="locked"
              />
            )}
          </div>
          {(state === "draft" || state === "confirmed") && (
            <Prerequisites meetingId={meetingId} id={id} prep={prep} />
          )}

          {(state === "active" || state === "complete") && (
            <Minutes setShowNotes={setShowNotes} />
          )}

          {/* there should also be a tasks section */}

          {(state === "active" || state === "complete") && (
            <p className="measure">task list</p>
          )}

          {(state === "draft" || state === "active") && (
            <Button
              icon={<Close />}
              onClick={() => setConfirm(true)}
              className="pointer grow"
            />
          )}
        </div>
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

function Minutes({ setShowNotes }) {
  const [editable, setEditable] = useState(false);
  return (
    <div className="ma3 h5 pointer measure" onClick={() => setShowNotes(true)}>
      {editable ? (
        <TextArea resize="vertical" className="w-100 bg-white" fill={true} />
      ) : (
        <div className="ma3">
          <Button
            icon={<Add />}
            label="Add Notes, Tasks, Votes Or Decisions"
            onClick={() => setEditable(true)}
            plain
          />
        </div>
      )}
    </div>
  );
}
