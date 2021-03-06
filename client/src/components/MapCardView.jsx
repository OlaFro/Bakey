import React, { useState, useEffect } from "react";
import Axios from "axios";

import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";
import StyledMap from "../styledComponents/StyledMap";
import cafeMarker from "../assets/cafe.svg";


export default function MapCardView(props) {
  const { cafe } = props;

 
  /* useEffect(() => {
    console.log(props);
    getMapInfo(process.env.REACT_APP_GOOGLE_API_KEY);
  }, []);

  const getMapInfo = (API_KEY) => {
    let address = [
      cafeInfo.cafeStreet.split(" ").join("+"),
      cafeInfo.cafeStreetNr,
      cafeInfo.cafeZip,
      cafeInfo.city,
    ];
    let parsedAddress = address.join("+");
    Axios({
      method: "GET",
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${parsedAddress}+germany&key=${API_KEY}`,
    })
      .then((res) => {
        let location = res.data.results[0].geometry.location;
        console.log(location);
        setCafeInfo(() => {
          cafeInfo = {
            ...cafeInfo,
            lat: location.lat,
            lng: location.lng,
          };
          return cafeInfo;
        });
      })
      .catch((err) => {
        console.log(err, "it didnt connected");
      });
  };
*/
  function CafeMap() {
    return (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{lat: 54.32, lng: 12.654}}
        //defaultOptions={{styles: mapStyles}}
      >
        <Marker
              key="1"
              title="lalaal"
              position={{ lat: 54.32, lng: 12.654}}
             />
      </GoogleMap>
    );
  }
  const WrappedMap = withScriptjs(withGoogleMap(CafeMap));

  return (
    <StyledMap>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_API_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `500px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </StyledMap>
  );
}
