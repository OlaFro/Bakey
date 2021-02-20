import styled, { css } from "styled-components";
import colors from "../styledComponents/colors";
import { lighten } from "polished";

export const StyledListingContainer = styled.div`
  width: 90%;
  max-width: 800px;
  height: 500px;

  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-areas: "photo desc" "btn btn";
  border-radius: var(--border-radius) var(--border-radius) 0 0;
  overflow: hidden;

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
  height: 100%;
  background-color: ${lighten(0.28, colors.gray)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-s);
  grid-area: desc;

  > header {
    text-align: center;
    margin: 0;
    > h3 {
      margin: 0 0 var(--space-xs) 0;
      font-size: 1rem;
      text-transform: uppercase;
      letter-spacing: var(--ls);
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

export const StyledTimers = styled.div`
  display: grid;
  column-gap: calc(2 * var(--space-l));
  > section > span,
  > section > strong {
    font-size: 0.9rem;
  }
`;

export const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const StyledTagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const StyledAllergenesContainer = styled.div`
  width: 100%;
  background-color: ${lighten(0.28, colors.gray)};
  padding: var(--space-xs);
  font-size: 0.8rem;
  font-weight: 700;
  text-align: left;
  > p {
    margin: 0;
  }
`;

export const StyledTag = styled.span`
  border-radius: calc(var(--border-radius) / 4);
  padding: calc(0.4 * var(--space-s)) calc(0.4 * var(--space-s));
  margin: calc(0.3 * var(--space-s));
  color: white;
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: calc(0.5 * var(--ls));
  font-weight: 700;

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
    `};
`;

export const StyledBtnContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  grid-area: btn;
  background-color: ${lighten(0.24, colors.gray)};
  border-radius: 0 0 var(--border-radius) var(--border-radius);
`;
