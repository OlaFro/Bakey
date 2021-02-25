import React, { useState } from "react";
import OrderSummary from "./OrderSummary";
import OrderPayment from "./OrderPayment";
import OrderConfirmation from "./OrderConfirmation";

import { StyledOrderContainer } from "../styledComponents/StyledOrder";

export default function Order() {
  const [status, setStatus] = useState({
    summary: true,
    payment: false,
    confirmation: false,
  });

  return (
    <StyledOrderContainer>
      {status.summary ? <OrderSummary /> : null}
      {status.payment ? <OrderPayment /> : null}
      {status.confirmation ? <OrderConfirmation /> : null}
    </StyledOrderContainer>
  );
}
