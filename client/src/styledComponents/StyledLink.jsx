import styled, { css } from "styled-components";
import colors from "./colors";
import { darken } from "polished";

const StyledLink = styled.div`
  font-family: var(--headings);
  width: fit-content;
  background-color: ${colors.accent2};
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
    background-color: ${darken(0.1, colors.accent2)};
  }
  :active {
    background-color: white;
    border: var(--border) solid ${colors.accent2};
    color: var(--black);
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default StyledLink;
