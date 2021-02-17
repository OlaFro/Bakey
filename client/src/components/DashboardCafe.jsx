import React, { useState, useContext } from "react";
import { bakeyContext } from "../Context";
import { Link } from "react-router-dom";
import StyledLink from "../styledComponents/StyledLink";

export default function DashboardUser() {
  const { userName } = useContext(bakeyContext);
  return (
    <div>
      <header>
        <h2>Hello {userName} 🥳</h2>
      </header>
      <main>
        <p>You successfully logged in as a cafe and this is your dashboard. </p>
        <StyledLink>
          <Link to="/listingform">Add Listing</Link>
        </StyledLink>
      </main>
    </div>
  );
}
