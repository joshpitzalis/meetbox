import { useMachine } from "@xstate/react";
import { Button } from "grommet";
import { Add, Send } from "grommet-icons";
import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import {
  handleAddMeeting,
  useStreamMeeting
} from "../features/agenda/agendaHelpers";
import AgendaItem from "../features/agenda/components/AgendaItem";
import stateMachine from "../statechart";

const Agenda = ({ match, history }) => {
  const [current, send] = useMachine(stateMachine);
  const meetingId = match.params.meetingId;
  const meeting = useStreamMeeting(meetingId);

  useEffect(() => {
    if (meetingId && meeting && meeting.status === "complete") {
      send("REDIRECTED_TO_COMPLETE_AGENDA");
    }

    if (meetingId && meeting && meeting.status === "active") {
      send("REDIRECTED_TO_ACTIVE_AGENDA");
    }

    if (meetingId && meeting && meeting.status === "confirmed") {
      send("REDIRECTED_TO_CONFIRMED_AGENDA");
    }

    if (meetingId && meeting && meeting.status === "draft") {
      send("REDIRECTED_TO_EXISTING_AGENDA");
    }

    if (!meetingId) {
      send({ type: "NEW_AGENDA_CREATED", payload: history });
    }
  }, [meetingId, meeting]);

  return (
    <>
      {(current.matches("loading") || current.matches("creatingAgenda")) && (
        <div className="vh-100 vw-100 flex items-center justify-center">
          <p>Loading...</p>
        </div>
      )}

      {(current.matches("draft") ||
        current.matches("confirmed") ||
        current.matches("active") ||
        current.matches("complete")) && (
        <section className="flex vh-100 w-100 ">
          <Sidebar send={send} state={current.value} />
          <div className="flex-grow-1 w-100 flex flex-column">
            {meeting &&
              meeting.items &&
              Object.values(meeting.items).map((props, index) => (
                <AgendaItem
                  key={props.id}
                  {...props}
                  meetingId={meetingId}
                  index={index}
                  state={current.value}
                />
              ))}
            {(current.matches("draft") || current.matches("active")) && (
              <div className="pa5 tc w-100">
                <Button
                  icon={<Add />}
                  className="pointer grow"
                  size="large"
                  primary
                  label="Add Agenda Item"
                  onClick={() => handleAddMeeting(meetingId)}
                />
                <div className="pv3 flex items-center justify-center">
                  <small className="o-50">
                    When you are done, click on the
                  </small>
                  <Send className="ph1" />
                  <small className="o-50"> to finalise.</small>
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
