import React from "react";
import { format, isSameDay, isToday, isSameMonth } from "date-fns";
import classNames from "classnames";
import styles from './Day.scss';

const Day = ({ day, currentMonth, selectedDate, onSelectDate }) => {
  const handleClick = () => onSelectDate(day);

  const dayClasses = classNames("day", {
    "current-month": isSameMonth(day, currentMonth),
    "not-current-month": !isSameMonth(day, currentMonth),
    selected: isSameDay(day, selectedDate),
    today: isToday(day),
  });

  const dayTitle = `Select ${format(day, "EEEE, MMMM d")}`;

  return (
    <td
      key={day}
      className={dayClasses}
      onClick={handleClick}
      title={dayTitle}
    >
      {format(day, "d")}
    </td>
  );
};

export default Day;
