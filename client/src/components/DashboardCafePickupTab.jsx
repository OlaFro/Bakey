import React, { useState } from "react";
import PickUpCard from "./PickUpCard";
import Warning from "./Warning";

export default function DashboardCafePickupTab(props) {
  const { soldListings, setListings } = props;

  const [showWarning, setShowWarning] = useState(false);

  return (
    <section>
      {soldListings.map((listing, index) => {
        return (
          <PickUpCard
            title={listing.listingName}
            id={listing.id}
            buyers={listing.buyers}
            boughtPieces={listing.boughtPieces}
            pickUpDate={listing.pickUpDate}
            setListings={setListings}
            setShowWarning={setShowWarning}
            key={`pickup-${index}`}
          />
        );
      })}
      {showWarning ? <Warning msg="the service is out of order" /> : null}
    </section>
  );
}
