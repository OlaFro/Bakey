import React, { useState, useContext, useEffect } from "react";
import { bakeyContext } from "../Context";
import Axios from "axios";
import Warning from "../components/Warning";
import {
  StyledButtonContainer,
  StyledCafeDashboard,
} from "../styledComponents/StyledCafeDashboard";
import { Settings } from "@styled-icons/feather/Settings";
import StyledHr from "../styledComponents/StyledHr";
import DashboardCafeActiveTab from "../components/DashboardCafeActiveTab";
import DashboardCafeArchiveTab from "../components/DashboardCafeArchiveTab";
import { StyledButton } from "../styledComponents/StyledButton";
import DashboardClientPickupTab from "../components/DashboardClientPickupTab";

export default function DashboardClient() {
  const { userName } = useContext(bakeyContext);

  const [listings, setListings] = useState([]);

  const [showWarning, setShowWarning] = useState(false);

  const [display, setDisplay] = useState("active");

  useEffect(() => {
    Axios({
      method: "GET",
      url: `users/orders`,
    })
      .then((res) => {
        console.log(res.data);
        if (res.data.orders.length) {
          setListings(res.data.orders);
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
            Open Orders
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
