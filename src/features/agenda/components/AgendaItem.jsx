import { Button } from "grommet";
import { Close } from "grommet-icons";
import React, { useState } from "react";
import firebase from "../../../sideEffects/firebase";
import { deleteItem } from "../agendaHelpers";
import { AgendaItemName } from "./AgendaItemName";
import { ConfirmDelete } from "./ConfirmDelete";
import { Minutes } from "./Minutes";
import { Prerequisites } from "./Prerequisites";
import { TaskList } from "./TaskList";

const AgendaItem = ({
  id,
  name,
  prep,
  index,
  meetingId,
  state,
  minutes,
  tasks
}) => {
  const [confirm, setConfirm] = useState(false);
  return (
    <div
      data-testid="agendaItem"
      className={`flex items-center item${index} pl6 near-black`}
    >
      {confirm ? (
        <ConfirmDelete
          deleteItem={deleteItem}
          id={id}
          meetingId={meetingId}
          setConfirm={setConfirm}
        />
      ) : (
        <div className="flex  w-100">
          <div className={`flex justify-between items-centre ma3 flex-grow-1`}>
            {/* <dl className="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l pa3">
            <dd className="f3 fw6 ml0 ttu">5</dd>
            <dd className="f6 fw4 ml0 ttu">min</dd>
          </dl> */}
            <AgendaItemName
              name={name}
              id={id}
              meetingId={meetingId}
              state={state}
              prep={prep}
            />

            {(state === "draft" || state === "confirmed") && (
              <Prerequisites
                meetingId={meetingId}
                id={id}
                prep={prep}
                state={state}
              />
            )}

            {(state === "active" || state === "complete") && (
              <Minutes
                firebase={firebase}
                itemId={id}
                meetingId={meetingId}
                minutes={minutes}
                state={state}
              />
            )}

            {(state === "active" || state === "complete") && (
              <TaskList
                firebase={firebase}
                itemId={id}
                meetingId={meetingId}
                state={state}
                tasks={tasks}
              />
            )}
          </div>
          {(state === "draft" || state === "active") && (
            <div className="bg-light-red flex items-center">
              <Button
                icon={<Close color="white" />}
                onClick={() => setConfirm(true)}
                className="pointer grow dim"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AgendaItem;
