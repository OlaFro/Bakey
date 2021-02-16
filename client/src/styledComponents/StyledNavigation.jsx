import styled, { css } from "styled-components";
import { Menu, X } from "styled-icons/feather";
import device from "./device";
import colors from "./colors";
import { darken } from "polished";

export const StyledNavigation = styled.nav`
  width: 100%;
  padding: var(--space-xs);
  z-index: 1;
  position: sticky;
  display: flex;
  flex-direction: column;

  a {
    text-decoration: none;
    color: inherit;
    padding-right: var(--space-xs);
  }

  @media ${device.desktop} {
    display: grid;
    grid-template-columns: auto 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "logoContainer navContainer btnsContainer";
  }
`;
export const StyledLogoContainer = styled.section`
  grid-area: logoContainer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const StyledNavContainer = styled.section`
  grid-area: navContainer;
  display: ${(props) => (props.display ? "flex" : "none")};
  flex-direction: column;
  font-family: var(--headings);
  @media ${device.desktop} {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const StyledNavBtnsContainer = styled.section`
  grid-area: btnsContainer;
  display: ${(props) => (props.display ? "flex" : "none")};
  flex-direction: column;
  @media ${device.desktop} {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }
`;

export const StyledNavBtn = styled.div`
  font-family: var(--headings);
  text-align: left;
  @media ${device.desktop} {
    padding: var(--space-xs);
    border-radius: var(--border-radius);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: var(--ls);
    transition: all 1000ms;
  }

${(props) =>
  props.registration &&
  css`
    @media ${device.desktop} {
      background-color: ${colors.accent2};
      border: var(--border) solid ${colors.accent2};
      :hover {
        cursor: pointer;
        background-color: ${darken(0.1, colors.accent2)};
      }
      :active {
        background-color: white;
        border: var(--border) solid ${darken(0.1, colors.accent2)};
        color: var(--black);
      }
    }
  `};
  ${(props) =>
    props.login &&
    css`
      @media ${device.desktop} {
        background-color: white;
        border: var(--border) solid ${colors.accent2};
        color: ${colors.accent2};
        margin-right: var(--space-xs);
        :hover {
          cursor: pointer;
          border: var(--border) solid ${darken(0.1, colors.accent2)};
          background: white;
          color: ${darken(0.1, colors.accent2)};
        }
        :active {
          background-color: ${colors.accent2};
          border: var(--border) solid ${colors.accent2};
          color: var(--black);
        }
      }
    `};
  `;

export const StyledMenu = styled(Menu)`
  height: 30px;
  cursor: pointer;
  display: ${(props) => (props.display ? "none" : "flex")};
  @media ${device.desktop} {
    display: none;
  }
  align-self: flex-end;
  justify-self: flex-start;
`;

export const StyledExit = styled(X)`
  height: 30px;
  cursor: pointer;
  display: ${(props) => (props.display ? "flex" : "none")};
  @media ${device.desktop} {
    display: none;
  }
`;
