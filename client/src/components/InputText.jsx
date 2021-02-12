import React from "react";
import {
  StyledLabel,
  StyledInputContainer,
  StyledInputField,
} from "../styledComponents/StyledInputText";

export default function InputText(props) {
  return (
    <StyledInputContainer>
      <StyledInputField
        type="text"
        name={props.name}
        id={props.name}
        placeholder=" "
        onInput={props.getValue}
        required={props.required}
      />
      <StyledLabel htmlFor={props.name}>
        {/* Functionality to try out when form is connected */}
        {/* {msg.firstName ? "Error" : "First Name"} */}
        {props.name}
      </StyledLabel>
      {props.msg ? <small>Please use only letters</small> : null}
    </StyledInputContainer>
  );
}
