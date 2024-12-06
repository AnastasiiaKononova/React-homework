import React, { useContext } from "react";
import CalendarContext from '../../contexts/CalendarContext';
import Week from "../Week";
import Weekdays from '../Weekdays';
import styles from './Month.scss';

const renderWeeks = (weeksInMonth, currentMonth, selectedDate, setSelectedDate) =>
  weeksInMonth.map((week, index) => (
    <Week
      key={index}
      days={week}
      currentMonth={currentMonth}
      selectedDate={selectedDate}
      onSelectDate={setSelectedDate}
    />
  ));

const Month = () => {
  const { weeksInMonth, currentMonth, selectedDate, setSelectedDate } =
    useContext(CalendarContext);

  return (
    <div className="month">
      <table className="calendar-table">
        <Weekdays />
        <tbody>{renderWeeks(weeksInMonth, currentMonth, selectedDate, setSelectedDate)}</tbody>
      </table>
    </div>
  );
};

export default Month;
