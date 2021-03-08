import styled, { css } from "styled-components";
import colors from "../styledComponents/colors";
import device from "./device";
import { lighten, darken } from "polished";

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
    text-shadow: 1px 1px 5px #666;
    font-size: 3rem;
    text-align: center;
  }
  .headingContainer {
    margin-top: 10rem;
  }
`;

export const StyledLogo = styled.span`
  font-family: "Montserrat Alternates", sans-serif;
  color: ${colors.accent2};
  margin: auto;
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
  margin: auto;
  padding: var(--space-m);
  border-radius: 80px;
  width: 17rem;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.25); */
  /* z-index: 10; */
  background-color: white;
  border: 8px solid ${colors.accent2};

  h2 {
    margin: 0;
    color: ${colors.accent2};
    letter-spacing: 0;
    text-transform: none;
  }
`;
export const StyledMain = styled.main`
  width: 100%;
  margin-top: calc(6 * var(--space-l));
`;
export const StyledCarrousel = styled.section`
  padding: 30vh 1rem;
  background-color: ${lighten(0.18, colors.accent2)};
  clip-path: polygon(0 7%, 100% 20%, 100% 100%, 0 90%);
  margin-top: calc(-1 * var(--space-l));

  z-index: 1;
  > div {
    height: 450px;
    width: 900px;
    background-color: gray;
    margin: auto;
  }
`;

export const StyledAbout = styled.section`
  width: 60%;
  padding: var(--space-l);
  border: var(--border) solid ${colors.gray};
  margin: 30vh auto;
  border-radius: var(--border-radius);
  text-align: center;

  h3 {
    line-height: 29px;
    font-size: 1.5rem;
    font-weight: 300;
    text-transform: none;
    letter-spacing: 0;
  }
`;

export const StyledEndSoon = styled.section`
  clip-path: polygon(0 16%, 100% 0, 100% 100%, 0 100%);
  padding: 30vh 0 20vh 0;
  background-color: rgb(252, 230, 152);
  > div {
    display: flex;
    flex-direction: column;
    > * {
      margin: var(--space-m) auto;
    }
  }
`;

export const StyledForCafe = styled.section`
  margin: 15vh 0 30vh 0;
  display: flex;
  align-items: center;
  > h2 {
    margin-right: var(--space-m);
  }
`;
