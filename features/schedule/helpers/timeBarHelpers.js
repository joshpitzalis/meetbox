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
