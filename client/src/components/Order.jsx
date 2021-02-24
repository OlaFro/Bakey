import React, { useState } from "react";
import {
  StyledOrderContainer,
  StyledLeftPart,
  StyledPreview,
  StyledRightPart,
  StyledSummary,
  StyledAmount,
} from "../styledComponents/StyledOrder";
import { StyledLabel } from "../styledComponents/StyledForm";

import StyledHr from "../styledComponents/StyledHr";
import { StyledOrderButton } from "../styledComponents/StyledButton";

import placeholder from "../assets/placeholder_400px.jpg";

export default function Order(props) {
  const [pcs, setPcs] = useState(1);
  const increment = () => {
    setPcs(pcs + 1);
  };
  const decrement = () => {
    if (pcs > 1) {
      setPcs(pcs - 1);
    }
  };

  return (
    <StyledOrderContainer>
      <StyledLeftPart>
        <StyledPreview>
          <figure>
            <img src={props.image ? props.image : placeholder} alt="my offer" />
          </figure>
          <div>
            <h3>{props.title ? props.title : "Title"}</h3>
            <div>
              <p>{props.cafeName ? props.cafeName : "Café name"} </p>
              <p>{props.pickUpDate ? props.pickUpDate : "Pick-up date"}</p>
            </div>
          </div>
        </StyledPreview>
      </StyledLeftPart>
      <StyledRightPart>
        <StyledSummary>
          <h4>Order summary:</h4>
          <div>
            <span>
              Price pro piece: {props.piecePrice ? props.piecePrice : "4.50"} €
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
          </div>

          <StyledHr />
          <div></div>
        </StyledSummary>
      </StyledRightPart>
    </StyledOrderContainer>
  );
}
