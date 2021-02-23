import React, { useState } from "react";
import {
  StyledCafeCard,
  StyledListing,
} from "../styledComponents/StyledCafeCard";
import { StyledTag } from "../styledComponents/StyledListing";

import colors from "../styledComponents/colors";
import ProgressBar from "@ramonak/react-progress-bar";

export default function ListViewCafe(props) {
  return (
    <StyledCafeCard>
      <header>
        <figure>
          <img
            src="https://i.pinimg.com/originals/1f/c3/ff/1fc3ff4791f292d4ec65893a2087825c.png"
            alt="our logo"
          ></img>
        </figure>
        <div>
          <h3>Cafe Ocka</h3>
          <span>Merseburgerstr. 88, 04177 Leipzig</span>
        </div>
      </header>
      <main>
        <h3>Running campaignes:</h3>
        <StyledListing>
          <span>Cheesecake</span>
          <div className="tag-container">
            <StyledTag no lactose title="lactose free">
              L
            </StyledTag>
            <StyledTag no gluten title="gluten free">
              G
            </StyledTag>
            <StyledTag no sugar title="sugar free">
              S
            </StyledTag>
            <StyledTag vegan title="vegan">
              V
            </StyledTag>
            <StyledTag organic title="organic">
              O
            </StyledTag>
            <StyledTag no lactose title="lactose free">
              L
            </StyledTag>
          </div>

          <div className="progressBar">
            {/* documentation for the counter: https://www.npmjs.com/package/@ramonak/react-progress-bar */}
            <ProgressBar
              completed={60}
              bgcolor={colors.accent1}
              isLabelVisible={false}
            />
          </div>
        </StyledListing>
        <StyledListing>
          <span>Cheesecake with a long title </span>
          <div className="tag-container">
            <StyledTag no lactose title="lactose free">
              L
            </StyledTag>
            <StyledTag no gluten title="gluten free">
              G
            </StyledTag>
            <StyledTag no sugar title="sugar free">
              S
            </StyledTag>
          </div>

          <div className="progressBar">
            {/* documentation for the counter: https://www.npmjs.com/package/@ramonak/react-progress-bar */}
            <ProgressBar
              completed={20}
              bgcolor={colors.accent1}
              isLabelVisible={false}
            />
          </div>
        </StyledListing>
      </main>
    </StyledCafeCard>
  );
}
