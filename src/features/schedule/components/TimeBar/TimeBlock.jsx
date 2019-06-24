import { format } from "date-fns";
import { RangeSelector } from "grommet";
import { Add, Close } from "grommet-icons";
import React from "react";
import {
  convertToTimeInterval,
  handleChangeTime,
  handleClose,
  handleNewTime
} from "../../helpers/timeBarHelpers";

export const TimeBlock = ({
  time,
  date,
  setDates,
  dates,
  timeIndex,
  maxTimes
}) => {
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
              if (index === 0 && maxTimes) {
                return (
                  <div
                    key={index}
                    className={`bn flex items-center justify-center w-100 z-1`}
                  >
                    <Close
                      className="grow pb2 pointer gray"
                      onClick={() =>
                        handleClose(date, setDates, dates, timeIndex)
                      }
                    />
                  </div>
                );
              }
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
