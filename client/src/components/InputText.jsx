import React from "react";
import {
  StyledLabel,
  StyledInputContainer,
  StyledInputField,
} from "../styledComponents/StyledInputs";

export default function InputText(props) {
  return (
    <StyledInputContainer>
      <StyledInputField
        type="text"
        name={props.dbName}
        // we can think about some function that will change props.name to camelCase so we can have one prop less to define in the parent
        id={props.dbName}
        placeholder=" "
        onInput={props.getValue}
        required={props.required}
      />
      <StyledLabel htmlFor={props.dbName}>
        {/* Functionality to try out when form is connected */}
        {/* {msg.firstName ? "Error" : "First Name"} */}
        {props.name}
      </StyledLabel>
      {props.msg ? <small>Please use only letters</small> : null}
    </StyledInputContainer>
  );
}
