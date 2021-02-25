import React, { useState } from "react";
import OrderSummary from "./OrderSummary";
import OrderPayment from "./OrderPayment";
import OrderConfirmation from "./OrderSummary";

import { StyledOrderContainer } from "../styledComponents/StyledOrder";

export default function Order() {
  return (
    <StyledOrderContainer>
      <OrderSummary />
      {/* <OrderPayment />
      <OrderConfirmation /> */}
    </StyledOrderContainer>
  );
}
