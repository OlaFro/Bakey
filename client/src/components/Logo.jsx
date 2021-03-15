import React from "react";
import { StyledLogo } from "../styledComponents/StyledLogo";
import pie from "../assets/pie.svg";

export default function Logo(props) {
  return (
    <StyledLogo nav={props.nav ? true : false}>
      <img src={pie} alt="logo" />
      <span>bakey</span>
    </StyledLogo>
  );
}
