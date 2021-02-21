import React from "react";
import StyledCentered from "../styledComponents/StyledCentered";
import { StyledButton } from "../styledComponents/StyledButton";
import {
  StyledBackgroundPic,
  StyledLogo,
  StyledNameContainer,
} from "../styledComponents/StyledProfile";

export default function Profile() {
  return (
    <StyledCentered>
      <StyledBackgroundPic />
      <StyledLogo />
      <StyledNameContainer>
        {/* place for review stars in the future */}
        <h2>Café ocka</h2>
        <h4>Baker: Kati</h4>
      </StyledNameContainer>

      {/* <hr />
      <div>
        <StyledButton cafe>About</StyledButton>
        <StyledButton cafe>Address</StyledButton>
      </div>
      <p>Description</p>
      <hr /> */}
    </StyledCentered>
  );
}
