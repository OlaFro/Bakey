import React, { useState } from "react";
import {
  StyledOrderSummaryContainer,
  StyledLeftPart,
  StyledPreview,
  StyledRightPart,
  StyledSummary,
  StyledAmount,
  StyledTotal,
  StyledAdd,
} from "../styledComponents/StyledOrder";

import StyledHr from "../styledComponents/StyledHr";
import {
  StyledButton,
  StyledOrderButton,
} from "../styledComponents/StyledButton";

import placeholder from "../assets/placeholder_400px.jpg";

export default function OrderSummary(props) {
  const [orderInfo, setOrderInfo] = useState(
    JSON.parse(sessionStorage.getItem("orderInfo"))
  );

  const handleDate = () => {
    if (orderInfo.pickUpDate) {
      let niceDate = orderInfo.pickUpDate.substring(5).replace("T", " ");
      // 02-22 10:48

      // 22-02 10:48
      return (
        niceDate.split(" ")[0].split("-").reverse().join(".") +
        " " +
        niceDate.split(" ")[1].substring(0, 5)
      );
    }
  };

  const [pcs, setPcs] = useState(orderInfo.pieces);

  const increment = () => {
    if (pcs < orderInfo.availablePieces) {
      setPcs((prevPcs) => {
        return prevPcs + 1;
      });
      updateOrderInfo(pcs + 1);
      console.log(pcs);
      console.log(orderInfo.pieces);
    }
  };
  const decrement = () => {
    if (pcs > 1) {
      setPcs(pcs - 1);
      updateOrderInfo(pcs - 1);
      console.log(pcs);
      console.log(orderInfo.pieces);
    }
  };

  const updateOrderInfo = (pieces) => {
    setOrderInfo((prevOrderInfo) => {
      return { ...prevOrderInfo, pieces: pieces };
    });
    sessionStorage.setItem("orderInfo", JSON.stringify(orderInfo));
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
              <span>{pcs}</span>
              <StyledOrderButton order onClick={increment}>
                +
              </StyledOrderButton>
            </StyledAmount>
          </StyledAdd>

          <StyledHr />
          <StyledTotal>
            <span>
              <strong>
                Total: {orderInfo.price ? orderInfo.price * pcs : "0.00"} €
              </strong>
            </span>
            <StyledButton>Buy</StyledButton>
          </StyledTotal>
        </StyledSummary>
      </StyledRightPart>
    </StyledOrderSummaryContainer>
  );
}
