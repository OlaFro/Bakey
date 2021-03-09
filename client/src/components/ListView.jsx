import React, { useContext, useState, useEffect } from "react";
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

export default function ListView() {
  const context = useContext(bakeyContext);
  const [city, setCity] = useState("Leipzig");
  const { cafes, setCafes } = useContext(bakeyContext);
  const [filteredCafes, setFilteredCafes] = useState([]);
  const [filter, setFilter] = useState([]);
  const [dbError, setDbError] = useState(false);
  const [emptyWarning, setEmptyWarning] = useState(false);

  console.log(context);

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

  useEffect(() => {
    setCity(context.city);
  }, [context.city]);

  return (
    <StyledListView>
      <StyledHeader>
        <StyledInputContainer>
          <StyledSelect
            id="city"
            name="city"
            defaultValue={city || "Leipzig"}
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
