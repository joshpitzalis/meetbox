import { format } from "date-fns";
import React from "react";
import { PrimaryButton } from "../components/Buttons";
import { selectTime } from "../features/schedule/helpers/actions";
import { convertToTimeInterval } from "../features/schedule/helpers/timeBarHelpers";
import { db } from "../sideEffects/firebase";

const Meet = ({ match }) => {
  const [meetings, setMeetings] = React.useState(false);

  const slug = match.params.meetId;

  React.useEffect(() => {
    const fetchData = async () => {
      await db
        .collection("meetings")
        .doc(slug)
        .get()
        .then(doc => doc.exists && doc.data())
        .then(meetings => {
          console.log("meetings", meetings);
          setMeetings(meetings);
          setLoaded(true);
          meetings.date && meetings.time && setConfirm(true);
        })
        .catch(error => error);
    };
    fetchData();
  }, [slug]);

  const options = meetings && Object.entries(JSON.parse(meetings.options));

  const [selected, setSelected] = React.useState(false);

  const [confirmed, setConfirm] = React.useState(false);

  const [loaded, setLoaded] = React.useState(false);

  return (
    <section className="vh-100">
      <div className="flex flex-column items-between justify-center h-100">
        {loaded && confirmed ? (
          <h1 className="f1 tc">Confirmed</h1>
        ) : loaded ? (
          <h1 className="f1 tc">Pick a time...</h1>
        ) : (
          <h1 className="f1 tc">Loading...</h1>
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
    </section>
  );
};

export default Meet;

const TimeBox = ({ date, time, setSelected, selected }) => {
  const picked =
    date === selected.date &&
    time[0] === selected.time[0] &&
    time[1] === selected.time[1];

  return (
    <article
      className={`mw5 center br3 pa3 pa4-ns mv3 ba b--black-10 pointer grow ${
        picked ? "bg-light-blue" : "bg-white"
      }`}
      key={date + time}
      onClick={() => setSelected({ date, time })}
    >
      <div className="tc">
        <h1 className="f4 black-70">{format(new Date(date), "Do MMMM")}</h1>
        <hr className="mw3 bb bw1 b--black-10" />
      </div>
      <p className="lh-copy measure center f3 ">
        {convertToTimeInterval(time)}
      </p>
      <p className="lh-copy measure center f6 gray tc ">+ 5:30 GMT</p>
    </article>
  );
};
