import styled, { css } from "styled-components";
import device from "./device";

export const StyledHeader = styled.header`
  width: 90%;
  max-width: 1200px;

  position: relative;
`;
export const StyledBackgroundPic = styled.figure`
  margin: auto;
  width: 90%;
  max-width: 1200px;
  height: 200px;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media ${device.tabletPortrait} {
    height: 400px;
  }
`;

export const StyledLogo = styled.figure`
  margin: 0;
  width: 150px;
  height: 150px;
  border-radius: 100%;
  border: 5px solid white;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 10px 14px -2px #b9b9b9;
  z-index: 5;
  overflow: hidden;
  @media ${device.tabletPortrait} {
    width: 200px;
    height: 200px;
    border: 15px solid white;
    box-shadow: 0px 10px 24px -2px #b9b9b9;
  }
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
  }
`;

export const StyledContentContainer = styled.main`
  width: 80%;
  max-width: 800px;
  margin-top: calc(var(--space-l) * 2);
  text-align: center;
  > h4 {
    margin: var(--space-xs) 0;
  }
  /* we can move <a> to global but than we need to adjust the links in the navbar */
  a {
    color: #4a4a4a;
    text-decoration: none;
    border-bottom: 3px solid #ed8db2;
    :hover {
      border-bottom: 3px solid transparent;
    }
  }
`;

export const StyledBtnContainer = styled.div`
  width: 60%;
  margin: auto;
  display: flex;
  flex-direction: column;
  > button {
    margin: var(--space-xs) 0;
    padding: var(--space-xs);
  }
  @media ${device.tabletPortrait} {
    width: 60%;
    flex-direction: row;
    justify-content: space-around;
    > button {
      padding: var(--space-s) var(--space-m);
      margin: 0 var(--space-s);
    }
  }
`;

export const StyledAbout = styled.div`
  display: ${(props) => props.display};
`;

export const StyledAddress = styled.div`
  display: ${(props) => props.display};
  width: 50%;
  flex-direction: column;
  align-items: flex-start;
  margin: var(--space-s) 0;
  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: var(--space-xs) 0;
  }
  > span {
    padding: calc(var(--space-xs) / 2) 0;
  }
`;

export const StyledListingContainer = styled.div`
  > div {
    margin: var(--space-l) 0;
  }
  margin-bottom: calc(5 * var(--space-l));
`;
