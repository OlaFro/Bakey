import React, { useState } from "react";
import Axios from "axios";
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
import Warning from "./Warning";

export default function OrderPayment(props) {
  const { orderInfo, setOrderInfo } = props;

  const [showWarning, setShowWarning] = useState(false);

  const proceedPayment = () => {
    setShowWarning(false);
    Axios({
      method: "PUT",
      url: "/listings/checkout",
      data: { listingId: orderInfo.id, pcs: orderInfo.pieces },
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res.data);
        if (res.data.boughtPieces) {
          setOrderInfo((prevInfo) => {
            return { ...prevInfo, boughtPcs: res.data.boughtPieces };
          });
          sessionStorage.removeItem("orderInfo");
          props.change("confirmation");
        } else {
          setShowWarning(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setShowWarning(true);
      });
  };

  return (
    <StyledPaymentContainer>
      {showWarning ? (
        <Warning msg="the service is out of order" />
      ) : (
        <StyledCreditCard title="This is only demo. Please confirm to proceed.">
          <p onClick={() => props.change("summary")}> &lt; back </p>
          <header>
            <h3>Credit/Debit card</h3>

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
                    name="cardMonth"
                    id="cardMonth"
                    placeholder="12"
                    readOnly={true}
                  />
                  <StyledLabel htmlFor="cardNumber">Month</StyledLabel>
                </StyledInputContainer>
                <StyledInputContainer number>
                  <StyledInputField
                    fake
                    type="text"
                    name="cardYear"
                    id="cardYear"
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
                  name="cardCVV"
                  id="cardCVV"
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
          <StyledButton onClick={proceedPayment}>Confirm Payment</StyledButton>
        </StyledCreditCard>
      )}
    </StyledPaymentContainer>
  );
}
