import React from "react";
import StyledCentered from "../styledComponents/StyledCentered";
import { StyledButton } from "../styledComponents/StyledButton";

export default function Profile() {
  return (
    <div>
      <div>
        <img />
        <img />
      </div>
      <StyledCentered>
        <h2>Café ocka</h2>
        <span>Baker: Kati</span>
        <hr />
        <StyledButton>About</StyledButton>
        <StyledButton>Address</StyledButton>
        <p>Description</p>
        <hr />
      </StyledCentered>
    </div>
  );
}
