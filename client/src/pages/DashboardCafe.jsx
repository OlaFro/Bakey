import React, { useState, useContext, useEffect } from "react";
import { bakeyContext } from "../Context";
import { Link } from "react-router-dom";
import Axios from "axios";
import Warning from "../components/Warning";
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
import DashboardCafeActiveTab from "../components/DashboardCafeActiveTab";
import DashboardCafeExpiredTab from "../components/DashboardCafeExpiredTab";
import DashboardCafePickupTab from "../components/DashboardCafePickupTab";
import DashboardCafeArchiveTab from "../components/DashboardCafeArchiveTab";
import { StyledButton } from "../styledComponents/StyledButton";

export default function DashboardCafe() {
  const { userName, isLogged } = useContext(bakeyContext);

  const [listings, setListings] = useState([]);

  const [showWarning, setShowWarning] = useState(false);

  const [display, setDisplay] = useState("active");

  useEffect(() => {
    sessionStorage.setItem("page", "dashboard-cafe");
    Axios({
      method: "GET",
      url: `listings/cafe`,
    })
      .then((res) => {
        console.log(res.data);
        if (res.data.length) {
          setListings(res.data);
        }
        if (!res.data) {
          setShowWarning(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setShowWarning(true);
      });
  }, []);

  const changeDisplay = (page) => {
    setDisplay(page);
  };

  return (
    <StyledCafeDashboard>
      <header>
        <h2>Hello, {userName}! </h2>
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
              <StyledIcon settings>
                <Settings />
              </StyledIcon>
              <StyledPlusLinkInfo>settings</StyledPlusLinkInfo>
            </Link>
          </StyledPlusLink>
        </StyledQuickLinks>

        <StyledHr cafe dashboard />

        <StyledButtonContainer>
          <StyledButton
            cafe
            headerBtn={display === "active" ? true : false}
            onClick={() => {
              changeDisplay("active");
            }}
          >
            Active Offers
          </StyledButton>

          <StyledButton
            cafe
            headerBtn={display === "pickup" ? true : false}
            onClick={() => {
              changeDisplay("pickup");
            }}
          >
            PickUps
          </StyledButton>
          <StyledButton
            cafe
            headerBtn={display === "expired" ? true : false}
            onClick={() => {
              changeDisplay("expired");
            }}
          >
            Expired Offers
          </StyledButton>
          <StyledButton
            cafe
            headerBtn={display === "archive" ? true : false}
            onClick={() => {
              changeDisplay("archive");
            }}
          >
            Archive
          </StyledButton>
        </StyledButtonContainer>

        {showWarning ? <Warning msg="the service is out of order" /> : null}

        {display === "active" ? (
          <DashboardCafeActiveTab activeListings={listings} />
        ) : null}

        {display === "expired" ? (
          <DashboardCafeExpiredTab
            expiredListings={listings}
            setListings={setListings}
          />
        ) : null}

        {display === "pickup" ? (
          <DashboardCafePickupTab
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
            setListings={setListings}
          />
        ) : null}
      </main>
    </StyledCafeDashboard>
  );
}
