import { useMachine } from "@xstate/react";
import { LinkNext } from "grommet-icons";
import React, { useEffect, useState } from "react";
import { Machine } from "xstate";
import Calendar from "../features/schedule/components/Calendar";
import TimeBar from "../features/schedule/components/TimeBar";
import { createMeeting } from "../features/schedule/helpers/actions";
import { db } from "../sideEffects/firebase";

// interface ScheduleStateSchema {
//   states: {
//     calendar: {};
//     times: {};
//     loading: {};
//     ready: {};
//     confirmed: {};
//     failure: {};
//   };
// }

// type ScheduleEvent =
//   | { type: "CONFIRMED_DATES" }
//   | { type: "CONFIRMED_TIMES" }
//   | { type: "ADDED_NEW_DATE" }
//   | { type: "SELECTED_A_DATE" };

// interface ScheduleContext {}

// const scheduleMachine = Machine<
//   ScheduleContext,
//   ScheduleStateSchema,
//   ScheduleEvent
// >

const scheduleMachine = Machine({
  id: "schedule",
  initial: "calendar",
  context: {},
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

// const App: FunctionComponent = () => {
//   const tomorrow: string = new Date(
//     new Date(new Date().setDate(new Date().getDate() + 1)).setHours(0, 0, 0, 0)
//   ).toString();

const App = ({ history }) => {
  const tomorrow = new Date(
    new Date(new Date().setDate(new Date().getDate() + 1)).setHours(0, 0, 0, 0)
  );

  const [dates, setDates] = useState({
    [tomorrow]: [[13, 14]]
  });

  const [current, send] = useMachine(scheduleMachine);
  const [meetings, setMeetings] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await db
        .collection("meetings")
        .get()
        .then(collection => {
          const meetings = collection.docs.map(doc => doc.data());
          setMeetings(meetings);
        })
        .catch(error => error);
      return response;
    }
    fetchData();
  }, []);

  return (
    <section>
      <section className="vh-100 vw-100 flex flex-column items-center justify-around pa0 ma0">
        {current.value === "calendar" && (
          <>
            <h1 className="f1">Pick up to 3 dates to meet...</h1>
            <Calendar handleSelect={setDates} dates={dates} />
            <LinkNext
              onClick={() => send("CONFIRMED_DATES")}
              className="pointer grow"
            />
          </>
        )}

        {current.value === "times" && (
          <>
            <TimeBar dates={dates} send={send} setDates={setDates} />
            <LinkNext
              onClick={() => send({ type: "CONFIRMED_TIMES", payload: dates })}
              className="pointer grow gray"
            />
          </>
        )}
        {current.value === "ready" &&
          history.push(`/meet/${current.event.data}`)}
      </section>
    </section>
  );
};

export default App;
