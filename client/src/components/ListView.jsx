import React, { useContext, useState, useEffect } from "react";
import { bakeyContext } from "../Context";
import { StyledListView } from "../styledComponents/StyledListView";
import Axios from "axios";
import {
  StyledLabel,
  StyledInputContainer,
  StyledSelect,
  StyledArrow,
} from "../styledComponents/StyledForm";
import {
  StyledTag,
  StyledTagContainer,
} from "../styledComponents/StyledListing";
import Warning from "./Warning";
import CafeCard from "./CafeCard";

export default function ListView() {
  const [city, setCity] = useState("Leipzig");
  const { cafes, setCafes } = useContext(bakeyContext);
  const [dbError, setDbError] = useState(false);
  const [emptyWarning, setEmptyWarning] = useState(false);

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

  return (
    <div>
      <StyledListView>
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
        <div>
          <h3>Cafes in {city.city} with active campaigns:</h3>
          <p>Show only cafes that offer something:</p>
          <StyledTagContainer listview>
            <div>
              <StyledTag no lactose title="lactose free">
                L
              </StyledTag>
              <p>Lactose free</p>
            </div>
            <div>
              <StyledTag no gluten title="gluten free">
                G
              </StyledTag>
              <p>Gluten Free</p>
            </div>
            <div>
              <StyledTag no sugar title="sugar free">
                S
              </StyledTag>
              <p>Sugar Free</p>
            </div>
            <div>
              <StyledTag vegan title="vegan">
                V
              </StyledTag>
              <p>Vegan</p>
            </div>
            <div>
              <StyledTag organic title="organic">
                O
              </StyledTag>
              <p>Organic</p>
            </div>
            <div>
              <StyledTag wheat title="wheat free">
                W
              </StyledTag>
              <p>Wheat Free</p>
            </div>
          </StyledTagContainer>
        </div>
        {dbError === true ? (
          <Warning msg="the server is out of service" />
        ) : null}
        {emptyWarning === true ? (
          <Warning msg="there are no offers available for this city" />
        ) : null}
        {emptyWarning === false
          ? cafes.map((cafe, index) => {
              return <CafeCard key={index} />;
            })
          : null}
      </StyledListView>
    </div>
  );
}
