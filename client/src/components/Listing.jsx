import React, { useState, useContext, useEffect } from "react";
import { bakeyContext } from "../Context";
import {
  StyledListingContainer,
  StyledPhotoContainer,
  StyledDescContainer,
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
import Tag from "./Tag";
import { useParams, useHistory, useLocation } from "react-router-dom";

export default function Listing(props) {
  const { cafeName, isLogged } = useContext(bakeyContext);
  let history = useHistory();

  const location = useLocation();
  const params = useParams();

  const [open, setOpen] = useState(false);

  //session storage

  const cafeId = params.id ? params.id.split(":")[1] : "";

  const availablePieces = props.availablePieces;
  const maxValue = props.totalPieces;
  const soldPieces = maxValue - props.availablePieces || 0;

  const listingIdentifier = props.title
    .split(" ")
    .map((word) => {
      return word.substr(0, 1).toLowerCase() + word.substr(1);
    })
    .join("-");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const allergenes = () => {
    if (props.listingAllergenes) {
      var list = props.listingAllergenes;
      return list.map((elem, index) => {
        return <p key={`Allergene-${index}`}>{elem}, </p>;
      });
    }
  };

  const tags = () => {
    if (props.listingTags) {
      return <Tag key={props.listingTags} data={props.listingTags} />;
    }
  };

  const handleDate = () => {
    if (props.pickUpDate) {
      let niceDate = props.pickUpDate.substring(5).replace("T", " ");
      // 02-22 10:48

      // 22-02 10:48
      return (
        niceDate.split(" ")[0].split("-").reverse().join(".") +
        " " +
        niceDate.split(" ")[1].substring(0, 5)
      );
    }
  };
  const buyWhole = () => {
    return `Buy whole for 
    ${
      props.piecePrice && props.totalPieces
        ? (props.piecePrice * props.totalPieces).toFixed(2)
        : ""
    }
    €`;
  };

  const buyRest = () => {
    return `Buy rest for 
    ${
      availablePieces && props.piecePrice
        ? (availablePieces * props.piecePrice).toFixed(2)
        : ""
    }
    €`;
  };
  console.log(soldPieces);

  const storeOrderInfo = (pcs) => {
    var price;
    var pieces;
    if (pcs === "one") {
      price = props.piecePrice;
      pieces = 1;
    } else if (pcs === "many") {
      price = props.piecePrice * availablePieces;
      pieces = availablePieces;
    }
    let orderInfo = {
      id: props.id,
      listingName: props.title,
      cafeInfo: props.cafeName,
      pickUpDate: props.pickUpDate,
      price: price,
      pieces: pieces,
      availablePieces: availablePieces,
      cafeId: cafeId,
    };
    sessionStorage.setItem("orderInfo", JSON.stringify(orderInfo));
    isLogged.state ? history.push("/order") : history.push("/login");
  };
  return (
    <StyledListingContainer id={params.id ? listingIdentifier : null}>
      <StyledPhotoContainer>
        <img src={props.image ? props.image : placeholder} alt="my offer"></img>
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
          <StyledTagContainer>{tags()}</StyledTagContainer>
          <span>{cafeName}</span>
        </header>

        <div style={{ width: "130px" }}>
          <CircularProgressbar
            value={soldPieces}
            maxValue={maxValue}
            text={
              maxValue
                ? `${soldPieces}/${maxValue === "" ? 0 : maxValue} sold`
                : ""
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
          {maxValue ? `${maxValue - soldPieces} pieces left` : "0 pieces left"}
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
            <strong>{props.pickUpDate ? handleDate() : "Day and hour"}</strong>
          </StyledCentered>
        </StyledTimers>
        <StyledBtnContainer>
          <StyledButton
            buy
            onClick={() => {
              if (params.id) {
                storeOrderInfo("one");
              }
            }}
          >
            Buy a piece for {props.piecePrice ? props.piecePrice : ""}€
          </StyledButton>
          <StyledButton
            buy
            onClick={() => {
              if (params.id) {
                storeOrderInfo("many");
              }
            }}
          >
            {availablePieces < props.totalPieces ? buyRest() : buyWhole()}
          </StyledButton>
        </StyledBtnContainer>
      </StyledDescContainer>
    </StyledListingContainer>
  );
}
