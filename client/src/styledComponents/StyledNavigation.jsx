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
  background-color: white;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  a {
    text-decoration: none;
    color: inherit;
    padding: var(--space-xs);
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
    margin: var(--space-xs) var(--space-s);
    padding: var(--space-xs) var(--space-s);
    border-radius: calc(2 * var(--border-radius));
    font-weight: 700;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: var(--ls);
    transition: all 200ms;
    a {
      padding-right: 0;
    }
  }

  ${(props) =>
    props.registration &&
    css`
      @media ${device.desktop} {
        background-color: ${colors.accent1};
        border: var(--border) solid ${colors.accent1};
        :hover {
          cursor: pointer;
          background-color: ${darken(0.1, colors.accent1)};
          border: var(--border) solid ${darken(0.1, colors.accent1)};
        }
      }
    `};
  ${(props) =>
    props.login &&
    css`
      @media ${device.desktop} {
        background-color: white;
        border: var(--border) solid ${colors.accent1};
        color: ${colors.black};
        margin-right: var(--space-xs);
        :hover {
          cursor: pointer;
          border: var(--border) solid ${darken(0.1, colors.accent1)};
          background: white;
          color: ${darken(0.1, colors.accent1)};
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
