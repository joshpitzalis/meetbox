import { useMachine } from "@xstate/react";
import { Button } from "grommet";
import { Add, Save } from "grommet-icons";
import React, { useEffect } from "react";
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
    <div data-testid="agendaPage">
      <div
        className={`
        ${current.matches("complete") ? "dn" : "dn-l"}
        `}
      >
        <span className="flex flex-column vh-100 vw-100 items-center justify-center measure center">
          <h1 className="f1 lh-title pa2">
            If you want to use this app on your phone, click on the orange
            button in the bottom right corner and let us know.
          </h1>
        </span>
      </div>
      <span className={current.matches("complete") ? "db db-l" : "dn db-l"}>
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

              {current.matches("complete") && (
                <a
                  className="bg-lightest-blue navy flex items-center justify-center pa4 w-100"
                  href="https://joshpitzalis.typeform.com/to/HCWJeW"
                  target="_blank"
                >
                  <span className="lh-title ml3 tc pointer grow">
                    🚀 Tell us what feature you'd like Meetbox to work on next.
                    🚀{" "}
                    <span className="underline">Click here to help us out</span>
                  </span>
                </a>
              )}

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
                  {meeting &&
                    meeting.items &&
                    Object.values(meeting.items).length > 0 && (
                      <div className="pv3 flex-ns items-center justify-center dn ">
                        <small className="o-50">
                          When you're done, click the
                        </small>
                        <Save className="ph1" color="#D4D4D4" />
                        <small className="o-50">
                          {" "}
                          icon in the bottom left corner to save.
                        </small>
                      </div>
                    )}
                </div>
              )}
            </div>
          </section>
        )}
      </span>
    </div>
  );
};

export default Agenda;
