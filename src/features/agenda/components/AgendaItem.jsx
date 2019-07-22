import { Button } from "grommet";
import { Close } from "grommet-icons";
import React, { useState } from "react";
import firebase from "../../../utilities/firebase";
import { deleteItem } from "../agendaHelpers";
import { ConfirmDelete } from "./ConfirmDelete";
import { Minutes } from "./Minutes";
import { Prerequisites } from "./Prep";
import { TaskList } from "./Tasks";
import { AgendaItemName } from "./Title";

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
      className={`flex items-center item${index} near-black`}
    >
      {confirm ? (
        <ConfirmDelete
          deleteItem={deleteItem}
          id={id}
          meetingId={meetingId}
          setConfirm={setConfirm}
        />
      ) : (
        <div className="flex w-100 pl3 pl6-ns">
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
              firebase={firebase}
            />

            {(state.matches("draft") || state.matches("confirmed")) && (
              <Prerequisites
                meetingId={meetingId}
                id={id}
                prep={prep}
                state={state}
              />
            )}

            {(state.matches("active") || state.matches("complete")) && (
              <Minutes
                firebase={firebase}
                itemId={id}
                meetingId={meetingId}
                minutes={minutes}
                state={state}
              />
            )}

            {(state.matches("active") || state.matches("complete")) && (
              <TaskList
                firebase={firebase}
                itemId={id}
                meetingId={meetingId}
                state={state}
                tasks={tasks}
              />
            )}
          </div>
          {(state.matches("active") || state.matches("draft")) && (
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
