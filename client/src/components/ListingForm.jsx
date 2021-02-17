import React, { useState } from "react";
import StyledCentered from "../styledComponents/StyledCentered";
import {
  StyledForm,
  StyledLabel,
  StyledInputContainer,
  StyledInputField,
  StyledSelect,
} from "../styledComponents/StyledForm";

export default function ListingForm() {
  const [data, setData] = useState({});
  const [warning, setWarning] = useState(false);
  const [warningContent, setWarningContent] = useState("");
  const [warningValidation, setWarningValidation] = useState(false);

  const getValue = (e) => {
    setWarning(false);
    setWarningValidation(false);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <StyledCentered>
      <header>
        <h2>Add a new listing</h2>
      </header>

      <StyledForm cafe>
        <StyledCentered>
          <header>
            <h2>Fill out:</h2>
          </header>
          <StyledInputContainer>
            <StyledInputField
              cafe
              type="text"
              name="listingName"
              id="listingName"
              placeholder=" "
              onInput={getValue}
              required={true}
            />
            <StyledLabel htmlFor="listingName">Title*</StyledLabel>
            <div>
              {/* {msg.firstName ? <small>Please use only letters</small> : null} */}
            </div>
          </StyledInputContainer>

          <div>
            <input type="checkbox" id="cereal" name="cereal" />
            <label htmlFor="cereal">cereal</label>
            <input type="checkbox" id="eggs" name="eggs" />
            <label htmlFor="eggs">eggs</label>
            <input type="checkbox" id="peanut" name="peanut" />
            <label htmlFor="peanut">peanut</label>
            <input type="checkbox" id="soja" name="soja" />
            <label htmlFor="soja">soja</label>
            <input type="checkbox" id="dairy" name="dairy" />
            <label htmlFor="dairy">dairy</label>
            <input type="checkbox" id="celery" name="celery" />
            <label htmlFor="celery">celery</label>
            <input type="checkbox" id="mustard" name="mustard" />
            <label htmlFor="mustard">mustard</label>
            <input type="checkbox" id="lupins" name="lupins" />
            <label htmlFor="lupins">lupins</label>
          </div>
          <div>
            <input type="checkbox" id="vegan" name="vegan" />
            <label htmlFor="vegan">vegan</label>
            <input type="checkbox" id="organic" name="organic" />
            <label htmlFor="organic">organic</label>
            <input type="checkbox" id="glutenFree" name="glutenFree" />
            <label htmlFor="glutenFree">gluten-free</label>
            <input type="checkbox" id="lactoseFree" name="lactoseFree" />
            <label htmlFor="lactoseFree">lactose-free</label>
            <input type="checkbox" id="sugarFree" name="sugarFree" />
            <label htmlFor="sugarFree">sugar-free</label>
            <input type="checkbox" id="wheatFree" name="wheatFree" />
            <label htmlFor="wheatFree">wheat-free</label>
          </div>
          {/* TAGS - checkboxes, ALLERGENES - checkboxes, PRICES - number, QTY OF
        PORTIONS - number, PICK UP - date */}
        </StyledCentered>
      </StyledForm>
    </StyledCentered>
  );
}
