import React from "react";
import StyledCentered from "../styledComponents/StyledCentered";
import { StyledButton } from "../styledComponents/StyledButton";
import StyledHr from "../styledComponents/StyledHr";
import {
  StyledBackgroundPic,
  StyledLogo,
  StyledContentContainer,
  StyledBtnContainer,
} from "../styledComponents/StyledProfile";

export default function Profile() {
  return (
    <StyledCentered>
      <StyledBackgroundPic />
      <StyledLogo />
      <StyledContentContainer>
        {/* place for review stars in the future */}
        <h2>Café ocka</h2>
        <h4>Baker: Kati</h4>

        <StyledHr cafe />
        <StyledBtnContainer>
          <StyledButton cafe>About</StyledButton>
          <StyledButton cafe>Address</StyledButton>
        </StyledBtnContainer>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.{" "}
          </p>
        </div>
        <div>
          <p></p>
        </div>

        <StyledHr cafe />
      </StyledContentContainer>
    </StyledCentered>
  );
}
