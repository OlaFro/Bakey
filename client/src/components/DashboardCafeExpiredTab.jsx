import React, { useContext, useState } from "react";
import { bakeyContext } from "../Context";
import Listing from "./Listing";
import Warning from "./Warning";

export default function DashboardCafeExpiredTab(props) {
  const { expiredListings, setListings } = props;

  const { cafeName } = useContext(bakeyContext);

  const [showWarning, setShowWarning] = useState(false);

  const [warningContent, setWarningContent] = useState(
    "the service is out of order"
  );

  return (
    <section className="offers-wrapper">
      {expiredListings.map((listing, index) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const pickUpTime = new Date(listing.pickUpDate);
        pickUpTime.setHours(0, 0, 0, 0);
        if (
          listing.listingStatus === "active" &&
          today.getTime() >= pickUpTime.getTime()
        ) {
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
              key={`listing-${index}`}
              dashboard={true}
              expired={true}
              setShowWarning={setShowWarning}
              setWarningContent={setWarningContent}
              setListings={setListings}
            />
          );
        } else {
          return null;
        }
      })}
      {showWarning ? <Warning msg={warningContent} /> : null}
    </section>
  );
}
