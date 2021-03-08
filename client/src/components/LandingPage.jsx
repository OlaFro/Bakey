import React, { useState } from "react";

import {
  StyledHeader,
  StyledCTA,
  StyledTitle,
  StyledMain,
  StyledDesc,
  StyledCarrousel,
} from "../styledComponents/StyledLandingPage";
import {
  StyledInputContainer,
  StyledSelect,
  StyledLabel,
  StyledArrow,
} from "../styledComponents/StyledForm";
import { StyledButton } from "../styledComponents/StyledButton";
import StyledCentered from "../styledComponents/StyledCentered";

export default function LandingPage() {
  const [city, setCity] = useState("Leipzig");
  return (
    <StyledCentered>
      <StyledHeader>
        <div className="headingContainer">
          <h1>Let them order cake!</h1>
          <StyledCTA>
            <StyledInputContainer>
              <StyledSelect
                landingPage
                id="city"
                name="city"
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              >
                <option value="Leipzig">Leipzig</option>
                <option value="Hamburg">Hamburg</option>
                <option value="Düsseldorf">Düsseldorf</option>
              </StyledSelect>
              <StyledLabel htmlFor="city">See offers from:</StyledLabel>
              <StyledArrow landingPage />
            </StyledInputContainer>
            <StyledButton>go</StyledButton>
          </StyledCTA>
          <StyledDesc>
            <h2>Support your local cafe and order small portions.</h2>
            <h2> We will find other customers to fulfill the order.</h2>
          </StyledDesc>
        </div>
      </StyledHeader>

      <StyledTitle>
        <h2>Easy as a piece of cake!</h2>
      </StyledTitle>

      <StyledMain>
        <StyledCarrousel>here we will have a carousel</StyledCarrousel>
      </StyledMain>
    </StyledCentered>
  );
}
