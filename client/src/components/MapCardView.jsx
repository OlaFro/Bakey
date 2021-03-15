import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import StyledMap from "../styledComponents/StyledMap";

export default function MapCardView(props) {
  const location = props.cafeLocation;

  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  const center = {
    lat: location.lat,
    lng: location.lng,
  };

  return (
    <StyledMap>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
          <Marker position={{ lat: location.lat, lng: location.lng }} />
        </GoogleMap>
      </LoadScript>
    </StyledMap>
  );
}
