import React, { useContext } from "react";
import { bakeyContext } from "../Context";
import Listing from "./Listing";

export default function DashboardCafeActiveTab(props) {
  const { activeListings } = props;

  const { cafeName } = useContext(bakeyContext);

  return (
    <section className="offers-wrapper">
      {activeListings.map((listing, index) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const pickUpTime = new Date(listing.pickUpDate);
        pickUpTime.setHours(0, 0, 0, 0);
        if (props.dashboardClient) {
          return (
            <Listing
              cafeName={listing.cafeName}
              cafeId={listing.cafeId}
              withLink={true}
              title={listing.listingName}
              totalPieces={listing.totalPieces}
              availablePieces={listing.availablePieces}
              pickUpDate={listing.pickUpDate}
              piecePrice={listing.piecePrice}
              listingAllergenes={listing.listingAllergenes}
              listingTags={listing.listingTags}
              image={listing.listingPicture}
              key={`listing-${index}`}
              id={listing._id}
              dashboard={true}
              expiredClient={today.getTime() >= pickUpTime.getTime()}
            />
          );
        } else {
          if (
            listing.listingStatus === "active" &&
            today.getTime() < pickUpTime.getTime()
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
                key={`listing-${index}`}
                id={listing._id}
                dashboard={true}
              />
            );
          } else {
            return null;
          }
        }
      })}
    </section>
  );
}
