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
import Logo from "./Logo";

export default function LandingPage() {
  const [city, setCity] = useState("Leipzig");
  return (
    <StyledCentered>
      <StyledHeader>
        <div className="headingContainer">
          <Logo />
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
            <h2>Support your local café and order a piece of cake.</h2>
            <h2> We will find other customers to bake the whole one.</h2>
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
          <p>
            Everyone would like to have a piece of cake, but it's hard to bake
            only one slice! Usually, cafés were estimating their production
            based on regular visitors. In the hard times of the Covid-19
            lockdown, they can offer their food only to-go, but many of them are
            not taking the risk of baking products that won't be sold.{" "}
          </p>
          <p>
            Bakey is a web-application that allows clients to order small
            portions in their local café and in form of small crowdfunding
            campaigns gathers other customers to reach the profitable minimum
            for the café to bake the cake. If the goal won't be met, clients get
            their money back. To increase the chance of the campaign to succeed
            users can recommend it to friends.
          </p>
          <StyledButton>Explore Bakey</StyledButton>
          <p>
            Bakey is a final project of web development students of Digital
            Career Institute in Leipzig. It is only demo containing the
            functionalities we personally would use in the app like this and not
            offering real products. It shows all skills we've learned during the
            one-year MERN-stack course. If you want to learn more about used
            technologies and us - Alice, Ola, and Willy that created Bakey -
            visit ours About Us section.
          </p>
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
        <h3>Do you want to offer your products on Bakey? </h3>
        <StyledButton cafe>register</StyledButton>
      </StyledForCafe>
    </StyledCentered>
  );
}
