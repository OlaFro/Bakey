import React from "react";
import StyledCentered from "../styledComponents/StyledCentered";
import { StyledButton } from "../styledComponents/StyledButton";
import {
  StyledBackgroundPic,
  StyledLogo,
} from "../styledComponents/StyledProfile";

export default function Profile() {
  return (
    <StyledCentered>
      <StyledBackgroundPic />
      <StyledLogo />

      {/* <StyledCentered>
        <h2>Café ocka</h2>
        <span>Baker: Kati</span>
        <hr />
        <div>
          <StyledButton cafe>About</StyledButton>
          <StyledButton cafe>Address</StyledButton>
        </div>
        <p>Description</p>
        <hr />
      </StyledCentered> */}
    </StyledCentered>
  );
}
