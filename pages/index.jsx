import { useMachine } from "@xstate/react";
import { Button, Clock } from "grommet";
import { Add, Play, Send, Stop } from "grommet-icons";
import Router, { useRouter } from "next/router";
import { doc } from "rxfire/firestore";
import { Machine } from "xstate";
import Layout from "../components/Layout";
import AgendaItem from "../features/agenda/components/AgendaItem";
import firebase from "../sideEffects/firebase";

const offline = false;
const meetingId = "1l3wk";

const createAgenda = event => {
  if (offline) {
    return Router.push(`/meeting/${meetingId}`);
  }
  const doc = firebase
    .firestore()
    .collection("meetings")
    .doc();
  // return Router.push(`/meeting/${doc.id}`);
  return Router.push({
    pathname: `/meeting/${doc.id}`,
    query: { meetingId: doc.id }
  });
};

const propTypes = {};

const defaultProps = {};

const agendaMachine = Machine({
  id: "agenda",

  initial: "loading",
  states: {
    loading: {
      on: {
        NEW_AGENDA_CREATED: "creatingAgenda",
        REDIRECTED_TO_EXISTING_AGENDA: "draft"
      }
    },
    creatingAgenda: {
      invoke: {
        id: "createAgenda",
        src: (context, event) => createAgenda(event),
        onDone: {
          target: "draft"
          // The resolved data is placed into a 'done.invoke.<id>' event, under the data property http://bit.ly/2Ft2WR8
        },
        onError: {
          target: "loading"
        }
      }
    },
    draft: {
      on: {
        SAVED_DRAFT: "confirmed"
      }
    },
    confirmed: {
      on: {
        STARTED: "active"
      }
    },
    active: {
      on: {
        ENDED: "complete"
      }
    },
    complete: { type: "final" }
  }
});

const useStreamMeeting = id => {
  const stream$ = doc(firebase.firestore().doc(`meetings/${id}`));
  const [meeting, updateMeeting] = React.useState();
  React.useEffect(() => {
    const stream = stream$.subscribe(snapshot =>
      updateMeeting(snapshot.data())
    );
    return () => stream.unsubscribe();
  }, []);
  return meeting;
};

// const getInitialProps = async () => {
//   // const slug = url.query.slug;
//   // const meetings = await firebase
//   //   .firestore()
//   //   .collection("meetings")
//   //   .doc(slug)
//   //   .get()
//   //   .then(doc => doc.exists && doc.data())
//   //   .catch(error => error);
//   // return { meetings };

//   const router = useRouter();

//   const { meetingId } = router.query;

//   return { meetingId };
// };

export default function index(props) {
  const [current, send] = useMachine(agendaMachine);

  const router = useRouter();

  const { meetingId } = router.query;

  console.log("meetingIdA", meetingId);

  // React.useEffect(() => {
  //   if (!meetingId) {
  //     send("NEW_AGENDA_CREATED");
  //   }
  //   // send("REDIRECTED_TO_EXISTING_AGENDA");
  // }, [meetingId]);

  const meeting = useStreamMeeting(meetingId);

  const [listOfMeetings, setMeetings] = React.useState(
    offline ? [] : meeting && Object.values(meeting.items)
  );

  const handleAddMeeting = () => {
    const timestamp = +new Date();

    if (offline) {
      const newMeetings = [
        ...listOfMeetings,
        {
          [`items.${timestamp}.id`]: timestamp
        }
      ];

      return setMeetings(newMeetings);
    }

    firebase
      .firestore()
      .doc(`meetings/${meetingId}`)
      .update({
        [`items.${timestamp}.id`]: timestamp
      })
      .catch(error => console.error(error));
  };

  return (
    <Layout>
      {(current.value === "loading" || current.value === "creatingAgenda") && (
        <div className="vh-100 vw-100 flex items-center justify-center">
          <Clock type="digital" />
        </div>
      )}

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
            {listOfMeetings.map((props, index) => (
              <AgendaItem
                {...props}
                index={index}
                meetingId={meetingId}
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
                  onClick={handleAddMeeting}
                />
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
}

index.propTypes = propTypes;
index.defaultProps = defaultProps;
