import React, { useState } from "react";
import Listing from "./Listing";

import {
  StyledHeader,
  StyledCTA,
  StyledTitle,
  StyledMain,
  StyledDesc,
  StyledCarrousel,
  StyledAbout,
  StyledEndSoon,
  StyledForCafe,
} from "../styledComponents/StyledLandingPage";
import {
  StyledInputContainer,
  StyledSelect,
  StyledLabel,
  StyledArrow,
} from "../styledComponents/StyledForm";
import { StyledButton } from "../styledComponents/StyledButton";
import StyledCentered from "../styledComponents/StyledCentered";
import { StyledLogo } from "../styledComponents/StyledLogo";

export default function LandingPage() {
  const [city, setCity] = useState("Leipzig");
  return (
    <StyledCentered>
      <StyledLogo />
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

      <StyledMain>
        <StyledTitle>
          <h2>Easy as a piece of cake!</h2>
        </StyledTitle>
        <StyledCarrousel>
          <div></div>
        </StyledCarrousel>

        <StyledAbout>
          <StyledTitle>
            <h2>What is Bakey?</h2>
          </StyledTitle>
          <h3>
            Here we will have a paragraph about our project. Donut candy chupa
            chups pudding gummi bears gummies sweet tootsie roll muffin. Danish
            danish brownie dessert gummi bears. Cotton candy topping cake
            jelly-o carrot cake. Jelly-o cake toffee pudding gummies topping
            muffin carrot cake. Danish ice cream chupa chups tart chocolate cake
            powder sesame snaps chocolate. Biscuit tiramisu sweet sugar plum
            bonbon cupcake donut.
          </h3>
          <StyledButton>Explore Bakey</StyledButton>
          <h3>
            Here we will have a paragraph about our project. Donut candy chupa
            chups pudding gummi bears gummies sweet tootsie roll muffin. Danish
            danish brownie dessert gummi bears. Cotton candy topping cake
            jelly-o carrot cake. Jelly-o cake toffee pudding gummies topping
            muffin carrot cake. Danish ice cream chupa chups tart chocolate cake
            powder sesame snaps chocolate. Biscuit tiramisu sweet sugar plum
            bonbon cupcake donut.
          </h3>
          <StyledButton>About Us</StyledButton>
        </StyledAbout>
        <StyledTitle>
          <h2>This campaigns end soon!</h2>
        </StyledTitle>
        <StyledEndSoon>
          <div>
            <Listing />
            <Listing />
            <Listing />
          </div>
        </StyledEndSoon>
      </StyledMain>
      <StyledForCafe>
        <h2>Do you want to offer your products on Bakey? </h2>
        <StyledButton cafe>register</StyledButton>
      </StyledForCafe>
    </StyledCentered>
  );
}
