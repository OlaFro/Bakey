import Axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import { bakeyContext } from "../Context";
import Warning from "../components/Warning";
import {
  StyledForm,
  StyledLabel,
  StyledInputContainer,
  StyledOtherInputsContainer,
  StyledInputField,
  StyledEyeClose,
  StyledEye,
} from "../styledComponents/StyledForm";
import StyledCentered from "../styledComponents/StyledCentered";

import { StyledButton } from "../styledComponents/StyledButton";

export default function RegistrationCafe() {
  const history = useHistory();

  const [data, setData] = useState({ userType: "cafe" });
  const [msg, setMsg] = useState({});
  const [warning, setWarning] = useState(false);
  const [warningContent, setWarningContent] = useState("");
  const [warningValidation, setWarningValidation] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [visible, setVisible] = useState(false);
  const { availableCities, setAvailableCities } = useContext(bakeyContext);

  useEffect(() => {
    return function () {
      console.log("component is unmounting");
      setData({});
    };
  }, []);

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

    setShowWarning(false);

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
          addNewCity();
          history.push("/login");
        }
      })
      .catch((err) => {
        console.log(err);
        setShowWarning(true);
      });
  };

  const addNewCity = () => {
    let newCity = data.city;
    if (!availableCities.includes(newCity)) {
      setAvailableCities((availableCities) => [...availableCities, newCity]);
    }
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
          <StyledLabel htmlFor="cafeName">Café Name*</StyledLabel>
          <div>{msg.cafeName ? <small>Required</small> : null}</div>
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
          <StyledLabel htmlFor="email">Email*</StyledLabel>
          <div>
            {msg.email ? <small>Please use proper email format</small> : null}
          </div>
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
          <StyledLabel htmlFor="cafeStreet">Address / Street*</StyledLabel>
          <div>
            {msg.cafeStreet ? <small> Please use only letters </small> : null}
          </div>
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
          <StyledLabel htmlFor="cafeStreetNr">Address / Street Nr*</StyledLabel>
          <div>
            {msg.cafeStreetNr ? (
              <small>Please use only letters and numbers.</small>
            ) : null}
          </div>
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
          <StyledLabel htmlFor="cafeZip">Address / ZIP code*</StyledLabel>
          <div>
            {msg.cafeZip ? <small>Please use only numbers</small> : null}
          </div>
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
          <StyledLabel htmlFor="city">Address / City*</StyledLabel>
          <div>{msg.city ? <small>Please use only letters</small> : null}</div>
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
          <StyledLabel htmlFor="firstName">Owner First Name*</StyledLabel>
          <div>
            {msg.firstName ? <small>Please use only letters</small> : null}
          </div>
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
          <StyledLabel htmlFor="lastName">Owner Last Name*</StyledLabel>
          <div>
            {msg.lastName ? <small>Please use only letters</small> : null}
          </div>
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
          <StyledLabel htmlFor="password">Password*</StyledLabel>
          {visible ? (
            <StyledEye onClick={hidePassword} />
          ) : (
            <StyledEyeClose onClick={showPassword} />
          )}
          <div>
            {msg.password ? <small>Please use min. 8 characters</small> : null}
          </div>
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
          <StyledLabel htmlFor="passwordConfirm">Repeat password*</StyledLabel>
          {visible ? (
            <StyledEye onClick={hidePassword} />
          ) : (
            <StyledEyeClose onClick={showPassword} />
          )}
          <div>
            {msg.passwordConfirm ? (
              <small>Passwords are not the same</small>
            ) : null}
          </div>
        </StyledInputContainer>
        <StyledOtherInputsContainer cafe registerCafe>
          <header>Terms</header>
          <div>
            <input type="checkbox" id="Terms" name="Terms" required />
            <label htmlFor="Terms">
              Please use only mock-up data. This is just a demo project not
              offering real products.
            </label>
          </div>
        </StyledOtherInputsContainer>

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
        <div className="oops-warning">
          {showWarning ? <Warning msg="the service is out of order" /> : null}
        </div>
      </StyledForm>

      <p>
        If you have already registered, please <Link to="/login">log in</Link>.
      </p>
    </StyledCentered>
  );
}
