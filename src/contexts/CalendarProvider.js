// import React, { useState, useEffect } from 'react';
// import CalendarContext from './CalendarContext';

// const CalendarProvider = ({ children }) => {
//   const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
//   const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
//   const [selectedDate, setSelectedDate] = useState(new Date());

//   useEffect(() => {
//     setCurrentYear(new Date().getFullYear());
//   }, [currentMonth]);

//   return (
//     <CalendarContext.Provider
//       value={{
//         currentMonth,
//         currentYear,
//         selectedDate,
//         setCurrentMonth,
//         setSelectedDate,
//       }}
//     >
//       {children}
//     </CalendarContext.Provider>
//   );
// };

// export default CalendarProvider;

import React, { useState } from "react";
import CalendarContext from "./CalendarContext";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
} from "date-fns";
import { enUS } from "date-fns/locale";

const CalendarProvider = ({ children }) => {
  const today = new Date();
  const [selectedDay, setSelectedDay] = useState(today);

  const handleSelectDay = (day) => {
    setSelectedDay(day);
  };

  const currentMonthStart = startOfMonth(today);
  const currentMonthEnd = endOfMonth(today);

  const weeksInMonth = [];

  let startOfFirstWeek = startOfWeek(currentMonthStart, { locale: enUS });
  let endOfLastWeek = endOfWeek(currentMonthEnd, { locale: enUS });

  const daysInMonth = eachDayOfInterval({
    start: startOfFirstWeek,
    end: endOfLastWeek,
  });

  for (let i = 0; i < daysInMonth.length; i += 7) {
    weeksInMonth.push(daysInMonth.slice(i, i + 7));
  }

  return (
    <CalendarContext.Provider
      value={{
        selectedDay,
        handleSelectDay,
        today,
        weeksInMonth,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};

export default CalendarProvider;
