import React, { useState } from 'react';

const LocationForm = ({ setFromLocation, setToLocation }) => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const handleFromChange = (e) => {
    setFrom(e.target.value);
    setFromLocation(e.target.value);
  };

  const handleToChange = (e) => {
    setTo(e.target.value);
    setToLocation(e.target.value);
  };

  return (
    <div>
      <div className="form-group">
        <label htmlFor="from">From</label>
        <input
          type="text"
          id="from"
          value={from}
          onChange={handleFromChange}
          placeholder="Enter your starting location"
        />
      </div>
      <div className="form-group">
        <label htmlFor="to">To</label>
        <input
          type="text"
          id="to"
          value={to}
          onChange={handleToChange}
          placeholder="Enter your destination"
        />
      </div>
    </div>
  );
};

export default LocationForm;
