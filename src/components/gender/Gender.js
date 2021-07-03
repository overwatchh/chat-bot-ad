import React, { useState } from 'react';
import classnames from 'classnames';

import './Gender.scss';

const Gender = ({ triggerNextStep, trigger }) => {
  const genderOptions = {
    MALE: 'male',
    FEMALE: 'female',
  };

  const [hideMale, setHideMale] = useState(false);
  const [hideFemale, setHideFemale] = useState(false);

  const handleClick = (gender) => {
    gender === genderOptions.MALE ? setHideFemale(true) : setHideMale(true);
    triggerNextStep({ value: '', trigger });
  };

  return (
    <div className="Gender">
      <button
        className={classnames('Gender__male', { hide: hideMale })}
        onClick={() => handleClick(genderOptions.MALE)}
      >
        Male
      </button>
      <button
        className={classnames({ hide: hideFemale })}
        onClick={() => handleClick(genderOptions.FEMALE)}
      >
        Femail
      </button>
    </div>
  );
};

export default Gender;
