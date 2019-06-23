import { format } from "date-fns";
import { RangeSelector } from "grommet";
import PropTypes from "prop-types";
import React from "react";
import { SecondaryButton } from "../../../components/Buttons";
import Add from "../../../static/svg/Add";
import { convertToTimeInterval } from "../helpers/timeBarHelpers";

const propTypes = {
  dates: PropTypes.arrayOf(PropTypes.string).isRequired,
  send: PropTypes.func.isRequired
};
const defaultProps = {};

export default function TimeBar({ dates, send, setDates }) {
  return (
    <section className="w-100 h-75 tc">
      <h1 className="f1">Select up to 3 times...</h1>
      {dates &&
        Object.entries(dates).map(([date, times], dateIndex) => {
          return (
            <div key={date + dateIndex}>
              {times.map((time, index) => (
                <TimeBlock
                  date={date}
                  setDates={setDates}
                  dates={dates}
                  time={time}
                  timeIndex={index}
                />
              ))}
            </div>
          );
        })}

      <SecondaryButton
        action={() => send("ADDED_NEW_DATE")}
        text="+ Add Another Date"
        className="mt5 h-25"
      />
    </section>
  );
}

TimeBar.propTypes = propTypes;
TimeBar.defaultProps = defaultProps;

const handleNewTime = (date, setDates, dates) =>
  setDates({ ...dates, [date]: [...dates[date], [10, 11]] });

const handleChangeTime = (newTimes, date, setDates, dates, index) => {
  const nextTimes = [...dates[date]];
  nextTimes[index] = newTimes;
  return setDates({
    ...dates,
    [date]: nextTimes
  });
};

const TimeBlock = ({ time, date, setDates, dates, timeIndex }) => {
  return (
    <>
      <h3 className="tc mt5 relative top-2">
        {format(new Date(date), "do MMMM")}{" "}
        <span className="f2 pl3">{convertToTimeInterval(time)}</span>
      </h3>
      <div className="h3 ma3 flex">
        <div className="w-100 pt0">
          <div className="flex justify-around relative top-2">
            {new Array(25).fill("").map((value, index) => {
              if (index === 0) {
                return (
                  <div
                    key={index}
                    className={`bn flex items-center justify-center w-100 z-1`}
                  >
                    <Add
                      className="grow pb2 pointer gray"
                      onClick={() => handleNewTime(date, setDates, dates)}
                    />
                  </div>
                );
              }
              return (
                <div
                  key={index}
                  className={`bn tc w-100 ${(index <= 5 || index >= 20) &&
                    "bg-light-gray"}`}
                >
                  <p className={`code pb2 tc`}>{index}</p>
                </div>
              );
            })}
          </div>
          <RangeSelector
            values={time}
            min={0}
            max={24}
            step={1}
            color="#7D52D8"
            className="relative  bottom-2 pt1"
            onChange={newTimes =>
              handleChangeTime(newTimes, date, setDates, dates, timeIndex)
            }
            round="small"
          />
        </div>
      </div>
    </>
  );
};
