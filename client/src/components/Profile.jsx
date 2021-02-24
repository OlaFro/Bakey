import React, { useState, useEffect } from "react";
import StyledCentered from "../styledComponents/StyledCentered";
import { StyledButton } from "../styledComponents/StyledButton";
import StyledHr from "../styledComponents/StyledHr";
import {
  StyledHeader,
  StyledBackgroundPic,
  StyledLogo,
  StyledContentContainer,
  StyledBtnContainer,
  StyledAbout,
  StyledAddress,
  StyledListingContainer,
} from "../styledComponents/StyledProfile";
import Axios from "axios";

export default function Profile() {
  const [showAddress, setShowAddress] = useState(false);

  const handleShow = () => {
    setShowAddress(false);
  };

  const handleHide = () => {
    setShowAddress(true);
  };

  useEffect(() => {
    Axios({
      method: "POST",
      url: ``,
    });
  });

  return (
    <StyledCentered>
      <StyledHeader>
        <StyledBackgroundPic>
          <img
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1330&q=80"
            alt="our cafe"
          ></img>
        </StyledBackgroundPic>
        <StyledLogo>
          <img
            src="https://i.pinimg.com/originals/1f/c3/ff/1fc3ff4791f292d4ec65893a2087825c.png"
            alt="our logo"
          ></img>
        </StyledLogo>
      </StyledHeader>
      <StyledContentContainer>
        {/* place for review stars in the future */}
        <h2>Café ocka</h2>
        <h4>Baker: Kati</h4>

        <StyledHr cafe />
        <StyledBtnContainer>
          <StyledButton
            onClick={handleShow}
            cafe
            headerBtn={showAddress ? false : true}
          >
            About
          </StyledButton>
          <StyledButton
            onClick={handleHide}
            cafe
            headerBtn={showAddress ? true : false}
          >
            Address
          </StyledButton>
        </StyledBtnContainer>
        <StyledAbout display={showAddress ? "none" : "block"}>
          <p>
            Croissant cupcake cheesecake cake muffin croissant biscuit. I love
            gummi bears lemon drops pastry lollipop caramels. Liquorice tart
            dragée cake I love I love sesame snaps halvah chocolate cake. Sesame
            snaps wafer bonbon jelly pudding jelly-o I love soufflé ice cream.
            Topping gummies tart sesame snaps soufflé toffee. Chocolate cake
            sweet pie croissant liquorice sugar plum carrot cake jujubes. I love
            sugar plum fruitcake jelly I love cake sweet roll gummi bears.
            Cupcake bonbon sesame snaps I love cheesecake carrot cake cupcake I
            love donut. Oat cake sugar plum candy canes dessert liquorice
            tiramisu gummi bears. Pudding chocolate bar pudding topping jujubes
            gummi bears. Fruitcake chocolate bar pastry. Cake cupcake bonbon.
          </p>
        </StyledAbout>
        <StyledAddress display={showAddress ? "flex" : "none"}>
          <span>
            <strong>Café Ocka</strong>
          </span>
          <div>
            <span>Merseburger Str. 88</span>
            <span> 04177 Leipzig</span>
          </div>
          <div>
            <a href="http://www.cafeocka.de">www.cafeocka.de</a>
            <span> ocka@ocka.ocka</span>
          </div>

          <div>
            <span>0341 - 12345678</span>
          </div>
          {/* place for the map in the future */}
        </StyledAddress>

        <StyledHr cafe />
      </StyledContentContainer>
      <StyledListingContainer>
        {/* put Listings here: */}
      </StyledListingContainer>
    </StyledCentered>
  );
}
