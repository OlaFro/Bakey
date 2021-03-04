import React from "react";
import PickUpCard from "./PickUpCard";

export default function DashboardCafePickupTab(props) {
  const { soldListings } = props;
  return (
    <section>
      {soldListings.map((listing) => {
        return (
          <PickUpCard
            title={listing.listingName}
            id={listing.id}
            buyers={listing.buyers}
            boughtPieces={listing.boughtPieces}
            pickUpDate={listing.pickUpDate}
          />
        );
      })}
    </section>
  );
}
