// import React from "react";
// // import CalendarContext from "./contexts/CalendarContext";
// import CalendarProvider from "./contexts/CalendarProvider";
// import Calendar from './components/ Calendar/Calendar';
// import CurrentDay from "./components/CurrentDay/CurrentDay";
// import CurrentDay from "./components/CurrentDay/CurrentDay";
// import MonthSelector from "./components/MonthSelector/MonthSelector";
import "./style.css";
// import Lamp from "./components/Lamp";
// import Parent from "./components/Parent";

// class App extends React.Component {
//   render() {
//     return (
//       <CalendarProvider>
//         <div className="app">
//           <div className="left-panel">
//             <CurrentDay />
//           </div>
//           <div className="right-panel">
//             <MonthSelector />
//             <Calendar />
//           </div>
//         </div>
//       </CalendarProvider>

//     );
//   }
// }

// export default App;

import React from "react";
import CalendarProvider from "./contexts/CalendarProvider";
import Calendar from "./components/ Calendar/Calendar";
import CurrentDay from "./components/ Calendar/CurrentDay/CurrentDay";
import styles from './style.css';

const App = () => {
  return (
    <CalendarProvider>
      {/* <div className=" "> */}
        <div className="left-pannel">
          <CurrentDay />
        </div>
        <div className=" right-pannel">
          <Calendar />
        </div>
      {/* </div> */}
    </CalendarProvider>
  );
};

export default App;
