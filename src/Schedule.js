import React, { useState } from 'react';
import Current from './compenent/Current';

const Schedule = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [timezone, setTimezone] = useState('UTC-0');

  const generateWeekData = (date) => {
    const days = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday'];
    return days.map(day => ({ day }));
  };

  const handleTimezoneChange = (selectedTimezone) => {
    setTimezone(selectedTimezone);
  };

  const handleReturnToCurrent = () => {
    setCurrentDate(new Date());
  };

  const data = {
    currentWeekData: generateWeekData(currentDate),
    previousWeekData: generateWeekData(new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000)),
    nextWeekData: generateWeekData(new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000)),
  };

  return (
    <div className="schedule-container">
      <Current
        currentDate={currentDate}
        timezone={timezone}
        onTimezoneChange={handleTimezoneChange}
        data={data}
        onReturnToCurrent={handleReturnToCurrent}
      />
    </div>
  );
};

export default Schedule;
