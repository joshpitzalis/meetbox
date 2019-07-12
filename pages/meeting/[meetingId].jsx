import { useMachine } from "@xstate/react";
import { Button } from "grommet";
import { Add, Play, Send, Stop } from "grommet-icons";
import { useRouter } from "next/router";
import { doc } from "rxfire/firestore";
import Layout from "../../components/Layout";
import AgendaItem from "../../features/agenda/components/AgendaItem";
import firebase from "../../sideEffects/firebase";
import agendaMachine from "../../statechart";

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

const Index = () => {
  const [current, send] = useMachine(agendaMachine);

  const router = useRouter();

  const meetingId = router.query.meetingId;

  React.useEffect(() => {
    if (meetingId) {
      send("REDIRECTED_TO_EXISTING_AGENDA");
    }
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

  return (
    <Layout>
      {(current.value === "draft" ||
        current.value === "confirmed" ||
        current.value === "active" ||
        current.value === "complete") && (
        <section className="flex  vh-100 w-100 ">
          <aside className=" flex flex-column justify-around items-center fixed vh-100 bg-white">
            {current.value === "confirmed" ? (
              <Play
                onClick={() => send({ type: "STARTED" })}
                className="pointer"
              />
            ) : current.value === "active" ? (
              <Stop className="pointer " onClick={() => send("ENDED")} />
            ) : (
              <span />
            )}
            <h1 className="ph4 title">Meetbox</h1>
            {current.value === "draft" ? (
              <Send className="pointer " onClick={() => send("SAVED_DRAFT")} />
            ) : (
              <span />
            )}
          </aside>
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
                  <small className="o-50">When you are done click on the</small>
                  <Send className="ph1" />
                  <small className="o-50">icon to the left finalise.</small>
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

      <style jsx>
        {`
          .title {
            writing-mode: vertical-rl;
            transform: rotate(180deg);
            text-align: center;
            font-size: 4rem;
            text-transform: uppercase;

            font-family: Futura, "Trebuchet MS", Arial, sans-serif;
            font-size: 23px !important;
            font-style: normal;
            font-variant: normal;
            font-weight: 700;
            line-height: 23px;
            color: #363d87;
          }
        `}
      </style>
    </Layout>
  );
};

export default Index;
