import React, { useState, useContext } from "react";
import { bakeyContext } from "../Context";
import {
  StyledListingContainer,
  StyledPhotoContainer,
  StyledDescContainer,
  StyledTag,
  StyledTagContainer,
  StyledAllergenesContainer,
  StyledCounter,
} from "../styledComponents/StyledListing";
import StyledCentered from "../styledComponents/StyledCentered";
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
            <span>lactose free</span>
          </StyledTag>
          <StyledTag gluten>
            <span>gluten free</span>
          </StyledTag>
          <StyledTag wheat>
            <span>wheat free</span>
          </StyledTag>
          <StyledTag sugar>
            <span>sugar free</span>
          </StyledTag>
        </StyledTagContainer>
        <StyledAllergenesContainer>
          <i>Allergenes: </i>
          <i>eggs, dairy, cereal, peanut, celery, mustard, lupins, soja</i>
        </StyledAllergenesContainer>
      </StyledPhotoContainer>
      <StyledDescContainer>
        <header>
          <h3>Very long cheescake title two lines long -this is 58 chars</h3>
          {/* <span>{cafeName}</span>
        context cafeName not visible */}
          <span>Café Ocka</span>
        </header>
        <StyledCentered>
          <small>Possible pick-up:</small>
          <strong>Tuesday(23.03.21 12:00)</strong>
        </StyledCentered>
        <div>
          <StyledCounter />
          <StyledCentered>
            <span>Time to end:</span>
            <time>09h 45min</time>
          </StyledCentered>
        </div>
        <div className="BtnContainer">
          <StyledButton buy>Buy a piece for 10€</StyledButton>
          <StyledButton buy>Buy whole for 40€</StyledButton>
        </div>
      </StyledDescContainer>
    </StyledListingContainer>
  );
}
