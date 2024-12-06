import React, { useContext } from "react";
import CalendarContext from "../../contexts/CalendarContext";
import Week from "../Week/Week";
import Weekdays from "../Weekdays/Weekdays";
import styles from "./Month.scss";

const RenderWeeks = () => {
  const { weeksInMonth, currentMonth, selectedDate, setSelectedDate } =
    useContext(CalendarContext);

  return weeksInMonth.map((week, index) => (
    <Week
      key={index}
      days={week}
      currentMonth={currentMonth}
      selectedDate={selectedDate}
      onSelectDate={setSelectedDate}
    />
  ));
};

const Month = () => {
  return (
    <div className="month">
      <table className="calendar-table">
        <Weekdays />
        <tbody>
          <RenderWeeks />
        </tbody>
      </table>
    </div>
  );
};

export default Month;
