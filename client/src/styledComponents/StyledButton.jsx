import styled, { css } from "styled-components";
import colors from "./colors";
import { darken } from "polished";

const StyledButton = styled.button`
  font-family: var(--headings);
  background-color: ${colors.accent1};
  border: var(--border) solid transparent;
  color: var(--black);
  font-size: 1rem;
  padding: var(--space-s) var(--space-m);
  border-radius: var(--border-radius);
  text-transform: uppercase;
  letter-spacing: var(--ls);
  font-weight: 700;
  transition: background-color 200ms;

  :hover {
    cursor: pointer;
    background-color: ${darken(0.1, colors.accent1)};
  }
  :active {
    background-color: white;
    border: var(--border) solid ${colors.accent1};
    color: var(--black);
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
        color: var(--black);
      }
    `};
`;

export default StyledButton;
