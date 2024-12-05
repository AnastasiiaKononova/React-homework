// import React, {useContext} from "react";
// import {
//   format,
//   startOfMonth,
//   endOfMonth,
//   eachDayOfInterval,
//   startOfWeek,
// } from "date-fns";
// import CalendarContext from "../../contexts/CalendarContext";
// import classNames from "classnames";
// import "./Calendar.scss";
// class Calendar extends React.Component {
//   render() {
//     return (
//       <CalendarContext.Consumer>
//         {({ currentMonth, currentYear, selectedDate, setSelectedDate }) => {
//           const start = startOfMonth(new Date(currentYear, currentMonth));
//           const end = endOfMonth(new Date(currentYear, currentMonth));
//           const days = eachDayOfInterval({ start, end });
//           const firstDayIndex = start.getDay();
//           const weekdays = Array.from({ length: 7 }, (_, index) =>
//             format(new Date(2024, 0, index ), "EEE")
//           );

//           const placeholders = [];
//           for (let i = 0; i < firstDayIndex; i++) {
//             placeholders.push(
//               <div
//                 key={`placeholder-${i}`}
//                 className="calendar-day placeholder"
//               ></div>
//             );
//           }
//           const formattedMonthYear = format(start, "MMMM yyyy");
//           return (
//             <div className="calendar">
//               <div className="calendar-header">
//                 <div className="calendar-month-year">{formattedMonthYear}</div>
//               </div>
//               <div className="calendar-body">
//                 <div className="calendar-weekdays">
//                   {weekdays.map((weekday, index) => (
//                     <div key={index} className="calendar-weekday">
//                       {weekday}
//                     </div>
//                   ))}
//                 </div>

//                 {placeholders}

//                 {days.map((day) => {
//                   const isSelected =
//                     format(day, "yyyy-MM-dd") ===
//                     format(selectedDate, "yyyy-MM-dd");
//                   return (
//                     <div
//                       key={day.getTime()}
//                       className={classNames("calendar-day", {
//                         selected: isSelected,
//                       })}
//                       onClick={() => setSelectedDate(day)}
//                     >
//                       {format(day, "d")}
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           );
//         }}
//       </CalendarContext.Consumer>
//     );
//   }
// }
// export default Calendar;

import React, { useContext } from "react";
import CalendarContext from "../../contexts/CalendarContext";
import Day from "./Day/Day";
import { startOfWeek, addDays, format } from "date-fns";
import { enUS } from "date-fns/locale";
import styles from "./Calendar.css";

const Calendar = () => {
  const { selectedDay, handleSelectDay, weeksInMonth, today } =
    useContext(CalendarContext);
  const formattedToday = format(today, "EEEE, d MMMM yyyy", { locale: enUS });

  /* TODO make shortly */
  const getDaysOfWeek = (date) => {
    const startOfWeekDate = startOfWeek(date, { locale: enUS });
    const daysOfWeek = [];

    for (let i = 0; i < 7; i++) {
      daysOfWeek.push(
        format(addDays(startOfWeekDate, i), "EEEEEE", { locale: enUS })
      );
    }

    return daysOfWeek;
  };

  const daysOfWeek = getDaysOfWeek(new Date());

  const renderDaysOfWeek = () => {
    return daysOfWeek.map((day, index) => (
      <th key={`${day}-${index}`}>{day}</th>
    ));
  };

  const RenderWeeks = () => {
    return weeksInMonth.map((week, weekIndex) => (
      <tr key={weekIndex}>
        {week.map((day) => (
          <Day
            key={day}
            day={day}
            selectedDay={selectedDay}
            onSelectDay={handleSelectDay}
            today={today}
          />
        ))}
      </tr>
    ));
  };

  return (
    <div className="calendar">
      <div className="current-day">
        <h3>Today: {formattedToday}</h3>
      </div>

      <div className="calendar-month">
        <table>
          <thead>
            <tr>{renderDaysOfWeek()}</tr>
          </thead>
          <tbody>
            <RenderWeeks />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Calendar;
