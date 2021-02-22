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
import TimeLeftTimer from "./TimeLeftTimer";
import placeholder from "../assets/placeholder_400px.jpg";

export default function Listing(props) {
  const { cafeName } = useContext(bakeyContext);

  const [open, setOpen] = useState(false);
  // value should come from DB
  // const value = props.totalPieces - value from the response
  const value = 0;
  const maxValue = props.totalPieces;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const allergenes = () => {
    if (props.listingAllergenes) {
      var list = props.listingAllergenes;
      return list.map((elem) => {
        console.log("test");
        return <p>{elem}, </p>;
      });
    }
  };

  return (
    <StyledListingContainer>
      <StyledPhotoContainer>
        <img
          src={placeholder}
          src={props.image ? props.image : placeholder}
          alt="my offer"
        ></img>
      </StyledPhotoContainer>
      <StyledDescContainer>
        <header>
          <h3>
            {props.title ? props.title : "Title"}
            <StyledMore
              onClick={handleOpen}
              display={open ? "none" : "inline"}
            />
            <StyledLess
              onClick={handleClose}
              display={open ? "inline" : "none"}
            />
          </h3>

          <StyledAllergenesContainer display={open ? 1 : 0}>
            <p> Allergenes: </p> {allergenes()}
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
            <StyledTag no wheat title="wheat free">
              W
            </StyledTag>
            <StyledTag vegan title="vegan">
              V
            </StyledTag>
            <StyledTag organic title="organic">
              O
            </StyledTag>
          </StyledTagContainer>
          <span>{cafeName === undefined ? "Café Name" : cafeName}</span>
        </header>

        <div style={{ width: "130px" }}>
          <CircularProgressbar
            value={value}
            maxValue={maxValue}
            text={
              maxValue ? `${value}/${maxValue === "" ? 0 : maxValue} sold` : ""
            }
            strokeWidth="14"
            styles={buildStyles({
              // Rotation of path and trail, in number of turns (0-1)
              rotation: 0,

              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: "round",

              // Text size
              textSize: "0.7rem",

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
        <span>
          {maxValue ? `${maxValue - value} pieces left` : "0 pieces left"}
        </span>
        <StyledTimers>
          <StyledCentered>
            <span>Time left:</span>
            <span>
              <strong>
                <TimeLeftTimer />
              </strong>
            </span>
          </StyledCentered>
          <StyledCentered>
            <span>Pick-up:</span>
            <strong>
              {props.pickUpDate ? props.pickUpDate : "Day and hour"}
            </strong>
          </StyledCentered>
        </StyledTimers>
        <StyledBtnContainer>
          <StyledButton buy>
            Buy a piece for {props.piecePrice ? props.piecePrice : ""}€
          </StyledButton>
          <StyledButton buy>
            Buy whole for{" "}
            {props.piecePrice && props.totalPieces
              ? (props.piecePrice * props.totalPieces).toFixed(2)
              : ""}
            €
          </StyledButton>
        </StyledBtnContainer>
      </StyledDescContainer>
    </StyledListingContainer>
  );
}
