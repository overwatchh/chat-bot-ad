import React from 'react';
import Typewriter from 'typewriter-effect';
import { useSpeechSynthesis } from 'react-speech-kit';
function TypingEffect({ message, trigger, triggerNextStep }) {
  const { speak } = useSpeechSynthesis();
  return (
    <Typewriter
      options={{
        cursor: '',
        delay: 0,
      }}
      onInit={(typewriter) => {
        typewriter
          .callFunction(() => {
            // speak({ text: message });
          })
          .typeString(message)
          .start()
          .callFunction(() => {
            triggerNextStep({ value: undefined, trigger });
          });
      }}
    />
  );
}

export default TypingEffect;
