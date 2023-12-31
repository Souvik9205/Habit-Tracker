import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import 'react-calendar/dist/Calendar.css';
import './main.css';

const TriCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const prevMonthDate = new Date(currentDate);
  prevMonthDate.setMonth(prevMonthDate.getMonth() - 1);

  const nextMonthDate = new Date(currentDate);
  nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);

  return (
    <div className="triple-calendar-container" >
      <Calendar
        className="side-calendar"
        value={prevMonthDate}
        onChange={() => {}}
        showNavigation={false}
        tileDisabled={() => true}
      />
      <Calendar
        className="middle-calendar"
        value={currentDate}
        onChange={setCurrentDate}
        tileClassName={({ date }) =>
          date.getDate() === currentDate.getDate() &&
          date.getMonth() === currentDate.getMonth() &&
          date.getFullYear() === currentDate.getFullYear()
            ? 'highlight-today'
            : ''
        }
      />
      <Calendar
        className="side-calendar"
        value={nextMonthDate}
        onChange={() => {}}
        showNavigation={false}
        tileDisabled={() => true}
      />
    </div>
  );
};

export default TriCalendar;

