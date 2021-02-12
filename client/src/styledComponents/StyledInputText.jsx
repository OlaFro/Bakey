import styled from "styled-components";
import { darken } from "polished";
import colors from "./colors";

export const StyledInputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  & small {
    padding: 5px;
  }
`;

export const StyledLabel = styled.label`
  position: absolute;
  font-family: var(--heading);
  top: 1rem;
  left: 15px;
  transition: all 200ms ease-in-out;
`;

export const StyledInputField = styled.input`
  padding: 1rem;
  background-color: white;
  font-size: 1rem;
  font-family: var(--heading);
  border: var(--border) solid ${colors.gray};
  border-radius: 6px;

  :hover {
    cursor: text;
    border: var(--border) solid ${darken(0.2, colors.gray)};
  }
  :focus {
    outline: none;
    border: var(--border) solid ${colors.accent2};
  }

  :focus + label,
  :not(:placeholder-shown) + label {
    font-size: 0.9rem;
    top: -0.5rem;
    left: 10px;
    background: white;
    padding: 0 0.2rem;
  }
`;