import React from "react";
import {
  StyledOrderContainer,
  StyledLeftPart,
  StyledPreview,
  StyledRightPart,
  StyledSummary,
} from "../styledComponents/StyledOrder";

import placeholder from "../assets/placeholder_400px.jpg";

export default function Order(props) {
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
        <StyledSummary>SUMMARY</StyledSummary>
      </StyledRightPart>
    </StyledOrderContainer>
  );
}
