import styled, { css } from "styled-components";
import colors from "../styledComponents/colors";
import device from "./device";
import { lighten } from "polished";

import hero from "../assets/hero.jpg";

export const StyledHeader = styled.header`
  width: 1200px;
  margin: auto;
  height: 800px;

  background-image: url(${hero});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-origin: content-box;
  background-clip: content-box;
  background-position: center 40%;
  background-size: 1200px;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  position: relative;

  h1 {
    margin: var(--space-s) 0;
    text-transform: uppercase;
    letter-spacing: var(--ls);
    color: white;
    text-shadow: 1px 1px 5px #111111;
    font-size: 3rem;
    text-align: center;
  }
  .headingContainer {
    margin-top: 15rem;
  }
`;

export const StyledCTA = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > button {
    margin-left: 3rem;
  }
`;

export const StyledDesc = styled.div`
  width: 55%;
  background: white;
  padding: var(--space-s) var(--space-m);
  position: absolute;
  bottom: -8%;
  left: 50%;
  transform: translate(-50%, 0);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;

  h2 {
    line-height: 29px;
    font-size: 1.5rem;
    font-weight: 300;
    text-transform: none;
    letter-spacing: 0;
  }
`;

export const StyledTitle = styled.span`
  margin: calc(4 * var(--space-l)) auto calc(2 * var(--space-l)) auto;
  padding: var(--space-m) calc(1.5 * var(--space-l));
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  h2 {
    margin: 0;
    color: ${colors.accent2};
  }
`;
export const StyledMain = styled.main``;
