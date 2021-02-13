import styled from "styled-components";
import colors from "./colors";
import { darken } from "polished";

const StyledButton = styled.button`
  font-family: var(--headings);
  background-color: ${(props) =>
    props.cafe
      ? `var(--border) solid ${colors.accent2}`
      : `var(--border) solid ${colors.accent1}`};
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
  :focus {
    outline: none;
    border: var(--border) solid ${colors.accent1};
  }
`;

export default StyledButton;
