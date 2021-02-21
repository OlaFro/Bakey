import React, { useState } from "react";
import StyledCentered from "../styledComponents/StyledCentered";
import { StyledButton } from "../styledComponents/StyledButton";
import StyledHr from "../styledComponents/StyledHr";
import {
  StyledBackgroundPic,
  StyledLogo,
  StyledContentContainer,
  StyledBtnContainer,
  StyledAbout,
  StyledAddress,
} from "../styledComponents/StyledProfile";

export default function Profile() {
  const [showAddress, setShowAddress] = useState(false);

  const handleShow = () => {
    setShowAddress(false);
  };

  const handleHide = () => {
    setShowAddress(true);
  };

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
          <StyledButton onClick={handleShow} cafe>
            About
          </StyledButton>
          <StyledButton onClick={handleHide} cafe>
            Address
          </StyledButton>
        </StyledBtnContainer>
        <StyledAbout display={showAddress ? "none" : "block"}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.{" "}
          </p>
        </StyledAbout>
        <StyledAddress display={showAddress ? "flex" : "none"}>
          <span>
            <strong>Café Ocka</strong>
          </span>

          <span>Merseburger Str. 88</span>
          <span> 04177 Leipzig</span>

          <a href="http://www.cafeocka.de">www.cafeocka.de</a>

          <span> ocka@ocka.ocka</span>

          <span>0341 - 12345678</span>
          {/* place for the map in the future */}
        </StyledAddress>

        <StyledHr cafe />
      </StyledContentContainer>
    </StyledCentered>
  );
}
