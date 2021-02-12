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
        type="email"
        name={props.name}
        id={props.name}
        placeholder=" "
        onInput={props.getValue}
        required
      />
      <StyledLabel htmlFor={props.name}>
        {/* Functionality to try out when form is connected */}
        {/* {msg.firstName ? "Error" : "First Name"} */}
        {props.name}
      </StyledLabel>
      {props.msg ? <small>Please use proper e-mail format</small> : null}
    </StyledInputContainer>
  );
}
