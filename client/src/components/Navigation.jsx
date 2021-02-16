import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  StyledMenu,
  StyledExit,
  StyledNavigation,
  StyledNavContainer,
  StyledNavBtnsContainer,
  StyledLogoContainer,
} from "../styledComponents/StyledNavigation";
import StyledLogo from "../styledComponents/StyledLogo";
import StyledButton from "../styledComponents/StyledButton";

export default function Navigation(props) {
  const [open, setOpen] = useState(0);

  const handleOpen = () => {
    setOpen(1);
  };

  const handleClose = () => {
    setOpen(0);
  };
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
        <StyledButton login small>
          <Link to="/login">log in</Link>{" "}
        </StyledButton>
        <StyledButton registration small>
          <Link to="/registration/user">register</Link>
        </StyledButton>
      </StyledNavBtnsContainer>
    </StyledNavigation>
  );
}
