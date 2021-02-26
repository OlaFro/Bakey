import React, { useState } from "react";
import OrderSummary from "./OrderSummary";
import OrderPayment from "./OrderPayment";
import OrderConfirmation from "./OrderConfirmation";

import { StyledOrderContainer } from "../styledComponents/StyledOrder";

export default function Order() {
  const [step, setStep] = useState("summary");

  console.log(window.location.href.split("/order")[0]);

  console.log(JSON.parse(sessionStorage.getItem("orderInfo")));

  const urlTest =
    window.location.href.split("/order")[0] +
    "/cafe:" +
    JSON.parse(sessionStorage.getItem("orderInfo")).cafeId +
    "#" +
    JSON.parse(sessionStorage.getItem("orderInfo")).listingIdentifier;

  console.log(urlTest);

  return (
    <StyledOrderContainer>
      {step === "summary" ? <OrderSummary /> : null}
      {step === "payment" ? <OrderPayment /> : null}
      {step === "confirmation" ? <OrderConfirmation /> : null}
    </StyledOrderContainer>
  );
}
