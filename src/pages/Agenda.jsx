import { useMachine } from "@xstate/react";
import React from "react";
import Sidebar from "../components/Sidebar";
import {
  handleAddMeeting,
  useStreamMeeting
} from "../features/agenda/agendaHelpers";
import firebase from "../utilities/firebase";
import stateMachine from "../utilities/statechart";
import ActionPlan from "./ActionPlan";
import { CompletedMinutes } from "./CompletedMinutes";

const Agenda = ({ match }) => {
  const [current, send] = useMachine(stateMachine);
  const meetingId = match && match.params && match.params.meetingId;
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

  // useEffect(() => {
  //   if (meetingId && meeting) {
  //     if (meeting.status === "complete") {
  //       send("REDIRECTED_TO_COMPLETE_AGENDA");
  //     }

  //     if (meeting.status === "active") {
  //       send("REDIRECTED_TO_ACTIVE_AGENDA");
  //     }

  //     if (meeting.status === "confirmed") {
  //       send("REDIRECTED_TO_CONFIRMED_AGENDA");
  //     }

  //     if (meeting.status === "draft") {
  //       send("REDIRECTED_TO_EXISTING_AGENDA");
  //     }
  //   }
  // }, [meetingId, meeting]);

  return (
    <div data-testid="agendaPage" className="rf-min-vh-100">
      <SorryNoMobileScreen current={current} />
      <span
        className={`h-100 ${
          current.matches("complete") ? "db db-l" : "dn db-l"
        }`}
      >
        {(current.matches("loading") || current.matches("creatingAgenda")) && (
          <div className="vh-100 vw-100 flex items-center justify-center">
            <p>Loading...</p>
          </div>
        )}

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
              itemLength={
                meeting && meeting.items && Object.values(meeting.items).length
              }
              savedDateTime={meeting && meeting.dateTime}
              agendaViewAvailable={
                meeting &&
                meeting.items &&
                Object.values(meeting.items).some(
                  item =>
                    item && item.tasks && Object.values(item.tasks).length > 0
                )
              }
              minutesLink={match && match.url}
            />
            {current.matches("complete.actionPlan") && (
              <ActionPlan
                send={send}
                meeting={meeting}
                meetingId={meetingId}
                current={current}
                firebase={firebase}
                disabled={disabled}
                handleAddMeeting={handleAddMeeting}
              />
            )}
            {(current.matches("draft") ||
              current.matches("confirmed") ||
              current.matches("active") ||
              current.matches("complete.minutes")) && (
              <CompletedMinutes
                meeting={meeting}
                meetingId={meetingId}
                current={current}
                firebase={firebase}
                handleAddMeeting={handleAddMeeting}
                disabled={disabled}
              />
            )}
          </section>
        )}
      </span>
    </div>
  );
};

export default Agenda;

function SorryNoMobileScreen({ current }) {
  return (
    <div
      className={`
        ${current.matches("complete") ? "dn" : "dn-l"}
        `}
    >
      <span className="flex flex-column vh-100 vw-100 items-center justify-center measure center">
        <h1 className="f2 lh-title pa2">
          If you want to use this app on a mobile device, click on the orange
          button in the bottom right corner and let us know. You can also write
          to{" "}
          <a
            className="underline"
            href="mailto:help@meetbox.io?subject=Mobile Please"
          >
            help@meetbox.io
          </a>
          .
        </h1>
      </span>
    </div>
  );
}
