import React from 'react';
import { format } from 'date-fns';
import { CalendarContext } from '../../contexts/CalendarContext';
import './CurrentDay.scss';

class CurrentDay extends React.Component {
  render() {
    return (
      <CalendarContext.Consumer>
        {({ selectedDate }) => (
          <div className="current-day">
            <div className="current-day-weekday">{format(selectedDate, 'EEEE')}</div>
            <div className="current-day-date">{format(selectedDate, 'MMMM d')}</div>
          </div>
        )}
      </CalendarContext.Consumer>
    );
  }
}

export default CurrentDay;
