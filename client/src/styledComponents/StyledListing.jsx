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
`;

export const StyledAllergenesContainer = styled.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  padding: var(--space-xs) var(--space-s);
  font-size: 0.8rem;
`;

export const StyledTag = styled.span`
  border-radius: calc(var(--border-radius) / 4);
  padding: calc(0.2 * var(--space-s)) calc(0.4 * var(--space-s));
  margin: 0.3rem;

  color: white;
  font-size: 0.7rem;
  letter-spacing: 1.5px;
  font-weight: 700;

  ${(props) =>
    props.vegan &&
    css`
      background-color: #74a857;
    `};
  ${(props) =>
    props.organic &&
    css`
      background-color: #8282e4;
    `};
  ${(props) =>
    props.lactose &&
    css`
      background-color: #7aac9f;
    `};
  ${(props) =>
    props.gluten &&
    css`
      background-color: #e2c472;
    `};
  ${(props) =>
    props.gluten &&
    css`
      background-color: #e2c472;
    `};
  ${(props) =>
    props.sugar &&
    css`
      background-color: #e272c6;
    `};
  ${(props) =>
    props.wheat &&
    css`
      background-color: #c5ac76;
    `};
`;
export const StyledDescContainer = styled.div`
  height: 100%;
  background-color: ${lighten(0.25, colors.gray)};
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-around;
  padding-left: var(--space-s);
  > header {
    > h2 {
      margin: 0;
    }
    display: flex;
    flex-direction: row;
  }
  > div {
    display: flex;
  }
`;
