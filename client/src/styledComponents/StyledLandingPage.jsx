import styled, { css } from "styled-components";
import colors from "../styledComponents/colors";
import device from "./device";
import { lighten } from "polished";

import hero from "../assets/hero.jpg";

export const StyledHeader = styled.header`
  width: 1200px;
  margin: auto;
  height: 600px;

  margin-bottom: 300vh;

  background-image: url(${hero});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-origin: content-box;
  background-clip: content-box;
  background-position: center 51%;
  background-size: 1200px;

  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    margin: var(--space-l) 0;
    text-transform: uppercase;
    letter-spacing: var(--ls);
    color: white;
    text-shadow: 1px 1px 5px #111111;
    font-size: 3rem;
    text-align: center;
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

export const StyledMain = styled.div``;
