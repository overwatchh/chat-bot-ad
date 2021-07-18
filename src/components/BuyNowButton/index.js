import React from "react";
import "./BuyNow.scss";
import ReactGA from "react-ga";
function BuyNowButton({ title, href }) {
  const clickHandler = () => {
    ReactGA.event({
      category: "Buy now ",
      action: "Go to landing page( nam sub-domain)",
    });
  };
  return (
    <a onClick={clickHandler} target="_blank" href={href} class="BuyNowButton">
      {title}
    </a>
  );
}

export default BuyNowButton;
