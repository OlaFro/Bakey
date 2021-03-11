import React, { useContext } from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  StyledMenu,
  StyledExit,
  StyledNavigation,
  StyledNavContainer,
  StyledNavBtnsContainer,
  StyledLogoContainer,
  StyledNavBtn,
} from "../styledComponents/StyledNavigation";
import { StyledNavLogo } from "../styledComponents/StyledLogo";
import { StyledSmallButton } from "../styledComponents/StyledButton";
import { bakeyContext } from "../Context";
import axios from "axios";
import Logo from "./Logo";

export default function Navigation(props) {
  const [open, setOpen] = useState(0);
  const history = useHistory();

  const handleOpen = () => {
    setOpen(1);
  };

  const handleClose = () => {
    setOpen(0);
  };

  const { isLogged, setIsLogged } = useContext(bakeyContext);

  const logout = () => {
    axios({
      method: "GET",
      url: "/users/logout",
    })
      .then((res) => {
        setIsLogged(res.data.logged);
        history.push("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <StyledNavigation>
      <StyledLogoContainer>
        <Link to="/">
          <Logo nav />
        </Link>

        <StyledExit onClick={handleClose} display={open} />
        <StyledMenu onClick={handleOpen} display={open} />
      </StyledLogoContainer>
      <StyledNavContainer display={open}>
        <Link to="/cafes-list" onClick={handleClose}>
          cafés
        </Link>
        <Link to="/about-us" onClick={handleClose}>
          about us
        </Link>
      </StyledNavContainer>
      <StyledNavBtnsContainer display={open}>
        {isLogged.state ? (
          <Link to={`/${isLogged.role}-dashboard`} onClick={handleClose}>
            Dashboard
          </Link>
        ) : null}
        {isLogged.state ? null : (
          <StyledNavBtn login>
            <Link to="/login" onClick={handleClose}>
              log in
            </Link>
          </StyledNavBtn>
        )}
        {isLogged.state ? (
          <StyledSmallButton onClick={logout}>Log out</StyledSmallButton>
        ) : (
          <StyledNavBtn registration>
            <Link to="/registration/user" onClick={handleClose}>
              register
            </Link>
          </StyledNavBtn>
        )}
      </StyledNavBtnsContainer>
    </StyledNavigation>
  );
}
