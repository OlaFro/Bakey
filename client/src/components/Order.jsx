import React, { useState, useEffect } from "react";
import OrderSummary from "./OrderSummary";
import OrderPayment from "./OrderPayment";
import OrderConfirmation from "./OrderConfirmation";
import Warning from "./Warning";

import { StyledOrderContainer } from "../styledComponents/StyledOrder";

export default function Order() {
  const [step, setStep] = useState("summary");

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
      {step === "summary" ? <OrderSummary change={changeStep} /> : null}
      {step === "payment" ? <OrderPayment change={changeStep} /> : null}
      {step === "confirmation" ? (
        <OrderConfirmation change={changeStep} />
      ) : null}
    </StyledOrderContainer>
  );
}
