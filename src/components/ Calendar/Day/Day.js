// import React from "react";
// import { CalendarContext } from "../../contexts/CalendarContext";
// import "./MonthSelector.scss";

// class MonthSelector extends React.Component {
//   render() {
//     const months = [
//       "January",
//       "February",
//       "March",
//       "April",
//       "May",
//       "June",
//       "July",
//       "August",
//       "September",
//       "October",
//       "November",
//       "December",
//     ];

//     return (
//       <CalendarContext.Consumer>
//         {({ currentMonth, setCurrentMonth }) => {
//           return (
//             <div className="month-selector">
//               <select
//                 value={currentMonth}
//                 onChange={(e) => setCurrentMonth(Number(e.target.value))}
//               >
//                 {months.map((month, index) => (
//                   <option key={`month-${index}`} value={index}>
//                     {month}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           );
//         }}
//       </CalendarContext.Consumer>
//     );
//   }
// }

// export default MonthSelector;


import React from 'react';
import { format } from 'date-fns';
import classNames from 'classnames';
import styles from './Day.css';

// const Day = ({ day, selectedDay, onSelectDay }) => {
//   const isSelected = day.toDateString() === selectedDay.toDateString();

//   return (
//     <td
//       onClick={() => onSelectDay(day)}
//       className={classNames('day', { selected: isSelected })}
//     >
//       {format(day, 'd')}
//     </td>
//   );
// };

// export default Day;


// const Day = ({ day, selectedDay, onSelectDay }) => {
//   const handleClick = () => {
//     onSelectDay(day);
//   };

//   const isSelected = selectedDay && day.getDate() === selectedDay.getDate();

//   return (
//     <td 
//       className={isSelected ? 'selected' : ''} 
//       onClick={handleClick}
//     >
//       {day.getDate()}
//     </td>
//   );
// };

// export default Day;



const Day = ({ day, selectedDay, onSelectDay }) => {
  const handleClick = () => {
    onSelectDay(day); 
  };

  const isSelected = selectedDay && day.getDate() === selectedDay.getDate();
  const isToday = day.getDate() === new Date().getDate(); 

  return (
    <td 
      className={`day ${isSelected ? 'selected' : ''} ${isToday ? 'today' : ''}`}
      onClick={handleClick}
    >
      {day.getDate()}
    </td>
  );
};

export default Day;
