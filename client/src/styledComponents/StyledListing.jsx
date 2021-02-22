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
  grid-template-rows: 400px auto;
  border-radius: var(--border-radius);
  overflow: hidden;

  @media ${device.tabletLandscape} {
    max-width: 800px;
    height: 400px;
    grid-template-columns: 50% 50%;
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
`;

export const StyledDescContainer = styled.div`
  background-color: ${lighten(0.28, colors.gray)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-xs) var(--space-xs);

  > header {
    text-align: center;
    margin: 0;

    > h3 {
      margin: 0;
    }
    /* cafe name */
    > span {
      padding: var(--space-xs) 0;
      font-size: 0.9rem;
    }
  }

  /* container with timers and btn container */
  > div {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  /* amount of pieces left */
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
  padding: var(--space-xs);
  display: ${(props) => (props.display ? "block" : "none")};
  > p {
    margin: 0;
    font-size: 0.7rem;
    font-weight: 700;
    text-align: center;
  }
`;

export const StyledTagContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  width: 55%;
  padding: var(--space-xs) 0;

   p {
     margin-top: 0;
     padding-right: var(--space-xs);
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
  margin-right: var(--space-xs);
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
        background-color: rgba(255, 255, 255, 0.7);
        position: absolute;
        top: -5px;
        transform: rotate(45deg);
      }
    `}

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

export const StyledTimers = styled.div`
  display: grid;
  column-gap: calc(2 * var(--space-l));
  > section > span,
  > section > strong {
    font-size: 0.8rem;
  }
`;

export const StyledBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-area: btn;
  margin-top: var(--space-s);

  @media ${device.tabletLandscape} {
    margin-top: 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
