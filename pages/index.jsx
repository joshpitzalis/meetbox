import { useMachine } from "@xstate/react";
import { useState } from "react";
import { Machine } from "xstate";
import Layout from "../components/Layout";
import Calendar from "../features/schedule/components/Calendar";
import TimeBar from "../features/schedule/components/TimeBar";
import Next from "../static/svg/NextStep.jsx";

const scheduleMachine = Machine({
  id: "schedule",
  initial: "times",
  states: {
    calendar: {
      on: { CONFIRMED_DATES: "times" }
    },
    times: {
      on: {
        CONFIRMED_TIMES: "ready",
        ADDED_NEW_DATE: "calendar"
      }
    },
    ready: {
      on: { SELECTED_A_DATE: "confirmed" }
    },
    confirmed: {
      type: "final"
    }
  }
});

const propTypes = {};

const defaultProps = {};

export default function index() {
  const tomorrow = new Date(
    new Date(new Date().setDate(new Date().getDate() + 1)).setHours(0, 0, 0, 0)
  );

  const [dates, setDates] = useState({
    [tomorrow]: [[13, 14]]
  });

  const [current, send] = useMachine(scheduleMachine);
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
              action={() => send("CONFIRMED_TIMES")}
              className="pointer grow gray"
            />
          </>
        )}
      </section>
    </Layout>
  );
}

index.propTypes = propTypes;
index.defaultProps = defaultProps;
