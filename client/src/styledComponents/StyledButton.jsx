import styled, { css } from "styled-components";
import colors from "./colors";
import { darken } from "polished";

const StyledButton = styled.button`
  font-family: var(--headings);
  background-color: ${colors.accent1};
  border: var(--border) solid transparent;
  color: white;
  font-size: 1rem;
  padding: 1rem 2rem;
  border-radius: var(--border-radius);
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 700;
  transition: background-color 200ms;

  :hover {
    cursor: pointer;
    background-color: ${darken(0.1, colors.accent1)};
  }
  :active {
    background-color: white;
    border: var(--border) solid ${colors.accent1};
    color: ${colors.accent1};
  }

  ${(props) =>
    props.cafe &&
    css`
      background-color: ${colors.accent2};
      :hover {
        cursor: pointer;
        background-color: ${darken(0.1, colors.accent2)};
      }
      :active {
        background-color: white;
        border: var(--border) solid ${colors.accent2};
        color: ${colors.accent2};
      }
    `};
`;

export default StyledButton;
