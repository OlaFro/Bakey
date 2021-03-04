import React, { useState, useContext, useEffect } from "react";
import { bakeyContext } from "../Context";
import { Link } from "react-router-dom";
import Axios from "axios";
import Warning from "./Warning";
import {
  StyledPlusLink,
  StyledPlusLinkInfo,
  StyledIcon,
  StyledPlusIcon,
} from "../styledComponents/StyledPlusLink";
import {
  StyledCafeDashboard,
  StyledQuickLinks,
} from "../styledComponents/StyledCafeDashboard";
import Listing from "./Listing";
import PickUpCard from "./PickUpCard";
import cafeProfileIcon from "../assets/cafe.svg";
import { Settings } from "@styled-icons/feather/Settings";
import StyledHr from "../styledComponents/StyledHr";
import DashboardCafeActiveTab from "./DashboardCafeActiveTab";
import DashboardCafeExpiredTab from "./DashboardCafeExpiredTab";

export default function DashboardUser() {
  const { userName, cafeName, isLogged } = useContext(bakeyContext);

  const [listings, setListings] = useState([]);

  const [showWarning, setShowWarning] = useState(false);

  const [emptyListings, setEmptyListings] = useState(false);

  const [display, setDisplay] = useState("active");

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
        <StyledQuickLinks>
          <StyledPlusLink>
            <Link to="/listingform">
              <StyledPlusIcon></StyledPlusIcon>
              <StyledPlusLinkInfo>create new offer</StyledPlusLinkInfo>
            </Link>
          </StyledPlusLink>
          <StyledPlusLink>
            <Link to={`/cafe:${isLogged.id}`}>
              <StyledIcon profile>
                <img
                  src={cafeProfileIcon}
                  alt="icon of the cafe in the circle"
                />
              </StyledIcon>
              <StyledPlusLinkInfo>café profile</StyledPlusLinkInfo>
            </Link>
          </StyledPlusLink>
          <StyledPlusLink>
            <Link to="/settings">
              <StyledIcon notPlus>
                <Settings />
              </StyledIcon>
              <StyledPlusLinkInfo>settings</StyledPlusLinkInfo>
            </Link>
          </StyledPlusLink>
        </StyledQuickLinks>

        <StyledHr cafe />

        {showWarning ? <Warning msg="the service is out of order" /> : null}

        <section>
          <h3>Your current offers:</h3>
          <h4>Active:</h4>
          <DashboardCafeActiveTab activeListings={listings} />
          <h4>Expired:</h4>
          <DashboardCafeExpiredTab />
        </section>
        <section>
          <h3>Your pick-ups:</h3>
          {listings.map((listing) => {
            if (listing.listingStatus === "sold") {
              return (
                <PickUpCard
                  title={listing.listingName}
                  id={listing.id}
                  buyers={listing.buyers}
                  boughtPieces={listing.boughtPieces}
                  pickUpDate={listing.pickUpDate}
                />
              );
            } else {
              return null;
            }
          })}
        </section>
      </main>
    </StyledCafeDashboard>
  );
}
