import React from "react";
import Day from '../Day/Day';
import styles from "./Week.scss";

const Week = ({ days, currentMonth, selectedDate, onSelectDate }) => {
  const renderDays = () => {
    return days.map((day) => (
      <Day
        key={day}
        day={day}
        currentMonth={currentMonth}
        selectedDate={selectedDate}
        onSelectDate={onSelectDate}
      />
    ));
  };

  return <tr>{renderDays()}</tr>;
};

export default Week;

