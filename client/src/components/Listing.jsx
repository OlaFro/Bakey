import React, { useState, useContext } from "react";
import { bakeyContext } from "../Context";
import {
  StyledListingContainer,
  StyledPhotoContainer,
  StyledDescContainer,
} from "../styledComponents/StyledListing";

export default function Listing() {
  const { cafeName } = useContext(bakeyContext);
  return (
    <StyledListingContainer>
      <StyledPhotoContainer></StyledPhotoContainer>
      <StyledDescContainer></StyledDescContainer>
    </StyledListingContainer>
  );
}
