import "./header.scss";
import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-img">
          <img
            className="header-img--circle"
            src="./media/hanzcua.jpg"
            alt="avatar"
          />
        </div>
        <div className="header-img">
          <img src="./media/message-icon.png" alt="chat-icon" />
        </div>
        <div className="header-text">Hanz Cua</div>
      </div>
    </div>
  );
};

export default Header;
