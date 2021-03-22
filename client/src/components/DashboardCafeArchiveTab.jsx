import React, { useState } from "react";
import Listing from "./Listing";
import Warning from "./Warning";

export default function DashboardCafeArchiveTab(props) {
  const { inactiveListings, setListings } = props;

  const [showWarning, setShowWarning] = useState(false);

  const [warningContent, setWarningContent] = useState(
    "the service is out of order"
  );

  return (
    <section className="offers-wrapper">
      {inactiveListings.map((listing, index) => {
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
            expired={props.dashboardClient ? false : true}
            archive={props.dashboardClient ? false : true}
            setListings={setListings}
            setShowWarning={setShowWarning}
            setWarningContent={setWarningContent}
            cafeId={props.dashboardClient ? null : listing.cafeId}
            withLink={props.dashboardClient}
            key={`listing-${index}`}
          />
        );
      })}
      {showWarning ? <Warning msg={warningContent} /> : null}
    </section>
  );
}
