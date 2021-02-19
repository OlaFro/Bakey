import styled, { css } from "styled-components";
import colors from "../styledComponents/colors";
import { lighten } from "polished";
import { Tag } from "styled-icons/boxicons-solid";

export const StyledListingContainer = styled.div`
  width: 90%;
  max-width: 800px;
  height: 320px;

  display: grid;
  grid-template-columns: 40% 60%;

  /* just temporal */
  margin: 10rem 0 25rem 0;
`;

export const StyledPhotoContainer = styled.div`
  height: 100%;
  background-image: url("https://images.unsplash.com/photo-1604184811623-129a299b1322?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80");
  background-size: contain;
`;

export const StyledDescContainer = styled.div`
  height: 100%;
  background-color: ${lighten(0.25, colors.gray)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  > h2 {
  }
  > div {
    display: flex;
  }
`;

export const StyledTagContainer = styled.div`
  flex-wrap: wrap;
  justify-content: center;
  width: 80%;
`;

export const StyledTag = styled.span`
  border-radius: 3px;
  padding: 0.2rem 0.4rem;
  margin: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
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
