import React, { useEffect } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
function TextWrapper({ message, trigger, triggerNextStep }) {
  console.log(trigger);
  const { speak } = useSpeechSynthesis();

  useEffect(() => {
    triggerNextStep({ value: undefined, trigger });
  }, [trigger, triggerNextStep]);
  useEffect(() => {
    speak("hello");
  });
  return <div className="TextWrapper">{message}</div>;
}

export default TextWrapper;
