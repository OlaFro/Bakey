import React, { useState, useContext } from "react";
import { bakeyContext } from "../Context";
import {
  StyledListingContainer,
  StyledPhotoContainer,
  StyledDescContainer,
  StyledTag,
  StyledTagContainer,
  StyledAllergenesContainer,
} from "../styledComponents/StyledListing";
import { StyledButton } from "../styledComponents/StyledButton";

export default function Listing() {
  const { cafeName } = useContext(bakeyContext);
  return (
    <StyledListingContainer>
      <StyledPhotoContainer>
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
        <StyledAllergenesContainer>
          <i>Allergenes: </i>
          <i>eggs, dairy, cereal, peanut, celery, mustard, lupins, soja</i>
        </StyledAllergenesContainer>
      </StyledPhotoContainer>
      <StyledDescContainer>
        <header>
          <h2>Apple pie</h2>
        </header>

        <span>cafeName</span>
        <span>Possible pick-up: Tuesday(23.03.21 12:00)</span>
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
