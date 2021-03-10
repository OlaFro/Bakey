import React, { useState, useContext } from "react";
import { bakeyContext } from "../Context";
import Listing from "./Listing";
import Warning from "./Warning";

export default function DashboardClientPickupTab(props) {
  const { soldListings } = props;

  const [showWarning, setShowWarning] = useState(false);

  const [warningContent, setWarningContent] = useState(
    "the service is out of order"
  );

  return (
    <section className="offers-wrapper">
      {soldListings.map((listing, index) => {
        return (
          <Listing
            cafeName={listing.cafeName}
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
            setShowWarning={setShowWarning}
            setWarningContent={setWarningContent}
            cafeId={props.dashboardClient ? null : listing.cafeId}
            withLink={props.dashboardClient}
            key={`listing-${index}`}
            soldClient={true}
          />
        );
      })}
      {showWarning ? <Warning msg={warningContent} /> : null}
    </section>
  );
}
