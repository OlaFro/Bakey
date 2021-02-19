import React, { useState, useContext } from "react";
import { bakeyContext } from "../Context";
import {
  StyledListingContainer,
  StyledPhotoContainer,
  StyledDescContainer,
  StyledTag,
  StyledTagContainer,
  StyledAllergenesContainer,
  StyledText,
} from "../styledComponents/StyledListing";
import StyledCentered from "../styledComponents/StyledCentered";
import { StyledButton } from "../styledComponents/StyledButton";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import colors from "../styledComponents/colors";

export default function Listing() {
  const { cafeName } = useContext(bakeyContext);
  const value = 3;
  return (
    <StyledListingContainer>
      <StyledPhotoContainer>
        <StyledTagContainer>
          <StyledTag lactose>
            <span>lactose free</span>
          </StyledTag>
          <StyledTag gluten>
            <span>gluten free</span>
          </StyledTag>
          <StyledTag wheat>
            <span>wheat free</span>
          </StyledTag>
          <StyledTag sugar>
            <span>sugar free</span>
          </StyledTag>
          <StyledTag vegan>vegan</StyledTag>
          <StyledTag organic>
            <span>organic</span>
          </StyledTag>
        </StyledTagContainer>
        <StyledAllergenesContainer>
          <p>
            Allergenes: eggs, dairy, cereal, peanut, celery, mustard, lupins,
            soja
          </p>
        </StyledAllergenesContainer>
      </StyledPhotoContainer>
      <StyledDescContainer>
        <header>
          <h3>Very long cheesecake title two lines long - ca. 50 chars</h3>
          {/* <span>{cafeName}</span>
        context cafeName not visible */}
          <StyledText>Café Ocka</StyledText>
        </header>

        <div style={{ width: "130px" }}>
          <CircularProgressbar
            value={value}
            maxValue={4}
            text="3/4"
            strokeWidth="16"
            styles={buildStyles({
              // Rotation of path and trail, in number of turns (0-1)
              rotation: 0,

              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: "round",

              // Text size
              textSize: "0.8rem",

              // How long animation takes to go from one percentage to another, in seconds
              pathTransitionDuration: 0.5,

              // Can specify path transition in more detail, or remove it entirely
              // pathTransition: 'none',

              // Colors
              pathColor: `${colors.accent1}`,
              textColor: `${colors.black}`,
              trailColor: "#d6d6d6",
              backgroundColor: "transparent",
            })}
          />
        </div>

        <StyledCentered>
          <StyledText>Possible pick-up:</StyledText>
          <StyledText>
            <strong>Tuesday (23.03.21 12:00)</strong>
          </StyledText>
        </StyledCentered>
        {/* <StyledCentered>
            <span>Time to end:</span>
            <time>09h 45min</time>
          </StyledCentered> */}
        <div className="BtnContainer">
          <StyledButton buy>Buy a piece for 10€</StyledButton>
          <StyledButton buy>Buy whole for 40€</StyledButton>
        </div>
      </StyledDescContainer>
    </StyledListingContainer>
  );
}
