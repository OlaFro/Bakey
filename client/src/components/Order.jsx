import React, { useState, useEffect } from "react";
import OrderSummary from "./OrderSummary";
import OrderPayment from "./OrderPayment";
import OrderConfirmation from "./OrderConfirmation";
import Warning from "./Warning";

import { StyledOrderContainer } from "../styledComponents/StyledOrder";

export default function Order() {
  const [step, setStep] = useState("summary");
  const [orderInfo, setOrderInfo] = useState({
    cafeId: "",
    listingIdentifier: "",
  });
  const urlListing =
    window.location.href.split("/order")[0] +
    "/cafe:" +
    orderInfo.cafeId +
    "#" +
    orderInfo.listingIdentifier;

  console.log(urlListing);

  useEffect(() => {
    if (sessionStorage.getItem("orderInfo")) {
      setOrderInfo(JSON.parse(sessionStorage.getItem("orderInfo")));
    }
  }, []);

  useEffect(() => {
    if (sessionStorage.orderInfo === undefined) {
      setStep("warning");
    }
  }, []);

  const changeStep = (status) => {
    setStep(status);
  };

  return (
    <StyledOrderContainer>
      {step === "warning" ? <Warning msg="there is no order yet" /> : null}
      {step === "summary" ? (
        <OrderSummary
          change={changeStep}
          orderInfo={orderInfo}
          setOrderInfo={setOrderInfo}
        />
      ) : null}
      {step === "payment" ? (
        <OrderPayment
          change={changeStep}
          orderInfo={orderInfo}
          setOrderInfo={setOrderInfo}
        />
      ) : null}
      {step === "confirmation" ? (
        <OrderConfirmation change={changeStep} urlListing={urlListing} />
      ) : null}
    </StyledOrderContainer>
  );
}
