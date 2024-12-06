import React, { useContext } from "react";
import CalendarContext from "../../contexts/CalendarContext";
import { format } from "date-fns";
import styles from "./CurrentDay.scss";

const CurrentDay = () => {
  const { selectedDate } = useContext(CalendarContext);

  const weekday = format(selectedDate, "EEEE");
  const date = format(selectedDate, "MMMM d");

  return (
    <div className="current-day">
      <p className="weekday">{weekday}</p>
      <p className="date">{date}</p>
    </div>
  );
};

export default CurrentDay;
