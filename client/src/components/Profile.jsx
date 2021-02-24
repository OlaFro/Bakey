import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import StyledCentered from "../styledComponents/StyledCentered";
import { StyledButton } from "../styledComponents/StyledButton";
import StyledHr from "../styledComponents/StyledHr";
import { StyledIcon } from "../styledComponents/StyledCafeCard";
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
  const params = useParams();

  const [cafeInfo, setCafeInfo] = useState({});

  const [showAddress, setShowAddress] = useState(false);

  const handleShow = () => {
    setShowAddress(false);
  };

  const handleHide = () => {
    setShowAddress(true);
  };

  useEffect(() => {
    console.log(params.id.split(":")[1]);
    Axios({
      method: "POST",
      url: "/cafes/info",
      data: { id: params.id.split(":")[1] },
    })
      .then((res) => {
        console.log(res.data);
        setCafeInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <StyledCentered>
      <StyledHeader>
        <StyledBackgroundPic>
          <img src={cafeInfo.cafeCover} alt="our cafe" />
        </StyledBackgroundPic>
        <StyledLogo>
          {cafeInfo.profilePic ? (
            <img src={cafeInfo.profilePic} alt="our logo"></img>
          ) : (
            <StyledIcon />
          )}
        </StyledLogo>
      </StyledHeader>
      <StyledContentContainer>
        {/* place for review stars in the future */}
        <h2>{cafeInfo.cafeName}</h2>
        <h4>Baker: {cafeInfo.firstName}</h4>

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
