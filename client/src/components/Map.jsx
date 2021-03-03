import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
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
require("dotenv").config();

export default function Map() {
  const [mapInfo, setMapInfo] = useState([]);
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
        }
      })
      .catch((err) => {
        console.log(err);
        /*  setDbError(true); */
      });
  };

  const testUpdateObject = () => {
    cafes.map((cafe) => {
      setMapInfo([...mapInfo, { ...cafe, lat: "123", lng: "456" }]);
    });
  };
  /* const getMapInfo = (API_KEY) => {
    console.log(API_KEY);
    if (cafes) {
      cafes.map(async (cafe, i) => {
        //merserburger+str+19+04107+leipzig
        let address = [
          cafe.cafeStreet.split(" ").join("+"),
          cafe.cafeStreetNr,
          cafe.cafeZip,
          cafe.city,
        ];
        let parsedAddress = address.join("+");
        await Axios({
          method: "GET",
          url: `https://maps.googleapis.com/maps/api/geocode/json?address=${parsedAddress}+germany&key=${API_KEY}`,
        })
          .then((res) => {
            console.log(res);
            let location = res.data.results[0].geometry.location;
            if (location) {
              console.log(location.lat);
              console.log(location.lng);
            } else {
              console.log("no results");
            }
          })
          .catch((err) => {
            console.log(err, "it didnt connected");
          });
      });
    } else {
      getCities(city);
    }
  }; */

  useEffect(() => {
    getCities(city);
    testUpdateObject();
    /* getMapInfo(process.env.REACT_APP_GOOGLE_API_KEY); */
    /* console.log(process.env.REACT_APP_GOOGLE_API_KEY) */
  }, [city]);

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
              testUpdateObject();
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
    </StyledListView>
  );
}
