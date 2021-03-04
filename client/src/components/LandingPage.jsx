import React, { useState } from "react";

import {
  StyledHeader,
  StyledCTA,
  StyledTitle,
  StyledMain,
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
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  const [city, setCity] = useState("Leipzig");
  return (
    <StyledCentered>
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

      <StyledTitle>
        <h2>Easy as a piece of cake!</h2>
      </StyledTitle>

      <StyledMain></StyledMain>
    </StyledCentered>
  );
}
