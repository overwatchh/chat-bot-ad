import React from "react";
import "./BuyNow.scss";
import ReactGA from "react-ga";
function BuyNowButton({ title, href }) {
  const clickHandler = () => {
    ReactGA.event({
      category: "Buy now ",
      action: "Go to landing page( name sub-domain)",
    });
  };
  return (
    <a
      onClick={clickHandler}
      target="_blank"
      rel="noreferrer"
      href={href}
      class="BuyNowButton"
    >
      {title}
    </a>
  );
}

export default BuyNowButton;
