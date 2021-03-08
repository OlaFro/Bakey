import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { bakeyContext } from "../Context";
import {
  StyledListView,
  StyledHeader,
} from "../styledComponents/StyledListView";
import Axios from "axios";
import {
  StyledLabel,
  StyledInputContainer,
  StyledSelect,
  StyledArrow,
} from "../styledComponents/StyledForm";
import { StyledTag } from "../styledComponents/StyledListing";
import Warning from "./Warning";
import CafeCard from "./CafeCard";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import StyledMap from "../styledComponents/StyledMap";
import cafeMarker from "../assets/cafe.svg"

export default function ListView() {
  const [city, setCity] = useState("Leipzig");
  //to center the map in the right city
  const [cityCoor, setCityCoor] = useState({});
  const [mapFlag, setMapFlag] = useState(false);
  const { cafes, setCafes } = useContext(bakeyContext);
  const [filteredCafes, setFilteredCafes] = useState([]);
  const [filter, setFilter] = useState([]);
  const [dbError, setDbError] = useState(false);
  const [emptyWarning, setEmptyWarning] = useState(false);

  let history = useHistory();

  const getCities = (city) => {
    setDbError(false);
    setEmptyWarning(false);
    Axios({
      method: "POST",
      url: "/cafes",
      data: { city: city },
    })
      .then((res) => {
        if (res.data.length === 0) {
          setEmptyWarning(true);
        } else {
          setCafes(res.data);
          setMapFlag((prevValue) => {
            return !prevValue;
          });
        }
      })
      .catch((err) => {
        console.log(err);
        setDbError(true);
      });
  };

  useEffect(() => {
    getCities(city);
  }, []);

  const getCityCoordinates = (API_KEY) => {
    Axios({
      method: "GET",
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${city}+germany&key=${API_KEY}`,
    })
      .then((res) => {
        let cityCoordinates = res.data.results[0].geometry.location;
        console.log(cityCoordinates);
        setCityCoor(cityCoordinates);
      })
      .catch((err) => {
        console.log("no results from GM");
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

  useEffect(() => {
    getMapInfo(process.env.REACT_APP_GOOGLE_API_KEY);
    getCityCoordinates(process.env.REACT_APP_GOOGLE_API_KEY);
  }, [mapFlag]);

  const center = {
    lat: cityCoor.lat,
    lng: cityCoor.lng
  }

  //necessary for the map

  const containerStyle = {
    width: "100%",
    height: "100%"
  }
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

        {/* Ola: I changed {city.city} to {city} because the first one was displaying nothing */}
        <h2>Cafes in {city} with active campaigns:</h2>
        <div className="filtering">
          <p>Show only cafes that offer something:</p>
          <div className="tag-container">
            <label>
              <input type="checkbox" />
              <div>
                <StyledTag no lactose title="lactose free">
                  L
                </StyledTag>
                <p>lactose-free</p>
              </div>
            </label>
            <label>
              <input type="checkbox" />
              <div>
                <StyledTag no gluten title="gluten free">
                  G
                </StyledTag>
                <p>gluten-free</p>
              </div>
            </label>
            <label>
              <input type="checkbox" />
              <div>
                <StyledTag no sugar title="sugar free">
                  S
                </StyledTag>
                <p>sugar-free</p>
              </div>
            </label>
            <label>
              <input type="checkbox" />
              <div>
                <StyledTag wheat title="wheat free">
                  W
                </StyledTag>
                <p>wheat-free</p>
              </div>
            </label>
            <label>
              <input type="checkbox" />
              <div>
                <StyledTag vegan title="vegan">
                  V
                </StyledTag>
                <p>vegan</p>
              </div>
            </label>
            <label>
              <input type="checkbox" />
              <div>
                <StyledTag organic title="organic">
                  O
                </StyledTag>
                <p>organic</p>
              </div>
            </label>
          </div>
        </div>
      </StyledHeader>
      <StyledMap>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
          {cafes.map((cafe) => {
            let icon = {url: cafeMarker,
              scaledSize: new window.google.maps.Size(30, 30)}
           return <Marker 
            key={cafe._id}
            icon={icon}
            title={cafe.cafeName}
            position={{ lat: cafe.lat, lng: cafe.lng }} 
            onClick={() => history.push(`/cafe:${cafe._id}`)}/>
          })}
         
        </GoogleMap>
      </LoadScript>
      </StyledMap>
      {dbError === true ? <Warning msg="the server is out of service" /> : null}
      {emptyWarning === true ? (
        <Warning msg="there are no offers available for this city" />
      ) : null}

      {emptyWarning === false
        ? cafes.map((cafe, index) => {
            return <CafeCard key={index} cafe={cafe} />;
          })
           : null}
    </StyledListView>
  );
}
