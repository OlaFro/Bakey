import React, { useState, useContext } from "react";
import { bakeyContext } from "../Context";
import Axios from "axios";
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
  StyledLink,
  StyledMessage,
} from "../styledComponents/StyledListing";
import StyledCentered from "../styledComponents/StyledCentered";
import { StyledButton } from "../styledComponents/StyledButton";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import colors from "../styledComponents/colors";
import TimeLeftTimer from "./TimeLeftTimer";
import placeholder from "../assets/placeholder_400px.jpg";
import Tag from "./Tag";
import { useParams, useHistory, Link } from "react-router-dom";
import {
  StyledInputContainer,
  StyledInputField,
  StyledLabel,
} from "../styledComponents/StyledForm";

export default function Listing(props) {
  const { isLogged, setSelectedListing, cafeName } = useContext(bakeyContext);
  let history = useHistory();

  const params = useParams();

  const [open, setOpen] = useState(false);

  const cafeId = params.id ? params.id.split(":")[1] : "";

  const availablePieces = props.availablePieces;
  const maxValue = props.totalPieces;
  const soldPieces = maxValue - props.availablePieces || 0;

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
      return (
        niceDate.split(" ")[0].split("-").reverse().join(".") +
        " " +
        (!props.preview
          ? Number(niceDate.split(" ")[1].substring(0, 2)) + 1
          : niceDate.split(" ")[1].substring(0, 2)) +
        niceDate.split(" ")[1].substring(2, 5)
      );
    }
  };
  const buyWhole = () => {
    return `Buy whole for 
    ${
      props.piecePrice && props.totalPieces
        ? (props.piecePrice * props.totalPieces).toFixed(2)
        : "0.00"
    }€`;
  };

  const buyRest = () => {
    return `Buy rest for 
    ${
      availablePieces && props.piecePrice
        ? (availablePieces * props.piecePrice).toFixed(2)
        : "0.00"
    }€`;
  };

  const storeOrderInfo = (pcs) => {
    var pieces;
    if (pcs === "one") {
      pieces = 1;
    } else if (pcs === "many") {
      pieces = availablePieces;
    }
    let orderInfo = {
      id: props.id,
      listingName: props.title,
      cafeInfo: props.cafeName,
      pickUpDate: props.pickUpDate,
      price: props.piecePrice,
      pieces: pieces,
      availablePieces: availablePieces,
      cafeId: cafeId || props.cafeId,
      listingImg: props.image,
      listingIdentifier: props.listingIdentifier,
    };
    sessionStorage.setItem("orderInfo", JSON.stringify(orderInfo));
    isLogged.state ? history.push("/order") : history.push("/login");
  };

  const archiveListing = () => {
    console.log("request sent");
    props.setWarningContent("the service is out of order.");
    props.setShowWarning(false);
    Axios({
      method: "POST",
      url: `listings/archive`,
      data: { listingID: props.id },
    })
      .then((res) => {
        console.log(res);
        if (res.data.status === "changed") {
          props.setListings((prevListings) =>
            prevListings.map((listing, index, array) => {
              if (listing._id === res.data.listing._id) {
                return (array[index] = res.data.listing);
              } else {
                return listing;
              }
            })
          );
        } else if (res.data.status === "no authorization") {
          props.setWarningContent(
            "that you are not authorized to change the status of the offer."
          );
          props.setShowWarning(true);
        } else {
          props.setWarningContent(
            "that the state of this offer can not be changed, please contact our helpdesk."
          );
          props.setShowWarning(true);
        }
      })
      .catch((err) => {
        console.log(err);
        props.setShowWarning(true);
      });
  };

  const wantReactivate = () => {
    setSelectedListing({
      listingImage: props.image,
      listingName: props.title,
      listingAllergenes: props.listingAllergenes,
      listingTags: props.listingTags,
      totalPieces: props.totalPieces,
      pickUpDate: "",
      piecePrice: props.piecePrice,
    });
    history.push("/listingform");
  };

  console.log(props.listingTags);

  return (
    <StyledListingContainer
      id={params.id ? props.listingIdentifier : null}
      cafeDashboard={props.dashboard ? true : false}
    >
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
          <StyledTagContainer
            display={
              props.listingTags[0] === "" || props.listingTags.length < 1
                ? "none"
                : "flex"
            }
          >
            {tags()}
          </StyledTagContainer>
          {props.withLink ? (
            <StyledLink to={`/cafe:${props.cafeId}`}>
              {props.cafeName}
            </StyledLink>
          ) : (
            <span>{props.cafeName ? props.cafeName : cafeName}</span>
          )}
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
                <TimeLeftTimer pickUpDate={props.pickUpDate} />
              </strong>
            </span>
          </StyledCentered>
          <StyledCentered>
            <span>Pick-up:</span>
            <strong>{props.pickUpDate ? handleDate() : "Day and hour"}</strong>
          </StyledCentered>
        </StyledTimers>
        {props.dashboard ? null : (
          <StyledBtnContainer>
            <StyledButton
              buy
              onClick={() => {
                if (params.id || props.landingPage) {
                  storeOrderInfo("one");
                }
              }}
            >
              Buy a piece for{" "}
              {props.piecePrice
                ? parseFloat(props.piecePrice).toFixed(2)
                : "0.00"}
              €
            </StyledButton>
            <StyledButton
              buy
              onClick={() => {
                if (params.id || props.landingPage) {
                  storeOrderInfo("many");
                }
              }}
            >
              {availablePieces < props.totalPieces ? buyRest() : buyWhole()}
            </StyledButton>
          </StyledBtnContainer>
        )}
        {props.expired ? (
          <StyledBtnContainer>
            <StyledButton buy onClick={wantReactivate}>
              Reactivate
            </StyledButton>
            {props.archive ? null : (
              <StyledButton buy onClick={archiveListing}>
                Archive
              </StyledButton>
            )}
          </StyledBtnContainer>
        ) : null}
        {props.expiredClient ? (
          <StyledMessage warning>
            There were not enough customers to bake a cake. Your money will be
            sent back.
          </StyledMessage>
        ) : null}
        {props.soldClient ? (
          <StyledMessage>
            Congratulations, you will get your cake! Details in the email from
            baker.
          </StyledMessage>
        ) : null}
      </StyledDescContainer>
    </StyledListingContainer>
  );
}
