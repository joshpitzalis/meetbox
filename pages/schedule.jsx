import { useMachine } from "@xstate/react";
import { format } from "date-fns";
import Router from "next/router";
import React, { useState } from "react";
import { Machine } from "xstate";
import { PrimaryButton } from "../../components/Buttons";
import { selectTime } from "../../features/schedule/helpers/actions";
import { convertToTimeInterval } from "../../features/schedule/helpers/timeBarHelpers";
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



// ###



const propTypes = {};

const defaultProps = {};

const getInitialProps = async url => {
  // const slug = url.query.slug;
  // const meetings = await firebase
  //   .firestore()
  //   .collection("meetings")
  //   .doc(slug)
  //   .get()
  //   .then(doc => doc.exists && doc.data())
  //   .catch(error => error);
  // return { meetings };
  return {};
};

export default function index({ meetings, url }) {
  const options = meetings && Object.entries(JSON.parse(meetings.options));
  const slug = url.query.slug;

  const [selected, setSelected] = React.useState(false);

  const [confirmed, setConfirm] = React.useState(
    meetings && meetings.date && meetings.time
  );

  return (
    <Layout>
      <div className="flex flex-column items-between justify-center h-100">
        {confirmed ? (
          <h1 className="f1 tc">Confirmed</h1>
        ) : (
          <h1 className="f1 tc">Pick a time...</h1>
        )}
        <section className="flex items-center justify-center vh-50">
          {options &&
            options.map(([date, time]) =>
              time.map(time => (
                <TimeBox
                  date={date}
                  time={time}
                  slug={slug}
                  setSelected={setSelected}
                  selected={
                    meetings.date && meetings.time
                      ? { date: meetings.date, time: meetings.time }
                      : selected
                  }
                />
              ))
            )}
        </section>
        {selected && !confirmed && (
          <div className="tc w-100">
            <PrimaryButton
              text="Confirm"
              action={() => {
                selectTime(selected.date, selected.time, slug);
                setConfirm(true);
              }}
            />
          </div>
        )}
      </div>
    </Layout>
  );
}

index.propTypes = propTypes;
index.defaultProps = defaultProps;
index.getInitialProps = getInitialProps;

const TimeBox = ({ date, time, setSelected, selected }) => {
  const picked =
    date === selected.date &&
    time[0] === selected.time[0] &&
    time[1] === selected.time[1];

  console.log("selected", selected);
  return (
    <article
      className={`mw5 center br3 pa3 pa4-ns mv3 ba b--black-10 pointer grow ${
        picked ? "bg-light-blue" : "bg-white"
      }`}
      key={date + time}
      onClick={() => setSelected({ date, time })}
    >
      <div className="tc">
        <h1 className="f4 black-70">{format(new Date(date), "do MMMM")}</h1>
        <hr className="mw3 bb bw1 b--black-10" />
      </div>
      <p className="lh-copy measure center f3 ">
        {convertToTimeInterval(time)}
      </p>
    </article>
  );
};
