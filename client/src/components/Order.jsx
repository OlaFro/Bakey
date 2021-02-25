import React, { useState } from "react";
import OrderSummary from "./OrderSummary";
import OrderPayment from "./OrderPayment";
import OrderConfirmation from "./OrderSummary";

export default function Order(props) {
  return (
    <div>
      <OrderSummary />
      <OrderPayment />
      <OrderConfirmation />
    </div>
  );
}
