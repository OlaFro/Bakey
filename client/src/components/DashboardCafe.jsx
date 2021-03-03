import React, { useState, useContext, useEffect } from "react";
import { bakeyContext } from "../Context";
import { Link } from "react-router-dom";
import Axios from "axios";
import Warning from "./Warning";
import {
  StyledPlusLink,
  StyledPlusIcon,
  StyledPlusLinkInfo,
} from "../styledComponents/StyledPlusLink";
import StyledCafeDashboard from "../styledComponents/StyledCafeDashboard";
import Listing from "./Listing";
import PickUpCard from "./PickUpCard";

export default function DashboardUser() {
  const { userName, cafeName } = useContext(bakeyContext);

  const [listings, setListings] = useState([]);

  const [showWarning, setShowWarning] = useState(false);

  const [emptyListings, setEmptyListings] = useState(false);

  useEffect(() => {
    Axios({
      method: "GET",
      url: `listings/cafe`,
    })
      .then((res) => {
        console.log(res.data);
        if (res.data.length) {
          setListings(res.data);
        } else {
          setEmptyListings(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setShowWarning(true);
      });
  }, []);
  return (
    <StyledCafeDashboard>
      <header>
        <h2>Hello {userName} 🥳</h2>
      </header>
      <main>
        <StyledPlusLink>
          <Link to="/listingform">
            <StyledPlusIcon></StyledPlusIcon>
          </Link>
          <StyledPlusLinkInfo>create a new offer</StyledPlusLinkInfo>
        </StyledPlusLink>
        {showWarning ? <Warning msg="the service is out of order" /> : null}
        <section>
          <h3>Your current offers:</h3>
          <h4>Active:</h4>
          <div className="offers-wrapper">
            {listings.map((listing) => {
              const today = new Date();
              today.setHours(0, 0, 0, 0);
              const pickUpTime = new Date(listing.pickUpDate);
              pickUpTime.setHours(0, 0, 0, 0);
              if (
                listing.listingStatus === "active" &&
                today.getTime() < pickUpTime.getTime()
              ) {
                return (
                  <Listing
                    cafeName={cafeName}
                    title={listing.listingName}
                    totalPieces={listing.totalPieces}
                    availablePieces={listing.availablePieces}
                    pickUpDate={listing.pickUpDate}
                    piecePrice={listing.piecePrice}
                    listingAllergenes={listing.listingAllergenes}
                    listingTags={listing.listingTags}
                    image={listing.listingPicture}
                    id={listing._id}
                    dashboard={true}
                  />
                );
              } else {
                return null;
              }
            })}
          </div>
          <h4>Terminated:</h4>
          <div className="offers-wrapper">
            {listings.map((listing) => {
              const today = new Date();
              today.setHours(0, 0, 0, 0);
              const pickUpTime = new Date(listing.pickUpDate);
              pickUpTime.setHours(0, 0, 0, 0);
              if (
                listing.listingStatus === "active" &&
                today.getTime() >= pickUpTime.getTime()
              ) {
                return (
                  <Listing
                    cafeName={cafeName}
                    title={listing.listingName}
                    totalPieces={listing.totalPieces}
                    availablePieces={listing.availablePieces}
                    pickUpDate={listing.pickUpDate}
                    piecePrice={listing.piecePrice}
                    listingAllergenes={listing.listingAllergenes}
                    listingTags={listing.listingTags}
                    image={listing.listingPicture}
                    id={listing._id}
                    dashboard={true}
                  />
                );
              } else {
                return null;
              }
            })}
          </div>
        </section>
        <section>
          <h3>Your pick-ups:</h3>
          {listings.map((listing) => {
            if (listing.listingStatus === "sold") {
              return <PickUpCard />;
            } else {
              return null;
            }
          })}
        </section>
      </main>
    </StyledCafeDashboard>
  );
}
