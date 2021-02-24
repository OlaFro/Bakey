import React, { useState } from "react";
import {
  StyledOrderContainer,
  StyledLeftPart,
  StyledPreview,
  StyledRightPart,
  StyledSummary,
} from "../styledComponents/StyledOrder";
import {
  StyledLabel,
  StyledInputContainer,
  StyledSelect,
  StyledArrow,
} from "../styledComponents/StyledForm";

import placeholder from "../assets/placeholder_400px.jpg";

export default function Order(props) {
  const [data, setData] = useState(1);
  const getValue = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <StyledOrderContainer>
      <StyledLeftPart>
        <StyledPreview>
          <figure>
            <img src={props.image ? props.image : placeholder} alt="my offer" />
          </figure>
          <div>
            <h3>{props.title ? props.title : "Title"}</h3>
            <div>
              <p>{props.cafeName ? props.cafeName : "Café name"} </p>
              <p>{props.pickUpDate ? props.pickUpDate : "Pick-up date"}</p>
            </div>
          </div>
        </StyledPreview>
      </StyledLeftPart>
      <StyledRightPart>
        <StyledSummary>
          <h4>Order summary:</h4>

          <StyledInputContainer number>
            <StyledSelect number id="order" name="city" onInput={getValue}>
              <option value="Leipzig">1</option>
              <option value="Hamburg">2</option>
              <option value="Düsseldorf">3</option>
            </StyledSelect>

            <StyledLabel number htmlFor="order">
              Pieces:
            </StyledLabel>
            <StyledArrow />
          </StyledInputContainer>
        </StyledSummary>
      </StyledRightPart>
    </StyledOrderContainer>
  );
}
