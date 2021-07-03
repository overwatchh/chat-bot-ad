import React, { useState, useEffect } from 'react';
const InputDateTime = ({ triggerNextStep, trigger }) => {
  const [day, setDay] = useState(null);
  const [month, setMonth] = useState(null);

  const handleNextStep = () => {
    if (day && month) {
      triggerNextStep({ value: { day, month }, trigger });
    }
  };
  const days = Array(31)
    .fill(0)
    .map((_, index) => index + 1);
  const months = Array(12)
    .fill(0)
    .map((_, index) => index + 1);

  useEffect(() => {
    handleNextStep();
  }, [day, month]);
  return (
    <div>
      <select
        onChange={(e) => {
          setDay(e.target.value);
        }}
      >
        <option value="day">Day</option>
        {days.map((day, i) => (
          <option key={i} value={day}>
            {day}
          </option>
        ))}
      </select>
      <select
        onChange={(e) => {
          setMonth(e.target.value);
        }}
      >
        <option value="month">Month</option>
        {months.map((month, i) => (
          <option key={i} value={month}>
            {month}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputDateTime;
