import React, { useState, useContext } from "react";
import { bakeyContext } from "../Context";
import {
  StyledListingContainer,
  StyledPhotoContainer,
  StyledDescContainer,
  StyledTag,
  StyledTagContainer,
  StyledAllergenesContainer,
  StyledBtnContainer,
  StyledMore,
  StyledLess,
  StyledTimers,
} from "../styledComponents/StyledListing";
import StyledCentered from "../styledComponents/StyledCentered";
import { StyledButton } from "../styledComponents/StyledButton";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import colors from "../styledComponents/colors";

export default function Listing() {
  const { cafeName } = useContext(bakeyContext);

  const [open, setOpen] = useState(false);
  const value = 4;
  const maxValue = 6;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <StyledListingContainer>
      <StyledPhotoContainer></StyledPhotoContainer>
      <StyledDescContainer>
        <header>
          <h3>
            Kati's great apple pie apple
            <StyledMore
              onClick={handleOpen}
              display={open ? "none" : "inline"}
            />
            <StyledLess
              onClick={handleClose}
              display={open ? "inline" : "none"}
            />
          </h3>

          <StyledAllergenesContainer display={open ? true : false}>
            <p>
              Allergenes: eggs, dairy, cereal, peanut, celery, mustard, lupins,
              soya
            </p>
          </StyledAllergenesContainer>
          <StyledTagContainer>
            <StyledTag no lactose title="lactose free">
              L
            </StyledTag>
            <StyledTag no gluten title="gluten free">
              G
            </StyledTag>
            <StyledTag no sugar title="sugar free">
              S
            </StyledTag>
            <StyledTag vegan title="vegan">
              V
            </StyledTag>
            <StyledTag organic title="organic">
              O
            </StyledTag>
          </StyledTagContainer>
          <span>Café Ocka</span>
        </header>

        <div style={{ width: "130px" }}>
          <CircularProgressbar
            value={value}
            maxValue={maxValue}
            text={`${value}/${maxValue} sold`}
            strokeWidth="14"
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
        <span>{maxValue - value} pieces left</span>
        <StyledTimers>
          <StyledCentered>
            <span>Time left:</span>
            <span>
              <strong>10h:10min</strong>
            </span>
          </StyledCentered>
          <StyledCentered>
            <span>Pick-up:</span>
            <strong>Tuesday 12:00</strong>
          </StyledCentered>
        </StyledTimers>
        <StyledBtnContainer>
          <StyledButton buy>Buy a piece for 6€</StyledButton>
          <StyledButton buy>Buy whole for 36€</StyledButton>
        </StyledBtnContainer>
      </StyledDescContainer>
    </StyledListingContainer>
  );
}
