import React, { useState } from "react";
import OrderSummary from "./OrderSummary";
import OrderPayment from "./OrderPayment";
import OrderConfirmation from "./OrderConfirmation";

import { StyledOrderContainer } from "../styledComponents/StyledOrder";

export default function Order() {
  const [step, setStep] = useState("summary");

  return (
    <StyledOrderContainer>
      {step === "summary" ? <OrderSummary /> : null}
      {step === "payment" ? <OrderPayment /> : null}
      {step === "confirmation" ? <OrderConfirmation /> : null}
    </StyledOrderContainer>
  );
}
