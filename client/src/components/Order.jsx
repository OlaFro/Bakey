import React, { useState, useEffect } from "react";
import OrderSummary from "./OrderSummary";
import OrderPayment from "./OrderPayment";
import OrderConfirmation from "./OrderConfirmation";

import { StyledOrderContainer } from "../styledComponents/StyledOrder";

export default function Order() {
  const [step, setStep] = useState("summary");
  const [orderInfo, setOrderInfo] = useState({});
  const urlListing =
    window.location.href.split("/order")[0] +
    "/cafe:" +
    orderInfo.cafeId +
    "#" +
    orderInfo.listingIdentifier;

  console.log(urlListing);

  useEffect(() => {
    setOrderInfo(JSON.parse(sessionStorage.getItem("orderInfo")));
  }, []);

  return (
    <StyledOrderContainer>
      {step === "summary" ? (
        <OrderSummary orderInfo={orderInfo} setOrderInfo={setOrderInfo} />
      ) : null}
      {step === "payment" ? <OrderPayment /> : null}
      {step === "confirmation" ? (
        <OrderConfirmation urlListing={urlListing} />
      ) : null}
    </StyledOrderContainer>
  );
}
