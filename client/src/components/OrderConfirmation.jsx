import React, { useState, useEffect } from "react";
import { SpinnerRoundFilled } from "spinners-react";
import colors from "../styledComponents/colors";

import {
  StyledConfirmationContainer,
  StyledLoader,
  StyledCongrats,
} from "../styledComponents/StyledConfirmation";

export default function OrderConfirmation() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <StyledConfirmationContainer>
      <StyledLoader display={loader ? "flex" : "none"}>
        <span>One moment please</span>
        {/* Spinner configuration: https://adexin.github.io/spinners/ */}
        <SpinnerRoundFilled
          size={90}
          thickness={180}
          speed={101}
          color={colors.accent2}
          secondaryColor={colors.accent1}
        />
      </StyledLoader>
      <StyledCongrats display={loader ? "none" : "flex"}>
        <p>Your payment was successful.</p>
        <h1>Congrats!</h1>
        <p>
          <strong>You have just supported Your local cafe ❤️</strong>
        </p>
        <p>
          And if the campaign will be successful too, you will soon eat your
          cake! To increase the chances for meeting the goal of the campaign,{" "}
          <strong>invite your friends!</strong>
        </p>
      </StyledCongrats>
    </StyledConfirmationContainer>
  );
}
