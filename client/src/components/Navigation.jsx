import React, {useContext} from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  StyledMenu,
  StyledExit,
  StyledNavigation,
  StyledNavContainer,
  StyledNavBtnsContainer,
  StyledLogoContainer,
  StyledNavBtn,
} from "../styledComponents/StyledNavigation";
import StyledLogo from "../styledComponents/StyledLogo";
import { StyledSmallButton } from "../styledComponents/StyledButton";
import { bakeyContext } from "../Context";
import axios from "axios";

export default function Navigation(props) {
  const [open, setOpen] = useState(0);

  const handleOpen = () => {
    setOpen(1);
  };

  const handleClose = () => {
    setOpen(0);
  };

  const context = useContext(bakeyContext);

  const logout = () => {
    axios({
      method:"GET",
      url: "/users/logout"
    }).then((res)=>{
      context.setIsLogged(res.data.logged);
    }).catch((err) => console.log(err))
  }

  return (
   <StyledNavigation>
        <StyledLogoContainer>
          <StyledLogo>
            <Link to="/">bakey</Link>
          </StyledLogo>
          <StyledExit onClick={handleClose} display={open} />
          <StyledMenu onClick={handleOpen} display={open} />
        </StyledLogoContainer>
        <StyledNavContainer display={open}>
          <Link to="/">cafés</Link>
          <Link to="/">about us</Link>
        </StyledNavContainer>
        <StyledNavBtnsContainer display={open}>
          {context.isLogged ? (
            <StyledSmallButton onClick={logout}>
              <Link to="/login">Log out</Link>
            </StyledSmallButton>
          ) : (
            <StyledNavBtn login>
              <Link to="/login">log in</Link>
            </StyledNavBtn>
          )}
          {context.isLogged ? null : (
            <StyledNavBtn registration>
              <Link to="/registration/user">register</Link>
            </StyledNavBtn>
          )}
        </StyledNavBtnsContainer>
      </StyledNavigation>
  );
}
