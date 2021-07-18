import React, { useEffect } from "react";
import ReactHtmlParser from "react-html-parser";
function TextWrapper({ message, trigger, triggerNextStep }) {
  useEffect(() => {
    triggerNextStep({ value: undefined, trigger });
  }, [trigger, triggerNextStep]);

  return <div className="TextWrapper">{ReactHtmlParser(message)}</div>;
}

export default TextWrapper;
