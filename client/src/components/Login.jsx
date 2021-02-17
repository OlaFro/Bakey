import Axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { bakeyContext } from "../Context";

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
import {StyledButton} from "../styledComponents/StyledButton";



export default function Login(props) {
  const [loginData, setData] = useState({});
  const [warning, setWarning] = useState(false);
  const { setIsLogged, setUserName, setProfilePic, setRole } = useContext(
    bakeyContext
  );
  const [visible, setVisible] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  let history = useHistory();

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

  const getData = (e) => {
    setWarning(false);
    setData({ ...loginData, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    setShowWarning(false);
    console.log("request send", loginData);

    Axios({
      method: "POST",
      url: "/users/login",
      data: JSON.stringify(loginData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.data.logged) {
          console.log(res.data);
          setIsLogged({ state: true, role: res.data.userType });
          setUserName(res.data.firstName);
          setProfilePic(res.data.profilePic);
          // setRole(() => res.data.userType);
          setData({});
          history.push(`/${res.data.userType}-dashboard`);
        } else {
          setWarning(true);
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
          <h2>Login</h2>
        </header>
        <StyledInputContainer>
          <StyledInputField
            type="email"
            name="email"
            id="email"
            placeholder=" "
            onInput={getData}
            required={true}
          />
          <StyledLabel htmlFor="email">Email*</StyledLabel>
        </StyledInputContainer>

        <StyledInputContainer>
          <StyledInputField
            type={visible ? "text" : "password"}
            name="password"
            id="password"
            placeholder=" "
            onInput={getData}
            required={true}
          />
          <StyledLabel htmlFor="password">Password*</StyledLabel>
          {visible ? (
            <StyledEye onClick={hidePassword} />
          ) : (
            <StyledEyeClose onClick={showPassword} />
          )}
        </StyledInputContainer>
        <StyledButton>Log in</StyledButton>
        {warning ? <small>Your email or password are incorrect.</small> : null}
        {showWarning ? <Warning msg="the service is out of order" /> : null}
      </StyledForm>
      <p>
        If you have no account yet, please{" "}
        <Link to="/registration/user">register</Link>.
      </p>
    </StyledCentered>
  );
}
