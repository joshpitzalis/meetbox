import { useMachine } from "@xstate/react";
import { Button } from "grommet";
import { Add, Save } from "grommet-icons";
import React, { useEffect } from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";
import Sidebar from "../components/Sidebar";
import { handleAddMeeting, useStreamMeeting } from "../features/agenda/agendaHelpers";
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
        // send("REDIRECTED_TO_COMPLETE_AGENDA");
        send("REDIRECTED_TO_ACTION_PLAN");
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

        {current.matches("complete") && (
          <button onClick={() => send("REDIRECTED_TO_ACTION_PLAN")}>
            Go to Action Plan
          </button>
        )}

        {(current.matches("draft") ||
          current.matches("confirmed") ||
          current.matches("active") ||
          current.matches("complete") ||
          current.matches("actionPlan")) && (
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

            {current.matches("actionPlan") && (
              <ActionPlan
                send={send}
                meeting={meeting}
                meetingId={meetingId}
                current={current}
                firebase={firebase}
              />
            )}

            {current.matches("draft") ||
              current.matches("confirmed") ||
              current.matches("active") ||
              (current.matches("complete") && (
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
                        🚀 Tell us what feature you'd like Meetbox to work on
                        next. 🚀{" "}
                        <span className="underline">
                          Click here to help us out
                        </span>
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
              ))}
          </section>
        )}
      </span>
    </div>
  );
};

export default Agenda;

function ActionPlan({ send, meeting, meetingId, current, firebase }) {
  return (
    <div className="ml6">
      <section className="flex-grow-1 w-100 flex flex-column ">
        <TeamStats />

        {meeting &&
          meeting.items &&
          Object.values(meeting.items).map((props, index) => (
            <TaskList
              key={props.id}
              {...props}
              meetingId={meetingId}
              index={index}
              state={current}
              firebase={firebase}
            />
          ))}

        <button onClick={() => send("REDIRECTED_TO_ACTION_PLAN")}>
          Go to Minutes View
        </button>
      </section>
    </div>
  );
}

export const TeamStats = () => (
  <section className="pa3 pa5-ns" data-name="slab-stat-small">
    {/* <h3 className="f6 ttu tracked">Project Stats</h3> */}
    <div className="cf">
      <dl className="db dib-l w-auto-l lh-title mr6-l">
        {/* useful for finding github issues count history */}
        {/* https://9-volt.github.io/bug-life/?repo=joshpitzalis/tinyteams */}
        <Sparklines
          data={[3, 12, 13, 8, 9, 10, 12, 21, 19, 22, 32, 46, 55, 51, 71, 73]}
        >
          <SparklinesLine style={{ fill: "none" }} />
        </Sparklines>
        <dd className="f6 fw4 ml0">Github Issues</dd>
        <dd className="f7 fw4 ml0 o-30">Last updated 24 March</dd>
        <dd className="f2 f-subheadline-l fw6 ml0">73</dd>
      </dl>
      <dl className="db dib-l w-auto-l lh-title mr6-l">
        <Sparklines data={[0, 2]}>
          <SparklinesLine style={{ fill: "none" }} />
        </Sparklines>
        <dd className="f6 fw4 ml0">Email Subscribers</dd>
        <dd className="f7 fw4 ml0 o-30">Last updated 24 March</dd>
        <dd className="f2 f-subheadline-l fw6 ml0">2</dd>
      </dl>
    </div>
  </section>
);

const TaskList = ({
  id,
  name,
  prep,
  index,
  meetingId,
  state,
  minutes,
  tasks
}) => (
  <form className="pa4">
    <fieldset id={name} className="bn">
      <legend className="fw7 mb2">{name}</legend>
      {tasks &&
        Object.values(tasks).map(item => (
          <div className="flex items-center mb2">
            <input
              className="mr2"
              type="checkbox"
              id="spacejam"
              value="spacejam"
            />
            <label for="spacejam" className="lh-copy">
              Space Jam
            </label>
          </div>
        ))}
    </fieldset>
  </form>
);
