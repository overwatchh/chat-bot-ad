import React from "react";
import Typewriter from "typewriter-effect";
function TypingEffect({ message, trigger, triggerNextStep }) {
  return (
    <Typewriter
      options={{
        cursor: "",
        delay: "natural",
      }}
      onInit={(typewriter) => {
        typewriter
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
