import React from 'react';

const Gender = ({ triggerNextStep, trigger }) => {
  const handleClick = () => {
    triggerNextStep({ value: '', trigger });
  };
  return (
    <div>
      <button onClick={handleClick}>Male</button>
      <button onClick={handleClick}>Femail</button>
    </div>
  );
};

export default Gender;
