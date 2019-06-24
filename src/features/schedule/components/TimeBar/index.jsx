import PropTypes from "prop-types";
import React from "react";
import { SecondaryButton } from "../../../../components/Buttons";
import { TimeBlock } from "./TimeBlock";
const propTypes = {
  dates: PropTypes.objectOf(
    PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number))
  ).isRequired,
  send: PropTypes.func.isRequired
};
const defaultProps = {};

const TimeBar = ({ dates, send, setDates }) => {
  const maxTimes =
    dates &&
    // Object.values(dates) &&
    Object.values(dates).reduce((flat, toFlatten) => flat.concat(toFlatten), [])
      .length >= 3;

  return (
    <section className="w-100 h-75 tc">
      {!maxTimes && <h1 className="f1">Select up to 3 times...</h1>}
      {dates &&
        Object.entries(dates).map(([date, times], dateIndex) => (
          <div key={Math.random().toString(36)}>
            {times.map((time, index) => (
              <TimeBlock
                date={date}
                setDates={setDates}
                dates={dates}
                time={time}
                timeIndex={index}
                maxTimes={maxTimes}
                key={Math.random().toString(36)}
              />
            ))}
          </div>
        ))}

      {!maxTimes && (
        <SecondaryButton
          action={() => send("ADDED_NEW_DATE")}
          text="+ Add Another Date"
          className="mt5 h-25"
        />
      )}
    </section>
  );
};

TimeBar.propTypes = propTypes;
TimeBar.defaultProps = defaultProps;

export default TimeBar;
