import React from "react";
import { useHistory } from "react-router-dom";
import {
  StyledCafeCard,
  StyledListing,
  StyledIcon,
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

  const getPercentage = (listing) => {
    let dividend = listing.totalPieces - listing.availablePieces;
    let quotien = dividend / listing.totalPieces;
    let result = (100 * quotien).toFixed(0) * 1;
    return result;
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
            <StyledIcon />
          )}
        </figure>
        <div>
          <h2>{cafe.cafeName}</h2>
          <span>
            {cafe.cafeStreet} {cafe.cafeStreetNr}, {cafe.cafeZip} {cafe.city}
          </span>
        </div>
      </header>
      <main>
        <h3>Running campaigns:</h3>
        {cafe.cafeListings.map((listing, index) => {
          return (
            <StyledListing key={`listing-${index}`}>
              <div className="name-tags">
                <span>{listing.listingName}</span>
                <div>{tags(listing)}</div>
              </div>

              <div className="progressBar">
                {/* documentation for the counter: https://www.npmjs.com/package/@ramonak/react-progress-bar */}
                <ProgressBar
                  completed={getPercentage(listing)}
                  bgcolor={colors.accent1}
                  isLabelVisible={getPercentage(listing) === 0 || getPercentage(listing) >= 30 ? true : false}
                />
              </div>
            </StyledListing>
          );
        })}
      </main>
    </StyledCafeCard>
  );
}
