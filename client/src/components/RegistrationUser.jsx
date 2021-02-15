import Axios from "axios";
import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";

import Warning from "./Warning";
import {
  StyledForm,
  StyledLabel,
  StyledInputContainer,
  StyledInputField,
  StyledEyeClose,
  StyledEye,
  StyledSelect,
  StyledArrow,
} from "../styledComponents/StyledForm";
import StyledButton from "../styledComponents/StyledButton";

export default function RegistrationUser(props) {
  const history = useHistory();

  const [data, setData] = useState({ userType: "client", city: "Leipzig" });
  const [msg, setMsg] = useState({});
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
          // history.push("/login");
        }
      })
      .catch((err) => {
        console.log(err);
        setShowWarning(true);
      });
  };

  return (
    <section>
      <StyledForm onSubmit={submit}>
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
          {msg.firstName ? <small>Please use only letters</small> : null}
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
          {msg.lastName ? <small>Please use only letters</small> : null}
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

          {msg.email ? <small>Please use proper email format</small> : null}
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledInputField
            type={visible ? "text" : "password"}
            name="password"
            id="password"
            placeholder=" "
            onInput={getValue}
            required={true}
          />
          <StyledLabel htmlFor="password">
            {/* Functionality to try out when form is connected */}
            {/* {msg.pqssword ? "Error" : "Password"} */}
            Password
          </StyledLabel>
          {visible ? (
            <StyledEye onClick={hidePassword} />
          ) : (
            <StyledEyeClose onClick={showPassword} />
          )}

          {msg.password ? (
            <small>Your password should be at least 8 characters long</small>
          ) : null}
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledInputField
            type={visible ? "text" : "password"}
            name="passwordConfirm"
            id="passwordConfirm"
            placeholder=" "
            onInput={getValue}
            required={true}
          />
          <StyledLabel htmlFor="passwordConfirm">
            {/* Functionality to try out when form is connected */}
            {/* {msg.passwordConfirm ? "Error" : "Repeat Password"} */}
            Repeat password
          </StyledLabel>
          {visible ? (
            <StyledEye onClick={hidePassword} />
          ) : (
            <StyledEyeClose onClick={showPassword} />
          )}

          {msg.passwordConfirm ? (
            <small>Your passwords are not the same</small>
          ) : null}
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledSelect id="city" name="city" onInput={getValue}>
            <option value="Leipzig">Leipzig</option>
            <option value="Hamburg">Hamburg</option>
            <option value="Düsseldorf">Düsseldorf</option>
            {/* we can later add a map function with dynamic city names */}
          </StyledSelect>

          <StyledLabel htmlFor="city">See offers from:</StyledLabel>
          <StyledArrow />
        </StyledInputContainer>
        <StyledButton>Register</StyledButton>
        {warning ? (
          <div>
            <p className="warning">
              User with this {warningContent} already exists, please log-in or
              use another password
            </p>
          </div>
        ) : null}
        {warningValidation ? (
          <p className="warning">Please fill all fields!</p>
        ) : null}
        {showWarning ? <Warning msg="service is out of order" /> : null}
      </StyledForm>
      <p>If you have already registered, please <Link to="/login">login</Link>.</p>
      <p>If you want to register as a café owner, please click <Link to="/">here</Link>.</p>
    </section>
  );
}
