import React from "react";
import "./BuyNow.scss";
function BuyNowButton({ title, href }) {
  return (
    <a target="_blank" href={href} class="BuyNowButton">
      {title}
    </a>
  );
}

export default BuyNowButton;
