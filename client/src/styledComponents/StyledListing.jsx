import styled, { css } from "styled-components";
import colors from "../styledComponents/colors";
import device from "./device";
import { lighten } from "polished";
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "styled-icons/material-sharp";

export const StyledListingContainer = styled.div`
  width: 90%;
  max-width: 400px;

  display: grid;
  grid-template-rows: 400px auto auto;
  grid-template-areas: "photo" "desc" "btn";
  border-radius: var(--border-radius) var(--border-radius) 0 0;
  /* overflow: hidden; */

  @media ${device.tabletLandscape} {
    max-width: 800px;
    height: 475px;
    grid-template-columns: 50% 50%;
    grid-template-areas: "photo desc" "btn btn";
  }

  /* just temporal */
  margin: 10rem 0 25rem 0;
`;

export const StyledPhotoContainer = styled.div`
  height: 100%;
  background-image: url("https://images.unsplash.com/photo-1578775887804-699de7086ff9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=675&q=80");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  grid-area: photo;
`;

export const StyledDescContainer = styled.div`
  background-color: ${lighten(0.28, colors.gray)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-s) 0 0 0;
  grid-area: desc;

  > header {
    text-align: center;
    margin: 0;

    > h3 {
      margin: 0;
      font-size: 1rem;
      text-transform: uppercase;
      letter-spacing: var(--ls);
      position: relative;
    }
    > span {
      padding: var(--space-xs) 0;
    }
  }

  > div {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  > span {
    font-size: 0.9rem;
  }
`;
export const StyledMore = styled(KeyboardArrowDown)`
  width: 1.5rem;
  cursor: pointer;
  display: ${(props) => props.display};
`;
export const StyledLess = styled(KeyboardArrowUp)`
  width: 1.5rem;
  cursor: pointer;
  display: ${(props) => props.display};
`;

export const StyledAllergenesContainer = styled.div`
  width: 100%;
  background-color: ${lighten(0.28, colors.gray)};
  padding: var(--space-xs);
  font-size: 0.7rem;
  font-weight: 700;
  text-align: center;

  > p {
    margin: 0;
  }
  display: ${(props) => (props.display ? "block" : "none")};
`;

export const StyledTagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: auto;
  width: 60%;
  padding: var(--space-xs) 0;
`;

export const StyledBtnContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  grid-area: btn;
  height: 75px;
`;

export const StyledTimers = styled.div`
  display: grid;
  column-gap: calc(2 * var(--space-l));
  > section > span,
  > section > strong {
    font-size: 0.9rem;
  }
`;

export const StyledTag = styled.span`
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-content: center;
  font-weight: 700;
  padding: calc(var(--space-xs) / 3);
  position: relative;
  overflow: hidden;
  cursor: pointer;

  ${(props) =>
    props.no &&
    css`
  ::after {
    content: "";
    height: 2rem;
    width: 2px;
    background-color: #fff3f3;
    position: absolute;
    top: -5px;
    transform: rotate(45deg);`}
    }

  ${(props) =>
    props.vegan &&
    css`
      background-color: ${colors.vegan};
    `};
  ${(props) =>
    props.organic &&
    css`
      background-color: ${colors.organic};
    `};
  ${(props) =>
    props.lactose &&
    css`
      background-color: ${colors.lactose};
    `};
  ${(props) =>
    props.gluten &&
    css`
      background-color: ${colors.gluten};
    `};
  ${(props) =>
    props.sugar &&
    css`
      background-color: ${colors.sugar};
    `};
  ${(props) =>
    props.wheat &&
    css`
      background-color: ${colors.wheat};
    `}
`;
