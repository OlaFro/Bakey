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

  return (
    <StyledOrderContainer>
      {step === "summary" ? <OrderSummary /> : null}
      {step === "payment" ? <OrderPayment /> : null}
      {step === "confirmation" ? (
        <OrderConfirmation urlListing={urlListing} />
      ) : null}
    </StyledOrderContainer>
  );
}
