import './header.scss';
import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-img">
          <img
            className="header-img--circle"
            src="./media/KOL.png"
            alt="avatar"
          />
        </div>
        <div className="header-img">
          <img src="./media/message-icon.png" alt="chat-icon" />
        </div>
        <div className="header-text">Rudy Baldwin</div>
      </div>
    </div>
  );
};

export default Header;
