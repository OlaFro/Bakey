import React, { useState } from "react";

import {
  StyledHeader,
  StyledCTA,
  StyledMain,
} from "../styledComponents/StyledLandingPage";
import {
  StyledInputContainer,
  StyledSelect,
  StyledLabel,
  StyledArrow,
} from "../styledComponents/StyledForm";

import { StyledButton } from "../styledComponents/StyledButton";

export default function LandingPage() {
  const [city, setCity] = useState("Leipzig");
  return (
    <>
      <StyledHeader>
        <div>
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
        </div>
      </StyledHeader>
      <StyledMain></StyledMain>
    </>
  );
}
