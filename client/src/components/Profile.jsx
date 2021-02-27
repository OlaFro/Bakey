import React, { useState, useEffect, useRef } from "react";
import { useParams, useLocation } from "react-router-dom";
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
import Listing from "./Listing";
import Warning from "./Warning";

export default function Profile() {
  const params = useParams();

  const location = useLocation();

  const urlHash = location.hash.split("#")[1];

  const listingLinkRef = useRef(null);

  console.log(urlHash);

  const [cafeInfo, setCafeInfo] = useState({});

  const [showWarning, setShowWarning] = useState(false);

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
        if (!res.data) {
          setShowWarning(true);
        } else {
          setCafeInfo(res.data);
          listingLinkRef.current?.scrollIntoView({ behavior: "smooth" });
        }
      })
      .catch((err) => {
        console.log(err);
        showWarning(true);
      });
  }, []);

  return (
    <StyledCentered>
      <StyledHeader>
        <StyledBackgroundPic>
          {cafeInfo.cafeCover ? (
            <img src={cafeInfo.cafeCover} alt="our cafe" />
          ) : null}
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

        {showWarning ? (
          <Warning msg="the service is out of order" />
        ) : (
          <h4>Baker: {cafeInfo.firstName}</h4>
        )}

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
          {cafeInfo.cafeDescription || (
            <p>
              Croissant cupcake cheesecake cake muffin croissant biscuit. I love
              gummi bears lemon drops pastry lollipop caramels. Liquorice tart
              dragée cake I love I love sesame snaps halvah chocolate cake.
              Sesame snaps wafer bonbon jelly pudding jelly-o I love soufflé ice
              cream. Topping gummies tart sesame snaps soufflé toffee. Chocolate
              cake sweet pie croissant liquorice sugar plum carrot cake jujubes.
              I love sugar plum fruitcake jelly I love cake sweet roll gummi
              bears. Cupcake bonbon sesame snaps I love cheesecake carrot cake
              cupcake I love donut. Oat cake sugar plum candy canes dessert
              liquorice tiramisu gummi bears. Pudding chocolate bar pudding
              topping jujubes gummi bears. Fruitcake chocolate bar pastry. Cake
              cupcake bonbon.
            </p>
          )}
        </StyledAbout>
        <StyledAddress display={showAddress ? "flex" : "none"}>
          <span>
            <strong>{cafeInfo.cafeName}</strong>
          </span>
          <div>
            <span>
              {cafeInfo.cafeStreet} {cafeInfo.cafeStreetNr}
            </span>
            <span>
              {" "}
              {cafeInfo.cafeZip} {cafeInfo.city}
            </span>
          </div>
          <div>
            <a href={cafeInfo.cafeURL}>{cafeInfo.cafeURL}</a>
            <span> {cafeInfo.email}</span>
          </div>

          {/* place for the map in the future */}
        </StyledAddress>

        <StyledHr cafe />
      </StyledContentContainer>
      <StyledListingContainer>
        {cafeInfo.cafeListings
          ? cafeInfo.cafeListings.map((listing, index) => {
              return (
                <div
                  ref={listing.id === urlHash ? listingLinkRef : null}
                  className={listing.id === urlHash ? "selected" : null}
                  key={`listing-${index}`}
                >
                  {listing.id === urlHash ? (
                    <h2>Your Friend's Recommendation:</h2>
                  ) : null}
                  <Listing
                    cafeName={cafeInfo.cafeName}
                    title={listing.listingName}
                    totalPieces={listing.totalPieces}
                    availablePieces={listing.availablePieces}
                    pickUpDate={listing.pickUpDate}
                    piecePrice={listing.piecePrice}
                    listingAllergenes={listing.listingAllergenes}
                    listingTags={listing.listingTags}
                    image={listing.listingPicture}
                    id={listing._id}
                    listingIdentifier={listing.id}
                  />
                </div>
              );
            })
          : null}
      </StyledListingContainer>
    </StyledCentered>
  );
}
