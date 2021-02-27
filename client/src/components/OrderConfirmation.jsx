import React, { useState, useEffect } from "react";
import { SpinnerRoundFilled } from "spinners-react";
import colors from "../styledComponents/colors";

import { StyledLoader } from "../styledComponents/StyledConfirmation";

export default function OrderConfirmation() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <StyledLoader display={loader ? "flex" : "none"}>
      <span>One moment please</span>
      {/* Spinner configuration: https://adexin.github.io/spinners/ */}
      <SpinnerRoundFilled
        size={90}
        thickness={180}
        speed={101}
        color={colors.accent2}
        secondaryColor={colors.accent1}
        // enabled={loader}
      />
    </StyledLoader>
  );
}
