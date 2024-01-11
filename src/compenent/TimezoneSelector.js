import React from 'react';

const TimezoneSelector = ({ onChange }) => {
  const timezones = ['UTC-0', 'UTC-1', 'UTC-2', 'UTC-3'];

  const handleTimezoneChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="timezone-selector">
      <div>

      <h3 classN1ame='timezone'>Timezone: </h3>
      </div>
      <select id="timezone" onChange={handleTimezoneChange}>
        {timezones.map((timezone, index) => (
          <option key={index} value={timezone}>
            {timezone}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TimezoneSelector;
