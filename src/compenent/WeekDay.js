import React, { useState } from 'react';

const WeekDay = ({ day, currentDisplayDate }) => {
  const [timeSlots] = useState([
    '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm',
    '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm',
    '8:00pm', '9:00pm', '10:00pm', '10:30pm', '11:00pm'
  ]);

  const getFormattedDate = () => {
    const today = currentDisplayDate.getDay(); 
    const dayIndex = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].indexOf(day);
    let offset = dayIndex - today;

    const date = new Date(currentDisplayDate);
    date.setDate(currentDisplayDate.getDate() + offset);


    date.setHours(0, 0, 0, 0);


    return {
      formattedDate: `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}`,
      date: date,
    };
  };

  const { formattedDate, date } = getFormattedDate();

  const isPastDate = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return date < today;
  };

  return (
    <div className="weekday-container">
      <h3 className='weekday'>{day}</h3>
      <p>{formattedDate}</p>
      {isPastDate() ? (
        <p>PAST</p>
      ) : (
        <div className="time-slots">
          {timeSlots.map((time, index) => (
            <div key={index} className="time-slot">
              <input type="checkbox" id={`${day}-${formattedDate}-${time}`} />
              <label htmlFor={`${day}-${formattedDate}-${time}`}>{time}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WeekDay;
