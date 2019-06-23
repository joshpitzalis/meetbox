import { Calendar } from "grommet";
import PropTypes from "prop-types";
import React from "react";
import { handleSelectDate } from "../helpers/calendarHelpers";

const propTypes = {
  handleSelect: PropTypes.func.isRequired,
  dates: PropTypes.arrayOf(PropTypes.string).isRequired
};

const defaultProps = {};

export default function calendar({ handleSelect, dates }) {
  return (
    <section className="center ma4">
      <Calendar
        onSelect={date => handleSelectDate(dates, date, handleSelect)}
        size="medium"
        showAdjacentDays
        animate
        dates={Object.keys(dates)}
      />
    </section>
  );
}

calendar.propTypes = propTypes;
calendar.defaultProps = defaultProps;
