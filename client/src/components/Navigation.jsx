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
        <Link to="/aboutus">about us</Link>
      </StyledNavContainer>
      <StyledNavBtnsContainer display={open}>
        <Link to="/login">log in</Link>
        <Link to="/registration">register</Link>
      </StyledNavBtnsContainer>
    </StyledNavigation>
  );
}
