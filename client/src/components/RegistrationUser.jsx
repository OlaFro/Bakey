import Axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Warning from "./Warning";
import {
  StyledLabel,
  StyledInputContainer,
  StyledInputField,
  StyledEyeClose,
  StyledEye,
} from "../styledComponents/StyledInputs";

import Select from "./Select";

export default function RegistrationUser() {
  const history = useHistory();

  const [data, setData] = useState({ userType: "client" });
  const [msg, setMsg] = useState();
  const [warning, setWarning] = useState(false);
  const [warningContent, setWarningContent] = useState("");
  const [warningValidation, setWarningValidation] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [visible, setVisible] = useState(false);

  const showPassword = () => {
    setVisible(true);
  };

  const hidePassword = () => {
    setVisible(false);
  };

  const getValue = (e) => {
    setWarning(false);
    setWarningValidation(false);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();

    setMsg({});

    Axios({
      method: "POST",
      url: "/users/register",
      data: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.msg) {
          let msgChanged = res.data.msg.reduce((acc, item) => {
            acc[item.param] = true;
            return acc;
          }, {});
          setMsg(msgChanged);
        } else if (res.data.code === 11000) {
          setWarningContent(Object.keys(res.data.keyValue)[0]);
          setWarning(true);
        } else if (
          res.data._message === "users validation failed" ||
          res.data.errorSource === "BCRYPT"
        ) {
          setWarningValidation(true);
        } else {
          history.push("/login");
        }
      })
      .catch((err) => {
        console.log(err);
        setShowWarning(true);
      });
  };

  return showWarning ? (
    <Warning />
  ) : (
    <section>
      <form onSubmit={submit}>
        <header>
          <h2>Registration</h2>
        </header>
        <StyledInputContainer>
          <StyledInputField
            type="text"
            name="firstName"
            id="firstName"
            placeholder=" "
            onInput={getValue}
            required={true}
          />
          <StyledLabel htmlFor="firstName">
            {/* Functionality to try out when form is connected */}
            {/* {msg.firstName ? "Error" : "First Name"} */}
            First Name
          </StyledLabel>
          {msg ? <small>Please use only letters</small> : null}
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledInputField
            type="text"
            name="lastName"
            id="lastName"
            placeholder=" "
            onInput={getValue}
            required={true}
          />
          <StyledLabel htmlFor="lastName">
            {/* Functionality to try out when form is connected */}
            {/* {msg.firstName ? "Error" : "First Name"} */}
            Last Name
          </StyledLabel>
          {msg ? <small>Please use only letters</small> : null}
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledInputField
            type="email"
            name="email"
            id="email"
            placeholder=" "
            onInput={getValue}
            required={true}
          />
          <StyledLabel htmlFor="email">
            {/* Functionality to try out when form is connected */}
            {/* {msg.email ? "Error" : "Email"} */}
            Email
          </StyledLabel>

          {msg ? <small>Please use proper e-mail format</small> : null}
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledInputField
            type={visible ? "text" : "password"}
            name="password"
            id="password"
            placeholder=" "
            onInput={getValue}
            required="true"
          />
          <StyledLabel htmlFor="password">
            {/* Functionality to try out when form is connected */}
            {/* {msg.email ? "Error" : "Email"} */}
            Password
          </StyledLabel>
          {visible ? (
            <StyledEye onClick={hidePassword} />
          ) : (
            <StyledEyeClose onClick={showPassword} />
          )}

          {msg ? (
            <small>Your password does not meet the password criteria</small>
          ) : null}
        </StyledInputContainer>

        {/* <InputText
          name={"First Name"}
          dbName={"firstName"}
          onInput={(e) => getValue}
          required={true}
          msg={msg ? msg.firstName : null}
        />
        <InputText
          name={"Last Name"}
          dbName={"lastName"}
          onInput={getValue}
          required={true}
          msg={msg ? msg.lastName : null}
        />
        <InputEmail
          name={"email"}
          onInput={getValue}
          required={true}
          msg={msg ? msg.email : null}
        />
        <InputPassword
          name={"password"}
          dbName={"password"}
          onInput={getValue}
          required={true}
          msg={msg ? msg.password : null}
        />
        <InputPassword
          name={"Repeat Password"}
          dbName={"confirmPassword"}
          onInput={getValue}
          required={true}
          msg={msg ? msg.password : null}
        />
        <Select
          name={"See offers from:"}
          dbName={"city"}
          onInput={getValue}
          required={false}
        /> */}

        {/* <div>
          <label htmlFor="city">See offers from:</label>
          <select id="city" name="city" onInput={getValue}>
            <option value="Leipzig">Leipzig</option>
            <option value="Hamburg">Hamburg</option>
            <option value="Düsseldorf">Düsseldorf</option>
          </select>
          {msg.password ? (
            <small>Your password does not meet the password criteria</small>
          ) : null}
        </div> */}
        {/* 
       
        <div>
          <button type="submit">Register</button>
        </div>
        <p>If you are already registered, please login.</p>
        {warning ? (
          <div>
            <p>User with this {warningContent} already exists, please log-in</p>
          </div>
        ) : null}
        {warningValidation ? <p>Please fill all fields!</p> : null} */}
      </form>
    </section>
  );
}
