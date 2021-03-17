import React, { useState, useContext, useEffect } from "react";
import { bakeyContext } from "../Context";
import Axios from "axios";
import Warning from "../components/Warning";
import {
  StyledButtonContainer,
  StyledCafeDashboard,
  StyledQuickLinks,
  StyledSelectContainer,
} from "../styledComponents/StyledCafeDashboard";
import { Settings } from "@styled-icons/feather/Settings";
import StyledHr from "../styledComponents/StyledHr";
import DashboardCafeActiveTab from "../components/DashboardCafeActiveTab";
import DashboardCafeArchiveTab from "../components/DashboardCafeArchiveTab";
import { StyledButton } from "../styledComponents/StyledButton";
import DashboardClientPickupTab from "../components/DashboardClientPickupTab";
import {
  StyledIcon,
  StyledPlusLink,
  StyledPlusLinkInfo,
} from "../styledComponents/StyledPlusLink";
import { Link } from "react-router-dom";
import {
  StyledArrow,
  StyledInputContainer,
  StyledLabel,
  StyledSelect,
} from "../styledComponents/StyledForm";

export default function DashboardClient() {
  const { userName, city, setCity, availableCities } = useContext(bakeyContext);

  const [listings, setListings] = useState([]);

  const [showWarning, setShowWarning] = useState(false);

  const [showSelect, setShowSelect] = useState(false);

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

  const toggleSelect = () => {
    setShowSelect((prevValue) => {
      return !prevValue;
    });
  };

  return (
    <StyledCafeDashboard>
      <header>
        <h2>Hello, {userName}! </h2>
      </header>
      <main>
        {showSelect ? (
          <StyledSelectContainer>
            <StyledInputContainer>
              <StyledSelect
                id="city"
                name="city"
                defaultValue={city}
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              >
                {availableCities.map((city) => {
                  return <option value={city}>{`${city}`}</option>;
                })}
              </StyledSelect>
              <StyledLabel htmlFor="city">Preferred city:</StyledLabel>
              <StyledArrow />
            </StyledInputContainer>
            <StyledButton onClick={toggleSelect}>Cancel</StyledButton>
            <StyledButton>Save</StyledButton>
          </StyledSelectContainer>
        ) : (
          <StyledQuickLinks>
            <StyledPlusLink client role="button" onClick={toggleSelect}>
              <StyledIcon settings>
                <Settings />
              </StyledIcon>
              <StyledPlusLinkInfo>change preferred city</StyledPlusLinkInfo>
            </StyledPlusLink>
          </StyledQuickLinks>
        )}

        <StyledHr dashboard />

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
