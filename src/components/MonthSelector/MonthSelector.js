import React from "react";
import { CalendarContext } from "../../contexts/CalendarContext";
import "./MonthSelector.scss";

class MonthSelector extends React.Component {
  render() {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return (
      <CalendarContext.Consumer>
        {({ currentMonth, setCurrentMonth }) => {
          return (
            <div className="month-selector">
              <select
                value={currentMonth}
                onChange={(e) => setCurrentMonth(Number(e.target.value))}
              >
                {months.map((month, index) => (
                  <option key={`month-${index}`} value={index}>
                    {month}
                  </option>
                ))}
              </select>
            </div>
          );
        }}
      </CalendarContext.Consumer>
    );
  }
}

export default MonthSelector;
