import React from "react";
import CalendarProvider from "./contexts/CalendarProvider";
import CurrentDay from "./components/CurrentDay/CurrentDay";
import Month from "./components/Month/Month";
import "./style.css";

const App = () => (
  <CalendarProvider>
    <div className="app">
      <div className="left-panel">
        <CurrentDay />
      </div>
      <div className="right-panel">
        <Month />
      </div>
    </div>
  </CalendarProvider>
);

export default App;
