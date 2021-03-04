import React, { useContext } from "react";
import { bakeyContext } from "../Context";
import Listing from "./Listing";

export default function DashboardCafeArchiveTab(props) {
  const { inactiveListings } = props;

  const { cafeName } = useContext(bakeyContext);

  return (
    <section className="offers-wrapper">
      {inactiveListings.map((listing) => {
        return (
          <Listing
            cafeName={cafeName}
            title={listing.listingName}
            totalPieces={listing.totalPieces}
            availablePieces={listing.availablePieces}
            pickUpDate={listing.pickUpDate}
            piecePrice={listing.piecePrice}
            listingAllergenes={listing.listingAllergenes}
            listingTags={listing.listingTags}
            image={listing.listingPicture}
            id={listing._id}
            dashboard={true}
            expired={true}
          />
        );
      })}
    </section>
  );
}
