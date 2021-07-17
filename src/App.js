import React, { useEffect } from "react";
import ChatBot from "./components/rsc/Chatbot";
import ReactGA from "react-ga";
const App = () => {
  useEffect(() => {
    ReactGA.initialize("UA-202593535-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  });
  return (
    <div className="App" style={{ height: "100vh" }}>
      <ChatBot />
    </div>
  );
};

export default App;
