import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  StyledCafeCard,
  StyledListing,
} from "../styledComponents/StyledCafeCard";

import colors from "../styledComponents/colors";
import ProgressBar from "@ramonak/react-progress-bar";
import Tag from "./Tag";

export default function ListViewCafe(props) {
  const { cafe } = props;

  let history = useHistory();

  const tags = (listing) => {
    if (listing.listingTags) {
      return <Tag key={listing.listingTags} data={listing.listingTags} />;
    }
  };
  return (
    <StyledCafeCard
      onClick={() => {
        history.push(`/cafe:${cafe._id}`);
      }}
    >
      <header>
        <figure>
          {cafe.profilePic ? (
            <img src={cafe.profilePic} alt={`logo of the ${cafe.cafeName}`} />
          ) : (
            "logo"
          )}
        </figure>
        <div>
          <h3>{cafe.cafeName}</h3>
          <span>
            {cafe.cafeStreet} {cafe.cafeStreetNr}, {cafe.cafeZip} {cafe.city}
          </span>
        </div>
      </header>
      <main>
        <h3>Running campaignes:</h3>
        {cafe.cafeListings.map((listing, index) => {
          return (
            <StyledListing key={`listing-${index}`}>
              <span>{listing.listingName}</span>
              <div className="tag-container">{tags(listing)}</div>

              <div className="progressBar">
                {/* documentation for the counter: https://www.npmjs.com/package/@ramonak/react-progress-bar */}
                <ProgressBar
                  completed={
                    ((listing.totalPieces - listing.availablePieces) /
                      listing.totalPieces) *
                    100
                  }
                  bgcolor={colors.accent1}
                  isLabelVisible={false}
                />
              </div>
            </StyledListing>
          );
        })}
      </main>
    </StyledCafeCard>
  );
}
