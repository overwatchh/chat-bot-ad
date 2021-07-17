import React from "react";
import ChatBot from "./components/rsc/Chatbot";
import { Router } from "@reach/router";
import { adManagers } from "./config";
const App = () => {
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
