import React, { useState, useContext } from "react";
import { bakeyContext } from "../Context";
import Listing from "./Listing";
import Warning from "./Warning";

export default function DashboardCafeArchiveTab(props) {
  const { inactiveListings, setListings } = props;

  const { cafeName } = useContext(bakeyContext);

  const [showWarning, setShowWarning] = useState(false);

  const [warningContent, setWarningContent] = useState(
    "the service is out of order"
  );

  return (
    <section className="offers-wrapper">
      {inactiveListings.map((listing, index) => {
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
            archive={true}
            setListings={setListings}
            setShowWarning={setShowWarning}
            setWarningContent={setWarningContent}
            key={`listing-${index}`}
          />
        );
      })}
      {showWarning ? <Warning msg={warningContent} /> : null}
    </section>
  );
}
