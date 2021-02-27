import React, { useEffect, useState } from "react";
import {
  StyledOrderSummaryContainer,
  StyledLeftPart,
  StyledPreview,
  StyledRightPart,
  StyledSummary,
  StyledAmount,
  StyledTotal,
  StyledAdd,
} from "../styledComponents/StyledOrderSummary";

import StyledHr from "../styledComponents/StyledHr";
import {
  StyledButton,
  StyledOrderButton,
} from "../styledComponents/StyledButton";

import placeholder from "../assets/placeholder_400px.jpg";

export default function OrderSummary(props) {
  const { orderInfo, setOrderInfo } = props;

  const handleDate = () => {
    if (orderInfo.pickUpDate) {
      let niceDate = orderInfo.pickUpDate.substring(5).replace("T", " ");
      return (
        niceDate.split(" ")[0].split("-").reverse().join(".") +
        " " +
        niceDate.split(" ")[1].substring(0, 5)
      );
    }
  };

  useEffect(() => {
    if (orderInfo.listingName) {
      sessionStorage.setItem("orderInfo", JSON.stringify(orderInfo));
    }
  }, [orderInfo.pieces]);

  const increment = () => {
    if (orderInfo.pieces < orderInfo.availablePieces) {
      setOrderInfo((curOrderInfo) => {
        return { ...curOrderInfo, pieces: curOrderInfo.pieces + 1 };
      });
    }
  };
  const decrement = () => {
    if (orderInfo.pieces > 1) {
      setOrderInfo((curOrderInfo) => {
        return { ...curOrderInfo, pieces: curOrderInfo.pieces - 1 };
      });
    }
  };

  return (
    <StyledOrderSummaryContainer>
      <StyledLeftPart>
        <StyledPreview>
          <figure>
            <img
              src={orderInfo.listingImg ? orderInfo.listingImg : placeholder}
              alt="my offer"
            />
          </figure>
          <div>
            <h3>{orderInfo.listingName ? orderInfo.listingName : "Title"}</h3>
            <div>
              <span>
                {orderInfo.cafeInfo ? orderInfo.cafeInfo : "Café name"}{" "}
              </span>
              <span>
                {orderInfo.pickUpDate ? handleDate() : "Pick-up date"}
              </span>
            </div>
          </div>
        </StyledPreview>
      </StyledLeftPart>
      <StyledRightPart>
        <StyledSummary>
          <h4>Order summary:</h4>
          <StyledAdd>
            <span>
              Price pro piece: {orderInfo.price ? orderInfo.price : "0.00"} €
            </span>

            <StyledAmount>
              <StyledOrderButton order onClick={decrement}>
                {" "}
                –
              </StyledOrderButton>
              <span>{orderInfo.pieces}</span>
              <StyledOrderButton order onClick={increment}>
                +
              </StyledOrderButton>
            </StyledAmount>
          </StyledAdd>

          <StyledHr />
          <StyledTotal>
            <span>
              <strong>
                Total:{" "}
                {orderInfo.price ? orderInfo.price * orderInfo.pieces : "0.00"}{" "}
                €
              </strong>
            </span>
            <StyledButton onClick={() => props.change("payment")}>
              Buy
            </StyledButton>
          </StyledTotal>
        </StyledSummary>
      </StyledRightPart>
    </StyledOrderSummaryContainer>
  );
}
