import React, { useState, useContext } from "react";
import { bakeyContext } from "../Context";
import { Link } from "react-router-dom";
import {
  StyledPlusLink,
  StyledPlusIcon,
  StyledPlusLinkInfo,
} from "../styledComponents/StyledPlusLink";
import StyledCentered from "../styledComponents/StyledCentered";
import StyledCafeDashboard from "../styledComponents/StyledCafeDashboard";

export default function DashboardUser() {
  const { userName } = useContext(bakeyContext);
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
