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
} from "../styledComponents/StyledForm";
import StyledCentered from "../styledComponents/StyledCentered";

import StyledButton from "../styledComponents/StyledButton";

export default function RegistrationCafe() {
  const history = useHistory();

  const [data, setData] = useState({ userType: "cafe" });
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
          history.push("/login");
        }
      })
      .catch((err) => {
        console.log(err);
        setShowWarning(true);
      });
  };

  return (
    <StyledCentered>
      <StyledForm onSubmit={submit} cafe>
        <header>
          <h2>Café Registration</h2>
        </header>
        <StyledInputContainer>
          <StyledInputField
            cafe
            type="text"
            name="cafeName"
            id="cafeName"
            placeholder=" "
            onInput={getValue}
            required={true}
          />
          <StyledLabel htmlFor="cafeName">Café Name</StyledLabel>
          {msg.cafeName ? <small>Cafe name had to be filled</small> : null}
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledInputField
            cafe
            type="email"
            name="email"
            id="email"
            placeholder=" "
            onInput={getValue}
            required={true}
          />
          <StyledLabel htmlFor="email">Email</StyledLabel>

          {msg.email ? <small>Please use proper email format</small> : null}
        </StyledInputContainer>

        <StyledInputContainer>
          <StyledInputField
            cafe
            type="text"
            name="cafeStreet"
            id="cafeStreet"
            placeholder=" "
            onInput={getValue}
            required={true}
          />
          <StyledLabel htmlFor="cafeStreet">Address / Street</StyledLabel>
          {msg.cafeStreet ? <small>Please use only letters</small> : null}
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledInputField
            cafe
            type="text"
            name="cafeStreetNr"
            id="cafeStreetNr"
            placeholder=" "
            onInput={getValue}
            required={true}
          />
          <StyledLabel htmlFor="cafeStreetNr">Address / Street Nr</StyledLabel>
          {msg.cafeStreetNr ? (
            <small>Please use only letters and numbers.</small>
          ) : null}
        </StyledInputContainer>

        <StyledInputContainer>
          <StyledInputField
            cafe
            type="text"
            name="cafeZip"
            id="cafeZip"
            placeholder=" "
            onInput={getValue}
            required={true}
          />
          <StyledLabel htmlFor="cafeZip">Address / ZIP code</StyledLabel>
          {msg.cafeZip ? <small>Please use only numbers</small> : null}
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledInputField
            cafe
            type="text"
            name="city"
            id="city"
            placeholder=" "
            onInput={getValue}
            required={true}
          />
          <StyledLabel htmlFor="city">Address / City</StyledLabel>
          {msg.city ? <small>Please use only letters</small> : null}
        </StyledInputContainer>

        <StyledInputContainer>
          <StyledInputField
            cafe
            type="text"
            name="firstName"
            id="firstName"
            placeholder=" "
            onInput={getValue}
            required={true}
          />
          <StyledLabel htmlFor="firstName">Owner First Name</StyledLabel>
          {msg.firstName ? <small>Please use only letters</small> : null}
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledInputField
            cafe
            type="text"
            name="lastName"
            id="lastName"
            placeholder=" "
            onInput={getValue}
            required={true}
          />
          <StyledLabel htmlFor="lastName">Owner Last Name</StyledLabel>
          {msg.lastName ? <small>Please use only letters</small> : null}
        </StyledInputContainer>

        <StyledInputContainer>
          <StyledInputField
            cafe
            type={visible ? "text" : "password"}
            name="password"
            id="password"
            placeholder=" "
            onInput={getValue}
            required={true}
          />
          <StyledLabel htmlFor="password">Password</StyledLabel>
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
            cafe
            type={visible ? "text" : "password"}
            name="passwordConfirm"
            id="passwordConfirm"
            placeholder=" "
            onInput={getValue}
            required={true}
          />
          <StyledLabel htmlFor="passwordConfirm">Repeat password</StyledLabel>
          {visible ? (
            <StyledEye onClick={hidePassword} />
          ) : (
            <StyledEyeClose onClick={showPassword} />
          )}

          {msg.passwordConfirm ? (
            <small>Your passwords are not the same</small>
          ) : null}
        </StyledInputContainer>

        <StyledButton cafe cafeRegister>
          Register
        </StyledButton>
        {warning ? (
          <div>
            <p className="warning">
              User with this {warningContent} already exists, please log-in
            </p>
          </div>
        ) : null}
        {warningValidation ? (
          <p className="warning">Please fill all fields!</p>
        ) : null}
        {showWarning ? <Warning msg="service is out of order" /> : null}
      </StyledForm>
      <p>
        If you have already registered, please <Link to="/login">log in</Link>.
      </p>
    </StyledCentered>
  );
}
