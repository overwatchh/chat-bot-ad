import React, { useEffect } from "react";
import ChatBot from "./components/rsc/Chatbot";
import ReactGA from "react-ga";
import { Router } from "@reach/router";
import { adManagers } from "./config";
const App = () => {
  useEffect(() => {
    ReactGA.initialize("UA-202593535-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  });
  return (
    <div className="App" style={{ height: "100vh" }}>
      <Router>
        {adManagers.map((adManager) => (
          <ChatBot path={adManager.path} adManager={adManager} />
        ))}
      </Router>
    </div>
  );
};

export default App;
