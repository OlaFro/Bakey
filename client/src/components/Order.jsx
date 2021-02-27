import React, { useState } from "react";
import OrderSummary from "./OrderSummary";
import OrderPayment from "./OrderPayment";
import OrderConfirmation from "./OrderConfirmation";

import { StyledOrderContainer } from "../styledComponents/StyledOrder";

export default function Order() {
  const [step, setStep] = useState("summary");
  const [orderInfo, setOrderInfo] = useState(
    JSON.parse(sessionStorage.getItem("orderInfo"))
  );

  const urlListing =
    window.location.href.split("/order")[0] +
    "/cafe:" +
    orderInfo.cafeId +
    "#" +
    orderInfo.listingIdentifier;

  console.log(urlListing);

  const changeStep = (status) => {
    setStep(status);
  };

  return (
    <StyledOrderContainer>
      {step === "summary" ? <OrderSummary change={changeStep} /> : null}
      {step === "payment" ? <OrderPayment change={changeStep} /> : null}
      {step === "confirmation" ? (
        <OrderConfirmation change={changeStep} />
      ) : null}
    </StyledOrderContainer>
  );
}
