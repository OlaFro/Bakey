import React, { useState } from "react";
import OrderSummary from "./OrderSummary";
import OrderPayment from "./OrderPayment";
import OrderConfirmation from "./OrderConfirmation";

import { StyledOrderContainer } from "../styledComponents/StyledOrder";

export default function Order() {
  const [step, setStep] = useState("payment");

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
