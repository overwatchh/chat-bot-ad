import React from "react";
import "./BuyNow.scss";
function BuyNowButton({ title, href }) {
  return (
    <a target="_blank" href={href} class="BuyNowButton animated-button">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {title}
    </a>
  );
}

export default BuyNowButton;
