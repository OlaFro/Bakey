import styled, { css } from "styled-components";
import colors from "../styledComponents/colors";
import { lighten } from "polished";

export const StyledListingContainer = styled.div`
  width: 90%;
  max-width: 800px;
  height: 400px;

  display: grid;
  grid-template-columns: 50% 50%;

  /* just temporal */
  margin: 10rem 0 25rem 0;
`;

export const StyledPhotoContainer = styled.div`
  height: 100%;
  background-image: url("https://images.unsplash.com/photo-1604184811623-129a299b1322?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

export const StyledTagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  margin: var(--space-xs);
`;

export const StyledAllergenesContainer = styled.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  padding: var(--space-xs) var(--space-s);
  font-size: 0.8rem;
`;

export const StyledTag = styled.span`
  border-radius: calc(var(--border-radius) / 4);
  padding: calc(0.4 * var(--space-s)) calc(0.4 * var(--space-s));
  margin: calc(0.3 * var(--space-s));
  color: white;
  font-size: 0.7rem;
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
export const StyledDescContainer = styled.div`
  height: 100%;
  background-color: ${lighten(0.25, colors.gray)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: calc(0.4 * var(--space-s));

  > header {
    text-align: center;
    margin: 0;
    > h3 {
      text-transform: uppercase;
      margin: 0 0 var(--space-xs) 0;
    }
  }

  > div {
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
  }
`;

export const StyledCounter = styled.div`
  height: 7rem;
  width: 7rem;
  border-radius: 50%;
  border: 30px solid ${colors.accent1};
`;

export const StyledTimeLeft = styled.div``;
