"use client";

import React, { useState } from "react";

const DateTimePicker = ({ value, onChange }) => {
  const [date, setDate] = useState(value);

  const handleChange = (e) => {
    setDate(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div className="datetime-picker">
      <label htmlFor="datetime" className="block font-semibold">
        Select Date and Time:
      </label>
      <input
        id="datetime"
        type="datetime-local"
        className="border rounded p-2 mt-2"
        value={date}
        onChange={handleChange}
      />
    </div>
  );
};

export default DateTimePicker;
