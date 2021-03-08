import React from "react";


import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";
import StyledMap from "../styledComponents/StyledMap";


export default function MapCardView(props) {

  const location = props.cafeLocation;
  console.log("this is the location data: ", location)

  function CafeMap() {
   return <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: location.lat, lng: location.lng }}
    >
      <Marker position={{ lat: location.lat, lng: location.lng}} />
    </GoogleMap>;
  }

  const WrappedCafeMap = withScriptjs(withGoogleMap(CafeMap));

  return (
    <StyledMap>
      <WrappedCafeMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_API_KEY}`}
        loadingElement={<div style={{width: `100%`, height: `100%` }} />}
        containerElement={<div style={{width: `100%`, height: `100%` }} />}
        mapElement={<div style={{width: `100%`, height: `100%` }} />}
      />
    </StyledMap>
  );
}
