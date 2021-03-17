import Axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { useHistory, Link } from "react-router-dom";

import Warning from "../components/Warning";
import {
  StyledForm,
  StyledLabel,
  StyledInputContainer,
  StyledOtherInputsContainer,
  StyledInputField,
  StyledEyeClose,
  StyledEye,
  StyledSelect,
  StyledArrow,
} from "../styledComponents/StyledForm";
import StyledCentered from "../styledComponents/StyledCentered";
import { StyledButton } from "../styledComponents/StyledButton";
import { bakeyContext } from "../Context";

export default function RegistrationUser(props) {
  const history = useHistory();

  const [data, setData] = useState({ userType: "client", city: "Leipzig" });
  const [msg, setMsg] = useState({});
  const [warning, setWarning] = useState(false);
  const [warningContent, setWarningContent] = useState("");
  const [warningValidation, setWarningValidation] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [visible, setVisible] = useState(false);
  const { setAvailableCities, availableCities } = useContext(bakeyContext);

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
          <StyledLabel htmlFor="firstName">First Name*</StyledLabel>
          <div>
            {msg.firstName ? <small>Please use only letters</small> : null}
          </div>
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
          <StyledLabel htmlFor="lastName">Last Name*</StyledLabel>
          <div>
            {msg.lastName ? <small>Please use only letters</small> : null}
          </div>
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
          <StyledLabel htmlFor="email">Email*</StyledLabel>
          <div>
            {msg.email ? <small>Please use proper email format</small> : null}
          </div>
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
            type={visible ? "text" : "password"}
            name="passwordConfirm"
            id="passwordConfirm"
            placeholder=" "
            onInput={getValue}
            required={true}
          />
          <StyledLabel htmlFor="confirmPassword">Repeat password*</StyledLabel>
          {visible ? (
            <StyledEye onClick={hidePassword} />
          ) : (
            <StyledEyeClose onClick={showPassword} />
          )}
          <div>
            {msg.passwordConfirm ? (
              <small>Your passwords are not the same</small>
            ) : null}
          </div>
        </StyledInputContainer>
        {availableCities.length > 0 ? (
          <StyledInputContainer>
            <StyledSelect id="city" name="city" onInput={getValue}>
              {availableCities.map((city) => {
                return <option value={city}>{`${city}`}</option>;
              })}
              {/* we can later add a map function with dynamic city names */}
            </StyledSelect>

            <StyledLabel htmlFor="city">See offers from:</StyledLabel>
            <StyledArrow />
          </StyledInputContainer>
        ) : null}
        <StyledOtherInputsContainer registerUser>
          <header>Terms</header>
          <div>
            <input type="checkbox" id="Terms" name="Terms" required />
            <label htmlFor="Terms">
              Please use only mock-up data. This is just a demo project not
              offering real products.
            </label>
          </div>
        </StyledOtherInputsContainer>
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
        {showWarning ? <Warning msg="the service is out of order" /> : null}
      </StyledForm>
      <p>
        If you have already registered, please <Link to="/login">log in</Link>.{" "}
        <br></br>
        If you want to register as a café owner, please click{" "}
        <Link to="/registration/cafe">here</Link>.
      </p>
    </StyledCentered>
  );
}
