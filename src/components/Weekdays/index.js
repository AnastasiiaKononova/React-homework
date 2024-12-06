import React from "react";
import { format } from "date-fns";
import styles from "./Weekdays.scss";

const generateWeekdays = () =>
  Array.from({ length: 7 }, (_, i) => format(new Date(2024, 0, i), "EEEEEE"));

const renderWeekdays = (weekdays) =>
  weekdays.map((day) => (
    <th key={day} className="weekday">
      {day}
    </th>
  ));

const Weekdays = () => {
  const weekdays = generateWeekdays();

  return (
    <thead>
      <tr>{renderWeekdays(weekdays)}</tr>
    </thead>
  );
};

export default Weekdays;
