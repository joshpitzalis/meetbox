export const convertToTimeInterval = times => {
  const timeA = times[0];
  const timeB = times[1];

  const TwelveHourFormat = time => {
    if (time > 12) {
      return `${time - 12} pm`;
    }
    return `${time} am`;
  };

  return `${TwelveHourFormat(timeA)} to ${TwelveHourFormat(timeB)}`;
};

export const handleNewTime = (date, setDates, dates) =>
  setDates({ ...dates, [date]: [...dates[date], [10, 11]] });

export const handleChangeTime = (newTimes, date, setDates, dates, index) => {
  const nextTimes = [...dates[date]];
  nextTimes[index] = newTimes;
  return setDates({
    ...dates,
    [date]: nextTimes
  });
};

export const handleClose = (date, setDates, dates, timeIndex) => {
  // if there is only one time for teh date then deleting it removes the date from the calendar
  if (dates[date].length === 1) {
    const nextDates = { ...dates };
    delete nextDates[date];
    return setDates(nextDates);
  }

  const nextTimes = dates[date].filter((item, index) => index !== timeIndex);
  console.log("nextTimes", nextTimes);
  return setDates({
    ...dates,
    [date]: nextTimes
  });
};
