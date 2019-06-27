import { useMachine } from "@xstate/react";
import Router from "next/router";
import { useState } from "react";
import { Machine } from "xstate";
import Layout from "../components/Layout";
import Calendar from "../features/schedule/components/Calendar";
import TimeBar from "../features/schedule/components/TimeBar";
import { createMeeting } from "../features/schedule/helpers/actions";
import firebase from "../sideEffects/firebase";
import Next from "../static/svg/NextStep.jsx";
const scheduleMachine = Machine({
  id: "schedule",
  initial: "calendar",
  states: {
    calendar: {
      on: { CONFIRMED_DATES: "times" }
    },
    times: {
      on: {
        CONFIRMED_TIMES: "loading",
        ADDED_NEW_DATE: "calendar"
      }
    },
    loading: {
      invoke: {
        id: "createMeeting",
        src: (context, event) => createMeeting(event),
        onDone: {
          target: "ready"
          // The resolved data is placed into a 'done.invoke.<id>' event, under the data property http://bit.ly/2Ft2WR8
        },
        onError: {
          target: "failure"
        }
      }
    },
    ready: {
      on: { SELECTED_A_DATE: "confirmed" }
    },
    confirmed: {
      type: "final"
    },
    failure: { type: "final" }
  }
});

const propTypes = {};

const defaultProps = {};

const getInitialProps = async () => {
  const meetings = await firebase
    .firestore()
    .collection("meetings")
    .get()
    .then(collection => collection.docs.map(doc => doc.data()))
    .catch(error => error);

  return { meetings };
};

export default function index({ meetings }) {
  const tomorrow = new Date(
    new Date(new Date().setDate(new Date().getDate() + 1)).setHours(0, 0, 0, 0)
  );

  const [dates, setDates] = useState({
    [tomorrow]: [[13, 14]]
  });

  const [current, send] = useMachine(scheduleMachine);

  console.log({ data: current.event.data, state: current.value });
  return (
    <Layout>
      <section className="vh-100 vw-100 flex flex-column items-center justify-around pa0 ma0">
        {current.value === "calendar" && (
          <>
            <h1 className="f1">Pick up to 3 dates to meet...</h1>
            <Calendar handleSelect={setDates} dates={dates} />
            <Next
              action={() => send("CONFIRMED_DATES")}
              className="pointer grow"
            />
          </>
        )}

        {current.value === "times" && (
          <>
            <TimeBar dates={dates} send={send} setDates={setDates} />
            <Next
              action={() => send({ type: "CONFIRMED_TIMES", payload: dates })}
              className="pointer grow gray"
            />
          </>
        )}
        {current.value === "ready" &&
          Router.push(`/meet/${current.event.data}`)}
      </section>
    </Layout>
  );
}

index.propTypes = propTypes;
index.defaultProps = defaultProps;
index.getInitialProps = getInitialProps;
