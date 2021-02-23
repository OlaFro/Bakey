import React, { useState } from "react";
import { StyledCafeCard } from "../styledComponents/StyledCafeCard";
import {
  StyledTag,
  StyledTagContainer,
} from "../styledComponents/StyledListing";

export default function ListViewCafe(props) {
  return (
    <StyledCafeCard>
      <header>
        <figure>
          <img></img>
        </figure>
        <div>
          <h2>Cafe Name</h2>
          <p>address address</p>
        </div>
      </header>
      <main>
        <h3>Running Campaignes</h3>
        <div>
          <span>Cheesecake</span>
          <div>
            <StyledTag organic title="organic">
              O
            </StyledTag>
          </div>
          <div>progress bar</div>
        </div>
      </main>
    </StyledCafeCard>
  );
}
