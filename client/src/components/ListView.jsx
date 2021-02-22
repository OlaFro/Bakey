import React, { useContext, useState} from "react";
import { bakeyContext } from "../Context";
import { StyledListView } from "../styledComponents/StyledListView";
import Axios from "axios";
import ListViewCafe from "./ListViewCafe";
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

export default function ListView() {
  const [registeredCafes, setRegisteredCafes] = useState([]);
  const [city, setCity] = useState({city: "Leipzig"});
  const {setCafes} = useContext(bakeyContext);

   return (
    <div>
      <StyledListView>
        <StyledInputContainer>
          <StyledSelect id="city" name="city" onChange={(e) => {
    setCity(prevData => {return {[e.target.name]: e.target.value }});
    Axios({
      method: "POST",
      url: "/cafes",
      data: {city: e.target.value},
    })
      .then((res) => {
        setRegisteredCafes(res.data);
        setCafes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }}>
            <option>Select city</option>
            <option value="Leipzig">Leipzig</option>
            <option value="Hamburg">Hamburg</option>
            <option value="Düsseldorf">Düsseldorf</option>
            {/* we can later add a map function with dynamic city names */}
          </StyledSelect>
          <StyledLabel htmlFor="city">See offers from:</StyledLabel>
          <StyledArrow />
        </StyledInputContainer>
        <div>
          <h3>Cafes in {city.city} with active campaigns:</h3>
          <p>Show only cafes that offer something:</p>
          <StyledTagContainer>
            <StyledTag no lactose title="lactose free">
              L
            </StyledTag>
            <p>Lupine free</p>
            <StyledTag no gluten title="gluten free">
              G
            </StyledTag>
            <p>Gluten Free</p>
            <StyledTag no sugar title="sugar free">
              S
            </StyledTag>
            <p>Sesam Free</p>
            <StyledTag vegan title="vegan">
              V
            </StyledTag>
            <p>Vegan</p>
            <StyledTag organic title="organic">
              O
            </StyledTag>
            <p>Organic</p>
          </StyledTagContainer>
        </div>
        {registeredCafes.map((i) => {
          return <ListViewCafe props={i} />;
        })}
      </StyledListView>
    </div>
  );
}
