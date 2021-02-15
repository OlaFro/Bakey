import styled from "styled-components";
import { Menu, X } from "styled-icons/feather";
import device from "./device";

export const StyledNavigation = styled.nav`
  width: 100%;
  padding: 10px;
  border: 1px solid red;
  z-index: 1;
  display: flex;
  flex-direction: column;

  a {
    text-decoration: none;
    color: inherit;
    padding: 0 5px;
  }

  @media ${device.desktop} {
    display: grid;
    grid-template-columns: 0.2fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "logoContainer navContainer btnsContainer";
  }
`;
export const StyledLogoContainer = styled.section `
grid-area: logoContainer;
display: flex;
justify-content: space-between;
`;
export const StyledNavContainer = styled.section`
  grid-area: navContainer;
  display: ${(props) => (props.display ? "flex" : "none")};
  flex-direction: column;
  border: 1px solid blue;
  font-family: var(--headings);
  font-size: 15px;
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
  border: 1px solid green;
  @media ${device.desktop} {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }
`;

export const StyledMenu = styled(Menu)`
  height: 3rem;
  cursor: pointer;
  display: ${(props) => (props.display ? "none" : "flex")};
  @media ${device.desktop} {
    display: none;
  }
  align-self: flex-end;
  justify-self: flex-start;
`;

export const StyledExit = styled(X)`
  height: 2.5rem;
  cursor: pointer;
  display: ${(props) => (props.display ? "flex" : "none")};
  @media ${device.desktop} {
    display: none;
  }
`;

