import { Button } from "grommet";
import { Close } from "grommet-icons";
import React, { useState } from "react";
import firebase from "../../../utilities/firebase";
import { deleteItem, handleMinutesTextUpdate } from "../agendaHelpers";
import { ConfirmDelete } from "./ConfirmDelete";
import Minutes from "./Minutes";
import { Prerequisites } from "./Prep";
import { TaskList } from "./Tasks";
import ItemTime from "./Time";
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
            <ItemTime minutes={5} />
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
                handleMinutesTextUpdate={handleMinutesTextUpdate}
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
