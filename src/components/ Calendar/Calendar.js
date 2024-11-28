import React from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  startOfWeek,
} from "date-fns";
import { CalendarContext } from "../../contexts/CalendarContext";
import classNames from "classnames";
import "./Calendar.scss";


class Calendar extends React.Component {
  render() {
    return (
      <CalendarContext.Consumer>
        {({ currentMonth, currentYear, selectedDate, setSelectedDate }) => {
          const start = startOfMonth(new Date(currentYear, currentMonth));
          const end = endOfMonth(new Date(currentYear, currentMonth));
          const days = eachDayOfInterval({ start, end });

          const firstDayIndex = start.getDay();
          const weekdays = Array.from({ length: 7 }, (_, index) =>
            format(new Date(2024, 0, index ), "EEE")
          );

  
          const placeholders = [];
          for (let i = 0; i < firstDayIndex; i++) {
            placeholders.push(
              <div
                key={`placeholder-${i}`}
                className="calendar-day placeholder"
              ></div>
            );
          }

          const formattedMonthYear = format(start, "MMMM yyyy");

          return (
            <div className="calendar">
              <div className="calendar-header">
                <div className="calendar-month-year">{formattedMonthYear}</div>
              </div>
              <div className="calendar-body">
                <div className="calendar-weekdays">
                  {weekdays.map((weekday, index) => (
                    <div key={index} className="calendar-weekday">
                      {weekday}
                    </div>
                  ))}
                </div>

         
                {placeholders}

                
                {days.map((day) => {
                  const isSelected =
                    format(day, "yyyy-MM-dd") ===
                    format(selectedDate, "yyyy-MM-dd");

                  return (
                    <div
                      key={day.getTime()}
                      className={classNames("calendar-day", {
                        selected: isSelected,
                      })}
                      onClick={() => setSelectedDate(day)}
                    >
                      {format(day, "d")}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        }}
      </CalendarContext.Consumer>
    );
  }
}

export default Calendar;
