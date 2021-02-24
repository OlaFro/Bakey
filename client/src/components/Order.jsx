import React from "react";
import {
  StyledOrderContainer,
  StyledPreview,
  StyledSummary,
} from "../styledComponents/StyledOrder";

import placeholder from "../assets/placeholder_400px.jpg";

export default function Order(props) {
  return (
    <StyledOrderContainer>
      <StyledPreview>
        <div>
          <img
            src={props.image ? props.image : placeholder}
            alt="my offer"
          ></img>
        </div>
      </StyledPreview>
      <StyledSummary>SUMMARY</StyledSummary>
    </StyledOrderContainer>
  );
}
