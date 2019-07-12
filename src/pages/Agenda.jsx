import { useMachine } from "@xstate/react";
import { Button } from "grommet";
import { Add, Send } from "grommet-icons";
import React, { useEffect } from "react";
import { doc } from "rxfire/firestore";
import Sidebar from "../components/Sidebar";
import AgendaItem from "../features/agenda/components/AgendaItem";
import firebase from "../sideEffects/firebase";
import stateMachine from "../statechart";

const useStreamMeeting = meetingId => {
  const stream$ = doc(firebase.firestore().doc(`meetings/${meetingId}`));
  const [meeting, updateMeeting] = React.useState();
  React.useEffect(() => {
    const stream = stream$.subscribe(snapshot =>
      updateMeeting(snapshot.data())
    );
    return () => stream.unsubscribe();
  }, [meetingId]);

  return meeting;
};

const Agenda = ({ match, history }) => {
  const [current, send] = useMachine(stateMachine);

  const meetingId = match.params.meetingId;
  console.log("meetingId", meetingId);

  useEffect(() => {
    if (meetingId) {
      send("REDIRECTED_TO_EXISTING_AGENDA");
    }
    send({ type: "NEW_AGENDA_CREATED", payload: history });
  }, [meetingId]);

  const meeting = useStreamMeeting(meetingId);

  const handleAddMeeting = meetingId => {
    const timestamp = +new Date();

    return firebase
      .firestore()
      .doc(`meetings/${meetingId}`)
      .update({
        [`items.${timestamp}.id`]: timestamp
      })
      .catch(error => console.error({ error }));
  };

  // console.log("state", current.value);

  return (
    <>
      {(current.value === "draft" ||
        current.value === "confirmed" ||
        current.value === "active" ||
        current.value === "complete") && (
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
            {(current.value === "draft" || current.value === "active") && (
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

      {current.value === "failure" && (
        <div className="vh-100 vw-100 flex items-center justify-center">
          FAILURE
        </div>
      )}
    </>
  );
};

export default Agenda;
