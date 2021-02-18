import React, { useState, useContext } from "react";
import { bakeyContext } from "../Context";
import { Link } from "react-router-dom";
import {
  StyledPlusLink,
  StyledPlusIcon,
  StyledPlusLinkInfo,
} from "../styledComponents/StyledPlusLink";

export default function DashboardUser() {
  const { userName } = useContext(bakeyContext);
  return (
    <div>
      <header>
        <h2>Hello {userName} 🥳</h2>
      </header>
      <main>
        <p>You successfully logged in as a cafe and this is your dashboard. </p>
        <StyledPlusLink>
          <StyledPlusIcon>
            <Link to="/listingform"></Link>
          </StyledPlusIcon>
          <StyledPlusLinkInfo>create a new offer</StyledPlusLinkInfo>
        </StyledPlusLink>
      </main>
    </div>
  );
}
