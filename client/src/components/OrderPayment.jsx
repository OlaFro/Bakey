import React from "react";
import {
  StyledPaymentContainer,
  StyledCreditCard,
  StyledSmallInputs,
} from "../styledComponents/StyledPayment";

import {
  StyledLabel,
  StyledInputContainer,
  StyledInputField,
} from "../styledComponents/StyledForm";

import { StyledButton } from "../styledComponents/StyledButton";

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
          <StyledInputContainer long>
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
          <StyledInputContainer long>
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
          <StyledSmallInputs>
            <div>
              <StyledInputContainer number>
                <StyledInputField
                  fake
                  type="text"
                  name="cardNumber"
                  id="cardNumber"
                  placeholder="12"
                  readOnly={true}
                />
                <StyledLabel htmlFor="cardNumber">Month</StyledLabel>
              </StyledInputContainer>
              <StyledInputContainer number>
                <StyledInputField
                  fake
                  type="text"
                  name="cardNumber"
                  id="cardNumber"
                  placeholder="2021"
                  readOnly={true}
                />
                <StyledLabel htmlFor="cardNumber">Year</StyledLabel>
              </StyledInputContainer>
            </div>
            <StyledInputContainer number>
              <StyledInputField
                fake
                type="text"
                name="cardNumber"
                id="cardNumber"
                placeholder="***"
                readOnly={true}
              />
              <StyledLabel htmlFor="cardNumber">CVV</StyledLabel>
            </StyledInputContainer>
          </StyledSmallInputs>

          <input type="checkbox" id="terms" name="terms" checked />
          <label htmlFor="terms">
            I have read and accept the terms of use of Bakey
          </label>
        </main>
        <StyledButton>Confirm Payment</StyledButton>
      </StyledCreditCard>
    </StyledPaymentContainer>
  );
}
