import React from "react";
import { CalendarContext, CalendarProvider } from "./contexts/CalendarContext";
import Calendar from "./components/ Calendar/Calendar";
import CurrentDay from "./components/CurrentDay/CurrentDay";
import MonthSelector from "./components/MonthSelector/MonthSelector";
import "./style.scss";

class App extends React.Component {
  render() {
    return (
      <CalendarProvider>
        <div className="app">
          <div className="left-panel">
            <CurrentDay />
          </div>
          <div className="right-panel">
            <MonthSelector />
            <Calendar />
          </div>
        </div>
      </CalendarProvider>
    );
  }
}

export default App;
