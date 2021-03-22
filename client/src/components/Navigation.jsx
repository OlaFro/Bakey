import React, { useContext } from "react";
import { useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import {
  StyledMenu,
  StyledExit,
  StyledNavigation,
  StyledNavContainer,
  StyledNavBtnsContainer,
  StyledLogoContainer,
} from "../styledComponents/StyledNavigation";
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
        sessionStorage.removeItem("location");
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
        <NavLink
          to="/cafes-list"
          activeClassName="active"
          onClick={handleClose}
        >
          cafés
        </NavLink>
        <NavLink to="/about-us" activeClassName="active" onClick={handleClose}>
          about us
        </NavLink>
      </StyledNavContainer>
      <StyledNavBtnsContainer display={open}>
        {isLogged.state ? (
          <NavLink
            to={`/${isLogged.role}-dashboard`}
            activeClassName="active"
            onClick={handleClose}
          >
            dashboard
          </NavLink>
        ) : null}
        {isLogged.state ? null : (
          <NavLink to="/login" activeClassName="active" onClick={handleClose}>
            log in
          </NavLink>
        )}
        {isLogged.state ? (
          <span onClick={logout}>log out</span>
        ) : (
          <NavLink to="/registration-user" onClick={handleClose}>
            register
          </NavLink>
        )}
      </StyledNavBtnsContainer>
    </StyledNavigation>
  );
}
