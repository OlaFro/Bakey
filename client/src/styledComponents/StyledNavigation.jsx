import styled from "styled-components";
import { Menu, X } from "styled-icons/feather";
import device from "./device";
import colors from "./colors";

export const StyledNavigation = styled.nav`
  width: 100%;
  padding: var(--space-xs);
  z-index: 1;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  background-color: white;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  a {
    text-decoration: none;
    color: inherit;
    padding: var(--space-xs);
  }

  @media ${device.tabletLandscape} {
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
  margin-left: var(--space-xs);

  @media ${device.tabletLandscape} {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-left: 0;
  }

  .active {
    text-decoration: underline;
    text-decoration-color: ${colors.accent2};
    text-decoration-thickness: 3px;
    text-underline-position: under;
  }
`;

export const StyledNavBtnsContainer = styled.section`
  grid-area: btnsContainer;
  display: ${(props) => (props.display ? "flex" : "none")};
  flex-direction: column;
  align-items: flex-start;

  @media ${device.tabletLandscape} {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    /* margin-right: 1rem; */
  }

  a {
    text-align: center;
    color: ${colors.accent2};
    font-family: var(--logo);
    font-weight: 700;
    margin-left: var(--space-xs);
    @media ${device.tabletLandscape} {
      margin-left: 0;
    }
  }

  span {
    cursor: pointer;
    padding: var(--space-xs);
    text-align: center;
    color: ${colors.accent2};
    font-family: var(--logo);
    font-weight: 700;
    margin-left: var(--space-xs);
    @media ${device.tabletLandscape} {
      margin-left: 0;
    }
  }
`;

// export const StyledNavBtn = styled.div`
//   font-family: var(--headings);
//   text-align: left;
//   margin: var(--space-xs) 0;

//   @media ${device.tabletLandscape} {
//     margin: var(--space-xs) var(--space-s);
//     padding: var(--space-xs) var(--space-s);
//     border-radius: calc(2 * var(--border-radius));
//     font-weight: 700;
//     font-size: 0.9rem;
//     text-transform: uppercase;
//     letter-spacing: var(--ls);
//     transition: all 200ms;
//     a {
//       padding-right: 0;
//     }
//   }

//   ${(props) =>
//     props.registration &&
//     css`
//       @media ${device.tabletLandscape} {
//         background-color: ${colors.accent1};
//         border: var(--border) solid ${colors.accent1};
//         :hover {
//           cursor: pointer;
//           background-color: ${darken(0.1, colors.accent1)};
//           border: var(--border) solid ${darken(0.1, colors.accent1)};
//         }
//       }
//     `};
//   ${(props) =>
//     props.login &&
//     css`
//       @media ${device.tabletLandscape} {
//         background-color: white;
//         border: var(--border) solid ${colors.accent1};
//         color: ${colors.black};
//         margin-right: var(--space-xs);
//         :hover {
//           cursor: pointer;
//           border: var(--border) solid ${darken(0.1, colors.accent1)};
//           background: white;
//           color: ${darken(0.1, colors.accent1)};
//         }
//       }
//     `};
// `;

export const StyledMenu = styled(Menu)`
  height: 30px;
  cursor: pointer;
  display: ${(props) => (props.display ? "none" : "flex")};
  align-self: center;
  color: ${colors.accent2};
  stroke-width: 2px;
  margin-right: var(--space-xs);
  @media ${device.tabletLandscape} {
    display: none;
  }
`;

export const StyledExit = styled(X)`
  height: 30px;
  cursor: pointer;
  display: ${(props) => (props.display ? "flex" : "none")};
  color: ${colors.accent2};
  stroke-width: 2px;
  margin-right: var(--space-xs);
  @media ${device.tabletLandscape} {
    display: none;
  }
`;
