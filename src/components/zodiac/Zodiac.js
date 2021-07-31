import React, { useEffect } from "react";
import getDoziacSign from "get-zodiac-sign";
import "./Zodiac.scss";
const Zodiac = ({ triggerNextStep, trigger, steps }) => {
  const dob = steps.ans_dob.value;
  const sign = getDoziacSign(Number(dob.month), Number(dob.day));
  useEffect(() => {
    triggerNextStep({ value: sign, trigger });
  }, []);
  return (
    <div className="Zodiac">
      Thanks. By horoscope you are - <span className="text-danger">{sign}</span>
      .
    </div>
  );
};

export default Zodiac;
