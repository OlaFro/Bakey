import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { SpinnerRoundFilled } from "spinners-react";
import colors from "../styledComponents/colors";
import { CopyToClipboard } from "react-copy-to-clipboard";

import {
  StyledConfirmationContainer,
  StyledLoader,
  StyledCongrats,
  StyledLinkContainer,
  StyledLink,
  StyledCopied,
  StyledCopyToClipboard
} from "../styledComponents/StyledConfirmation";

import { StyledButton } from "../styledComponents/StyledButton";

export default function OrderConfirmation(props) {
  const [loader, setLoader] = useState(true);
  const [copy, setCopy] = useState({
    value: props.urlListing,
    isCopied: false,
  });

  const [clicked, setClicked] = useState(false);

  let history = useHistory();

  const handleCopy = () => {
    setCopy({ value: props.urlListing, isCopied: true });
  };

  const handleClick = () => {
    setClicked(true);
  };

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
          speed={131}
          color={colors.accent1}
        />
      </StyledLoader>
      <StyledCongrats display={loader ? "none" : "flex"}>
        <p>Your payment was successful.</p>
        <h1>Congrats!</h1>
        <p>
          <strong>You have just supported Your local cafe ❤️</strong>
        </p>
        <p>
          And if the campaign succeeds, you will be soon eating your
          cake. To increase the chances of meeting the goal of this campaign,
          <strong> copy the link and invite your friends!</strong>
        </p>
        <StyledCopyToClipboard>
          <CopyToClipboard
            onCopy={handleCopy}
            text={props.urlListing ? copy.value : "TEST COPIED URL"}

          >
            <StyledLinkContainer>
              {props.urlListing ? copy.value : "TEST COPIED URL"}
            </StyledLinkContainer>
          </CopyToClipboard>

          <CopyToClipboard
            onCopy={handleCopy}
            text={props.urlListing ? copy.value : "TEST COPIED URL"}
          >
            <StyledLink
              display={clicked ? "none" : "inline"}
              onClick={handleClick}
            />
          </CopyToClipboard>
          <CopyToClipboard>
            <StyledCopied display={clicked ? "inline" : "none"} />
          </CopyToClipboard>

          </StyledCopyToClipboard>
        <p>
          As soon as the campaign reaches the goal, you will get a confirmation email with
          the pick-up details.
        </p>
        <StyledButton
          onClick={() => {
            history.push("/cafes-list");
          }}
        >
          Explore other offers
        </StyledButton>
      </StyledCongrats>
    </StyledConfirmationContainer>
  );
}
