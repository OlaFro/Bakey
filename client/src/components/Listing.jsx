import React, { useState, useContext } from "react";
import { bakeyContext } from "../Context";
import {
  StyledListingContainer,
  StyledPhotoContainer,
  StyledDescContainer,
  StyledTag,
  StyledTagContainer,
} from "../styledComponents/StyledListing";
import { StyledButton } from "../styledComponents/StyledButton";

export default function Listing() {
  const { cafeName } = useContext(bakeyContext);
  return (
    <StyledListingContainer>
      <StyledPhotoContainer></StyledPhotoContainer>
      <StyledDescContainer>
        <h2>Apple pie</h2>
        <span>cafeName</span>
        <StyledTagContainer>
          <StyledTag vegan>vegan</StyledTag>
          <StyledTag organic>
            <span>organic</span>
          </StyledTag>
          <StyledTag lactose>
            <span>no lactose</span>
          </StyledTag>
          <StyledTag gluten>
            <span>no gluten</span>
          </StyledTag>
          <StyledTag wheat>
            <span>no wheat</span>
          </StyledTag>
          <StyledTag sugar>
            <span>no sugar</span>
          </StyledTag>
        </StyledTagContainer>
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
