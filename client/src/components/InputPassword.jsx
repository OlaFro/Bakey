import React from "react";
import {
  StyledLabel,
  StyledInputContainer,
  StyledInputField,
  StyledEyeClose,
  StyledEye,
} from "../styledComponents/StyledInputs";
import { useState } from "react";

export default function InputText(props) {
  const [visible, setVisible] = useState(false);

  const showPassword = () => {
    setVisible(true);
  };

  const hidePassword = () => {
    setVisible(false);
  };

  return (
    <StyledInputContainer>
      <StyledInputField
        type={visible ? "text" : "password"}
        name={props.dbName}
        id={props.dbName}
        placeholder=" "
        onInput={props.getValue}
        required={props.required}
      />
      <StyledLabel htmlFor={props.dbName}>
        {/* Functionality to try out when form is connected */}
        {/* {msg.email ? "Error" : "Email"} */}
        {props.name}
      </StyledLabel>
      {/* <StyledEyeClose onClick={showPassword} /> */}
      {visible ? (
        <StyledEye onClick={hidePassword} />
      ) : (
        <StyledEyeClose onClick={showPassword} />
      )}

      {props.msg ? <small>Please use proper e-mail format</small> : null}
    </StyledInputContainer>
  );
}
