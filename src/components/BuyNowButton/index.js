import React, { useState } from "react";
import "./BuyNow.scss";
import ReactGA from "react-ga";
import axios from "axios";
function BuyNowButton({ title, href }) {
  const clickHandler = () => {
    console.log("loading");
    ReactGA.event({
      category: "Buy now ",
      action: "Go to landing page",
    });
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Token 8c9d6a00f474ff78666ece47b9cb3102cec18e0e",
    };
    const endpoint =
      "https://azjewelery.perob.vn/crm/v1/single_product_potential_customers/";
    const data = {
      name: "Nguyen Van A",
      phone: "0999999999",
      address: "address",
      gender: 0,
      message: "content",
      product_code: "AZ16004",
    };
    axios
      .post(endpoint, data, {
        headers: headers,
      })
      .then((response) => {
        console.log("response", response);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return <div onClick={clickHandler}>{title}</div>;
}

export default BuyNowButton;
