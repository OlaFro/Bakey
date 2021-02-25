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
  const [pcs, setPcs] = useState(1);
  const increment = () => {
    if (pcs <= props.availablePieces) {
      setPcs(pcs + 1);
    }
  };
  const decrement = () => {
    if (pcs > 1) {
      setPcs(pcs - 1);
    }
  };
  return (
    <StyledOrderSummaryContainer>
      <StyledLeftPart>
        <StyledPreview>
          <figure>
            <img src={props.image ? props.image : placeholder} alt="my offer" />
          </figure>
          <div>
            <h3>{props.title ? props.title : "Title"}</h3>
            <div>
              <span>{props.cafeName ? props.cafeName : "Café name"} </span>
              <span>
                {props.pickUpDate ? props.pickUpDate : "Pick-up date"}
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
              Price pro piece: {props.piecePrice ? props.piecePrice : "0.00"} €
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
                Total: {props.piecePrice ? props.piecePrice * pcs : "0.00"} €
              </strong>
            </span>
            <StyledButton>Buy</StyledButton>
          </StyledTotal>
        </StyledSummary>
      </StyledRightPart>
    </StyledOrderSummaryContainer>
  );
}
