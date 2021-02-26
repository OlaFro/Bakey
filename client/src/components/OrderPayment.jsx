import React from "react";
import {
  StyledPaymentContainer,
  StyledCreditCard,
} from "../styledComponents/StyledPayment";

import {
  StyledLabel,
  StyledInputContainer,
  StyledInputField,
} from "../styledComponents/StyledForm";

import visa from "../assets/visa.svg";
import maestro from "../assets/maestro.svg";
import mastercard from "../assets/mastercard.svg";

export default function OrderPayment() {
  return (
    <StyledPaymentContainer>
      <StyledCreditCard>
        <header>
          <p>Credit/Debit card</p>
          <div>
            <img height={63} src={visa} alt="visa logo" />
            <img height={40} src={mastercard} alt="mastercard logo" />
            <img height={40} src={maestro} alt="maestro logo" />
          </div>
        </header>
        <main>
          <StyledInputContainer>
            <StyledInputField
              fake
              type="text"
              name="cardOwner"
              id="cardOwner"
              placeholder="Panda Bamboo"
              readOnly={true}
            />
            <StyledLabel htmlFor="cardOwner">Cardholder name</StyledLabel>
          </StyledInputContainer>
          <StyledInputContainer>
            <StyledInputField
              fake
              type="text"
              name="cardNumber"
              id="cardNumber"
              placeholder="0123 4567 8910 1112"
              readOnly={true}
            />
            <StyledLabel htmlFor="cardNumber">Card number</StyledLabel>
          </StyledInputContainer>
        </main>
      </StyledCreditCard>
    </StyledPaymentContainer>
  );
}
