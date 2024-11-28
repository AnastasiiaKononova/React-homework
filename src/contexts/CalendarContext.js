import React from "react";

const CalendarContext = React.createContext();

class CalendarProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      selectedDate: new Date(),
    };
  }

  setCurrentMonth = (month) => {
    this.setState({ currentMonth: month });
  };

  setSelectedDate = (date) => {
    this.setState({ selectedDate: date });
  };

  render() {
    return (
      <CalendarContext.Provider
        value={{
          ...this.state,
          setCurrentMonth: this.setCurrentMonth,
          setSelectedDate: this.setSelectedDate,
        }}
      >
        {this.props.children}
      </CalendarContext.Provider>
    );
  }
}

export { CalendarProvider, CalendarContext };
