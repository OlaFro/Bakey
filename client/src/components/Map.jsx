import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
/* import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react"; */
import { bakeyContext } from "../Context";
import StyledMap from "../styledComponents/StyledMap";
import {
  StyledListView,
  StyledHeader,
} from "../styledComponents/StyledListView";
import {
  StyledLabel,
  StyledInputContainer,
  StyledSelect,
  StyledArrow,
} from "../styledComponents/StyledForm";
import { StyledTag } from "../styledComponents/StyledListing";
//import mapStyles from "./mapStyles" we can download a style from snazzy maps, copy the json and save it somewhere as mapStyles.js
require("dotenv").config();

export default function Map() {
  const [mapFlag, setMapFlag] = useState(false);
  const { cafes, setCafes } = useContext(bakeyContext);
  const [city, setCity] = useState("Leipzig");
  /* const [dbError, setDbError] = useState(false);
  const [emptyWarning, setEmptyWarning] = useState(false); */

  const getCities = (city) => {
    /*   setDbError(false);
    setEmptyWarning(false); */
    Axios({
      method: "POST",
      url: "/cafes",
      data: { city: city },
    })
      .then((res) => {
        if (res.data.length === 0) {
          /*  setEmptyWarning(true); */
        } else {
          setCafes(res.data);
          setMapFlag((prevValue) => {
            return !prevValue;
          });
        }
      })
      .catch((err) => {
        console.log(err);
        /*  setDbError(true); */
      });
  };
  const getMapInfo = (API_KEY) => {
    cafes.map((cafe, i) => {
      let address = [
        cafe.cafeStreet.split(" ").join("+"),
        cafe.cafeStreetNr,
        cafe.cafeZip,
        cafe.city,
      ];
      let parsedAddress = address.join("+");
      Axios({
        method: "GET",
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${parsedAddress}+germany&key=${API_KEY}`,
      })
        .then((res) => {
          let location = res.data.results[0].geometry.location;
          console.log(location);
          if (location) {
            if (i === cafes.length - 1) {
              return setCafes(() => {
                cafes[i] = {
                  ...cafe,
                  lat: location.lat,
                  lng: location.lng,
                };
                return cafes;
              });
            } else {
              return setCafes(() => {
                cafes[i] = {
                  ...cafe,
                  lat: location.lat,
                  lng: location.lng,
                };
                return cafes;
              });
            }
          } else {
            console.log("no results");
          }
        })
        .catch((err) => {
          console.log(err, "it didnt connected");
        });
    });
  };

  useEffect(
    () => {
      getCities(city);
    },
    [
      //do not put city here or the requests will be called twice after selecting a new city
    ]
  );

  useEffect(() => {
    getMapInfo(process.env.REACT_APP_GOOGLE_API_KEY);
  }, [mapFlag]);

  //creting the hook for the BakeyMap:

  function BakeyMap() {
    const [selectedCafe, setSelectedCafe] = useState(null);
    return (
      <GoogleMap
        defaultZoom={13}
        defaultCenter={{ lat: 51.33688, lng: 12.36743 }}
        //defaultOptions={{styles: mapStyles}}
      >
        {cafes.map((cafe) => {
          if (cafe.profilePic) {
            console.log(cafe.profilePic);
            return <Marker
                key={cafe._id}
                position={{ lat: cafe.lat, lng: cafe.lng }}
                onClick={() => setSelectedCafe(cafe)}
                icon={{
                  url: "uploads/images/930e456d-8ba8-490a-a13d-195a523431d1.png",
                  anchor: new window.google.maps.Point(32,32),
                  scaledSize: new window.google.maps.Size(64, 64),
                }}
              />
            ;
          } /* else {
            return  <Marker
                key={cafe._id}
                position={{ lat: cafe.lat, lng: cafe.lng }}
                onClick={() => setSelectedCafe(cafe)}
              /> 
            ;
          } */
        })}

        {selectedCafe && (
          <InfoWindow
            position={{ lat: selectedCafe.lat, lng: selectedCafe.lng }}
            onCloseClick={() => {
              setSelectedCafe(null);
            }}
          >
            <div>details of {selectedCafe.cafeName}</div>
          </InfoWindow>
        )}
      </GoogleMap>
    );
  }
  const WrappedMap = withScriptjs(withGoogleMap(BakeyMap));

  return (
    <StyledListView>
      <StyledHeader>
        <StyledInputContainer>
          <StyledSelect
            id="city"
            name="city"
            onChange={(e) => {
              setCity(e.target.value);
              getCities(e.target.value);
            }}
          >
            <option value="Leipzig">Leipzig</option>
            <option value="Hamburg">Hamburg</option>
            <option value="Düsseldorf">Düsseldorf</option>
          </StyledSelect>
          <StyledLabel htmlFor="city">See offers from:</StyledLabel>
          <StyledArrow />
        </StyledInputContainer>

        <h2>Cafes in {city} with active campaigns:</h2>
        <div className="filtering">
          <p>Show only cafes that offer something:</p>
          <div className="tag-container">
            <div>
              <StyledTag no lactose title="lactose free">
                L
              </StyledTag>
              <p>lactose-free</p>
            </div>
            <div>
              <StyledTag no gluten title="gluten free">
                G
              </StyledTag>
              <p>gluten-free</p>
            </div>
            <div>
              <StyledTag no sugar title="sugar free">
                S
              </StyledTag>
              <p>sugar-free</p>
            </div>
            <div>
              <StyledTag wheat title="wheat free">
                W
              </StyledTag>
              <p>wheat-free</p>
            </div>
            <div>
              <StyledTag vegan title="vegan">
                V
              </StyledTag>
              <p>vegan</p>
            </div>
            <div>
              <StyledTag organic title="organic">
                O
              </StyledTag>
              <p>organic</p>
            </div>
          </div>
        </div>
      </StyledHeader>
      <StyledMap>
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_API_KEY}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `500px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </StyledMap>
    </StyledListView>
  );
}
