import { useMachine } from "@xstate/react";
import { Button } from "grommet";
import { Add, Save } from "grommet-icons";
import React, { useEffect } from "react";
import { notfication$ } from "../components/Banner";
import Sidebar from "../components/Sidebar";
import {
  handleAddMeeting,
  useStreamMeeting
} from "../features/agenda/agendaHelpers";
import AgendaItem from "../features/agenda/components/AgendaItem";
import firebase from "../utilities/firebase";
import stateMachine from "../utilities/statechart";

const Agenda = ({ match }) => {
  const [current, send] = useMachine(stateMachine);
  const meetingId = match.params.meetingId;
  const meeting = useStreamMeeting(meetingId);

  const [disabled, setDisabled] = React.useState(false);

  React.useEffect(() => {
    setDisabled(false);
    const blankItem =
      meeting &&
      meeting.items &&
      Object.values(meeting.items).some(({ name }) => !name);

    if (blankItem) {
      setDisabled(true);
    }
  }, [meeting]);

  useEffect(() => {
    if (meetingId && meeting) {
      if (meeting.status === "complete") {
        send("REDIRECTED_TO_COMPLETE_AGENDA");
      }

      if (meeting.status === "active") {
        send("REDIRECTED_TO_ACTIVE_AGENDA");
      }

      if (meeting.status === "confirmed") {
        send("REDIRECTED_TO_CONFIRMED_AGENDA");
      }

      if (meeting.status === "draft") {
        send("REDIRECTED_TO_EXISTING_AGENDA");
      }
    }
  }, [meetingId, meeting]);

  return (
    <>
      {(current.matches("loading") || current.matches("creatingAgenda")) && (
        <div className="vh-100 vw-100 flex items-center justify-center">
          <p>Loading...</p>
        </div>
      )}
      <button
        onClick={() =>
          notfication$.next(`Some info that you want to call attention to.`)
        }
      >
        clickme
      </button>
      {(current.matches("draft") ||
        current.matches("confirmed") ||
        current.matches("active") ||
        current.matches("complete")) && (
        <section className="flex flex-wrap flex-column-ns flex-row vh-100-ns h-auto">
          <Sidebar
            send={send}
            state={current}
            meetingId={meetingId}
            firebase={firebase}
            title={meeting && meeting.summary}
            match={match}
          />
          <div className="flex-grow-1 w-100 flex flex-column">
            {meeting &&
              meeting.items &&
              Object.values(meeting.items).map((props, index) => (
                <AgendaItem
                  key={props.id}
                  {...props}
                  meetingId={meetingId}
                  index={index}
                  state={current}
                  firebase={firebase}
                />
              ))}
            {(current.matches("draft") || current.matches("active")) && (
              <div className="pa5 tc w-100">
                <Button
                  icon={<Add />}
                  className={`pointer dim`}
                  size="large"
                  primary
                  label="Add An Agenda Item"
                  onClick={() => handleAddMeeting(meetingId)}
                  disabled={disabled}
                />
                <div className="pv3 flex-ns items-center justify-center dn ">
                  <small className="o-50">When you're done, click the</small>
                  <Save className="ph1" color="#D4D4D4" />
                  <small className="o-50">
                    {" "}
                    icon in the bottom left corner to finalise.
                  </small>
                </div>
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default Agenda;
