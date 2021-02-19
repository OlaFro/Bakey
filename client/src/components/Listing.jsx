import React, { useState, useContext } from "react";
import { bakeyContext } from "../Context";
import {
  StyledListingContainer,
  StyledPhotoContainer,
  StyledDescContainer,
} from "../styledComponents/StyledListing";
import { StyledButton } from "../styledComponents/StyledButton";

export default function Listing() {
  const { cafeName } = useContext(bakeyContext);
  return (
    <StyledListingContainer>
      <StyledPhotoContainer></StyledPhotoContainer>
      <StyledDescContainer>
        <h2>Kati's pie</h2>
        <span>{cafeName}</span>
        <div>
          <span>vegan</span>
          <span>organic</span>
        </div>
        <div>
          <i>Allergenes: eggs, dairy, cereal</i>
        </div>
        <div>
          <i>Possible pick-up: 23/03/21 12:00</i>
        </div>
        <div>Counter</div>
        <div>Time Left</div>
        <div>
          <StyledButton>Buy a piece for 10€</StyledButton>
          <StyledButton>Buy whole for 40€</StyledButton>
        </div>
      </StyledDescContainer>
    </StyledListingContainer>
  );
}
