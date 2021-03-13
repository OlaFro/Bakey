import React from "react";
import StyledFooter from "../styledComponents/StyledFooter";
import bakey_white from "../assets/pie_white.svg";
import logo from "../assets/logo.svg";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <StyledFooter>
      <img src={bakey_white} alt="bakey logo" />
      <div>
        <p>
          Bakey is only a demo. Please read more{" "}
          <Link to="/about-us">about us</Link>.
        </p>

        <p className="logos">
          &#169;2021
          <img className="logoAlice" src={logo} alt="Alice Rez logo" />{" "}
          <a href="https://github.com/Alice-Rez">Alice Rez</a> &{" "}
          <a href="https://olafrost.com/">Ola Frost</a> &{" "}
          <a href="https://github.com/willoid">willoid</a>
        </p>
      </div>
    </StyledFooter>
  );
}
