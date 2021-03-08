import React, { useState } from "react";
import PickUpCard from "./PickUpCard";
import Warning from "./Warning";

export default function DashboardCafePickupTab(props) {
  const { soldListings, setListings } = props;

  const [showWarning, setShowWarning] = useState(false);

  const [warningContent, setWarningContent] = useState(
    "the service is out of order"
  );

  return (
    <section>
      {soldListings.map((listing, index) => {
        return (
          <PickUpCard
            title={listing.listingName}
            id={listing.id}
            dbID={listing._id}
            buyers={listing.buyers}
            boughtPieces={listing.boughtPieces}
            totalPieces={listing.totalPieces}
            pickUpDate={listing.pickUpDate}
            setListings={setListings}
            setShowWarning={setShowWarning}
            setWarningContent={setWarningContent}
            key={`pickup-${index}`}
          />
        );
      })}
      {showWarning ? <Warning msg={warningContent} /> : null}
    </section>
  );
}
