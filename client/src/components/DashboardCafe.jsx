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

export default function DashboardUser() {
  const { userName } = useContext(bakeyContext);

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
        </section>
        <section>
          <h3>Your pick-ups:</h3>
        </section>
      </main>
    </StyledCafeDashboard>
  );
}
