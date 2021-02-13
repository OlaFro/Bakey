import React from "react";
import {
  StyledLabel,
  StyledInputContainer,
  StyledSelect,
  StyledArrow,
} from "../styledComponents/StyledInputs";

export default function InputText(props) {
  return (
    <StyledInputContainer>
      <StyledSelect
        id={props.dbName}
        name={props.dbName}
        onInput={props.getValue}
      >
        <option value="Leipzig">Leipzig</option>
        <option value="Hamburg">Hamburg</option>
        <option value="Düsseldorf">Düsseldorf</option>
        {/* we can later add a map function with dynamic city names */}
      </StyledSelect>

      <StyledLabel htmlFor={props.dbName}>{props.name}</StyledLabel>
      <StyledArrow />
    </StyledInputContainer>
  );
}
