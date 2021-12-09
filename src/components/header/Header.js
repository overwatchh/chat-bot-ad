import "./header.scss";
import React from "react";

import KOLImg from "../../assets/images/rudy_baldwin_1.jpeg";
import MessageIcon from "./assets/message-icon.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-img">
          <img className="header-img--circle" src={KOLImg} alt="avatar" />
        </div>
        <div className="header-img">
          <img src={MessageIcon} alt="chat-icon" />
        </div>
        <div className="header-text">Rudy Baldwin</div>
      </div>
    </div>
  );
};

export default Header;
