export const handleSelectDate = (dates, date, handleSelect) => {
  const selectedDate = new Date(new Date(date).setHours(0, 0, 0, 0));
  if (dates && dates.hasOwnProperty(selectedDate)) {
    const newDates = { ...dates };
    delete newDates[selectedDate];
    return handleSelect(newDates);
  }
  return handleSelect({ ...dates, [selectedDate]: [[13, 14]] });
};
