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
  StyledButtonContainer,
  StyledCafeDashboard,
  StyledQuickLinks,
} from "../styledComponents/StyledCafeDashboard";
import cafeProfileIcon from "../assets/cafe.svg";
import { Settings } from "@styled-icons/feather/Settings";
import StyledHr from "../styledComponents/StyledHr";
import DashboardCafeActiveTab from "./DashboardCafeActiveTab";
import DashboardCafeExpiredTab from "./DashboardCafeExpiredTab";
import DashboardCafePickupTab from "./DashboardCafePickupTab";
import DashboardCafeArchiveTab from "./DashboardCafeArchiveTab";
import { StyledButton } from "../styledComponents/StyledButton";
import DashboardClientPickupTab from "./DashboardClientPickupTab";

export default function DashboardClient() {
  const { userName, isLogged } = useContext(bakeyContext);

  const [listings, setListings] = useState([
    {
      _id: "60339e23ebc07c6a9dec75ca",
      id: "3",
      cafeId: "60338ba368603838c0e860d9",
      cafeName: "OCKA Cafe",
      listingName: "Super Chocolate Cake",
      listingTags: [""],
      listingAllergenes: ["cereal", "eggs", "dairy"],
      totalPieces: 15,
      availablePieces: 8,
      piecePrice: 3,
      listingPicture:
        "uploads/images/b18906b7-8152-496a-8da7-f8b307bec264.jpeg",
      pickUpDate: "2021-02-28T20:00:00Z",
      listingStatus: "sold",
    },
  ]);

  const [showWarning, setShowWarning] = useState(false);

  const [display, setDisplay] = useState("active");

  //   useEffect(() => {
  //     Axios({
  //       method: "GET",
  //       url: `listings/cafe`,
  //     })
  //       .then((res) => {
  //         console.log(res.data);
  //         if (res.data.length) {
  //           setListings(res.data);
  //         }
  //         if (!res.data) {
  //           setShowWarning(true);
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         setShowWarning(true);
  //       });
  //   }, []);

  const changeDisplay = (page) => {
    setDisplay(page);
  };

  return (
    <StyledCafeDashboard>
      <header>
        <h2>Hello, {userName}! </h2>
      </header>
      <main>
        {/* <StyledQuickLinks>
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
              <StyledIcon settings>
                <Settings />
              </StyledIcon>
              <StyledPlusLinkInfo>settings</StyledPlusLinkInfo>
            </Link>
          </StyledPlusLink>
        </StyledQuickLinks> */}

        {/* <StyledHr cafe dashboard /> */}

        <StyledButtonContainer>
          <StyledButton
            headerBtnClient={display === "active" ? true : false}
            onClick={() => {
              changeDisplay("active");
            }}
          >
            Open Offers
          </StyledButton>

          <StyledButton
            headerBtnClient={display === "pickup" ? true : false}
            onClick={() => {
              changeDisplay("pickup");
            }}
          >
            PickUps
          </StyledButton>
          <StyledButton
            headerBtnClient={display === "archive" ? true : false}
            onClick={() => {
              changeDisplay("archive");
            }}
          >
            Archive
          </StyledButton>
        </StyledButtonContainer>

        {showWarning ? <Warning msg="the service is out of order" /> : null}

        {display === "active" ? (
          <DashboardCafeActiveTab
            activeListings={listings.filter(
              (item) => item.listingStatus === "active"
            )}
            dashboardClient={true}
          />
        ) : null}

        {display === "pickup" ? (
          <DashboardClientPickupTab
            soldListings={listings.filter(
              (item) => item.listingStatus === "sold"
            )}
            setListings={setListings}
          />
        ) : null}

        {display === "archive" ? (
          <DashboardCafeArchiveTab
            inactiveListings={listings.filter(
              (item) => item.listingStatus === "inactive"
            )}
            dashboardClient={true}
          />
        ) : null}
      </main>
    </StyledCafeDashboard>
  );
}
