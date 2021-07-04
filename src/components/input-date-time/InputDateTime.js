import React, { useState, useEffect } from 'react';

import './InputDateTime.scss';

const InputDateTime = ({ triggerNextStep, trigger }) => {
  const [day, setDay] = useState(null);
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);
  const [complete, setComplete] = useState(false);

  const handleNextStep = () => {
    if (day && month && year && !complete) {
      setComplete(true);
      triggerNextStep({ value: { day, month }, trigger });
    }
  };
  const days = Array(31)
    .fill(0)
    .map((_, index) => index + 1);
  const months = Array(12)
    .fill(0)
    .map((_, index) => index + 1);
  const years = Array(61)
    .fill(0)
    .map((_, index) => 2000 - index);

  useEffect(() => {
    handleNextStep();
  }, [day, month, year]);
  return (
    <div className="InputDateTime">
      <select
        className="InputDateTime__day"
        onChange={(e) => {
          setDay(e.target.value);
        }}
        disabled={complete}
      >
        <option value="day">Day</option>
        {days.map((day, i) => (
          <option key={i} value={day}>
            {day}
          </option>
        ))}
      </select>
      <select
        className="InputDateTime__month"
        onChange={(e) => {
          setMonth(e.target.value);
        }}
        disabled={complete}
      >
        <option value="month">Month</option>
        {months.map((month, i) => (
          <option key={i} value={month}>
            {month}
          </option>
        ))}
      </select>
      <select
        className="InputDateTime__year"
        onChange={(e) => {
          setYear(e.target.value);
        }}
        disabled={complete}
      >
        <option value="year">Year</option>
        {years.map((year, i) => (
          <option key={i} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputDateTime;
