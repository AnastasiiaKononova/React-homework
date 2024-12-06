import React, { useState, useEffect } from "react";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
} from "date-fns";
import CalendarContext from "./CalendarContext";

const getWeeksInMonth = (month) => {
  const start = startOfWeek(startOfMonth(month));
  const end = endOfWeek(endOfMonth(month));
  const days = eachDayOfInterval({ start, end });

  return Array.from({ length: days.length / 7 }, (_, i) =>
    days.slice(i * 7, i * 7 + 7)
  );
};

 const CalendarProvider = ({ children }) => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today);
  const [selectedDate, setSelectedDate] = useState(today);
  const [weeksInMonth, setWeeksInMonth] = useState([]);

  useEffect(() => {
    setWeeksInMonth(getWeeksInMonth(currentMonth));
  }, [currentMonth]);

  return (
    <CalendarContext.Provider
      value={{
        currentMonth,
        selectedDate,
        setSelectedDate,
        weeksInMonth,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};

export default CalendarProvider;