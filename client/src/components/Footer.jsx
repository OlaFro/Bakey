import React from "react";
import StyledFooter from "../styledComponents/StyledFooter";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <StyledFooter>
      <p>
        &#169;2020
        <img className="logo" src={logo} alt="Alice Rez logo" />{" "}
        <a href="https://github.com/Alice-Rez">Alice Rez</a> &{" "}
        <a href="https://olafrost.com/">Ola Frost</a> &{" "}
        <a href="https://github.com/willoid">willoid</a>
      </p>
    </StyledFooter>
  );
}