// src/components/Current.js
import React, { useState, useEffect } from 'react';
import TimezoneSelector from './TimezoneSelector';
import WeekDay from './WeekDay';
import Previous from './Previous';
import Next from './Next';
import "../App.css";

const Current = ({ currentDate, timezone, onTimezoneChange, data, onReturnToCurrent }) => {
  const [currentPage, setCurrentPage] = useState('current');
  const [currentDisplayDate, setCurrentDisplayDate] = useState(new Date());

  useEffect(() => {
    setCurrentDisplayDate(new Date(currentDate));
  }, [currentDate]);

  const handlePreviousPage = () => {
    setCurrentPage('previous');
    setCurrentDisplayDate((prevDate) => new Date(prevDate.getTime() - 7 * 24 * 60 * 60 * 1000));
  };

  const handleNextPage = () => {
    setCurrentPage('next');
    setCurrentDisplayDate((prevDate) => new Date(prevDate.getTime() + 7 * 24 * 60 * 60 * 1000));
  };

  const handleReturnToCurrent = () => {
    setCurrentPage('current');
    setCurrentDisplayDate(new Date());
    onReturnToCurrent();
  };

  return (
    <div className="current-container">
      <div className='header'> 
        <div>
          <button className='btn' onClick={handlePreviousPage}>Previous Week</button>
        </div>
        <div>
          <h3>{currentDisplayDate.toDateString()}</h3>
        </div>
        <div>
          <button className='btn' onClick={handleNextPage}>Next Week</button>
        </div>
      </div>
      <div className='btn2padd'>
        <button className='btn2' onClick={handleReturnToCurrent}>Current Week</button>
      </div>
      <TimezoneSelector onChange={onTimezoneChange} />
      {currentPage === 'previous' && <Previous data={data.previousWeekData} />}
      {currentPage === 'current' && <div>{/* Render current week data */}</div>}
      {currentPage === 'next' && <Next data={data.nextWeekData} />}
      <div className="weekdays-container">
        {data.currentWeekData.map((dayData, index) => (
          <WeekDay
            key={index}
            day={dayData.day}
            currentDisplayDate={currentDisplayDate} // Pass current date to WeekDay component
            actualDate={new Date(dayData.date)} // Pass the actual date for each day
          />
        ))}
      </div>
    </div>
  );
};

export default Current;
