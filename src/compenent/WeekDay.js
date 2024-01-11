// src/components/WeekDay.js
import React from 'react';

const WeekDay = ({ day, currentDisplayDate }) => {
  const getFormattedDate = () => {
    const today = currentDisplayDate.getDay(); // 0 is Sunday, 1 is Monday, ..., 6 is Saturday
    const dayIndex = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday'].indexOf(day);

    // Calculate the offset for the respective day
    let offset = dayIndex - today;

    const date = new Date(currentDisplayDate);
    date.setDate(currentDisplayDate.getDate() + offset);

    // Reset the time to 0 to ensure only the date is considered
    date.setHours(0, 0, 0, 0);

    return date.toDateString();
  };

  return (
    <div className="weekday-container">
      <h3>{day}</h3>
      <p>{getFormattedDate()}</p> {/* Display the date for the respective day */}
      {/* Include any additional rendering based on your requirements */}
    </div>
  );
};

export default WeekDay;
