import styled from "styled-components";
import { darken } from "polished";
import colors from "./colors";
import { EyeClose, Eye, ArrowDown } from "styled-icons/remix-line";

export const StyledForm = styled.form`
  border: var(--border) solid ${colors.accent1};
  padding: 3rem 4rem;
  border-radius: var(--border-radius);
  position: relative;
  > Header {
    background-color: white;
    padding: 0.5rem 1rem;
    position: absolute;
    top: -2.8rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 700;
  }
`;

export const StyledInputContainer = styled.div`
  width: 25rem;
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 2rem 0;

  & small {
    padding: 5px;
    color: red;
  }
`;

export const StyledLabel = styled.label`
  position: absolute;
  font-family: var(--heading);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 500;
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
  border-radius: var(--border-radius);

  :hover {
    cursor: text;
    border: var(--border) solid ${darken(0.2, colors.gray)};
  }
  :focus {
    outline: none;
    border: var(--border) solid ${colors.accent1};
  }

  :focus + label,
  :not(:placeholder-shown) + label {
    font-size: 0.8rem;
    top: -0.5rem;
    left: 13px;
    background: white;
    padding: 0 0.2rem;
    letter-spacing: 2px;
  }
`;

export const StyledSelect = styled.select`
  border: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -ms-appearance: none;
  padding: 1rem;
  background-color: white;
  font-size: 1rem;
  font-family: var(--heading);
  border: var(--border) solid ${colors.gray};
  border-radius: var(--border-radius);

  :hover {
    cursor: pointer;
    border: var(--border) solid ${darken(0.2, colors.gray)};
  }
  :focus {
    outline: none;
    border: var(--border) solid ${colors.accent1};
    font-family: var(--heading);
  }

  :focus + label,
  :not(:placeholder-shown) + label {
    font-size: 0.8rem;
    top: -0.5rem;
    left: 13px;
    background: white;
    padding: 0 0.2rem;
    letter-spacing: 2px;
  }
`;

export const StyledEyeClose = styled(EyeClose)`
  width: 1rem;
  height: 1rem;
  position: absolute;
  right: 12px;
  top: 1.2rem;
  cursor: pointer;
`;

export const StyledEye = styled(Eye)`
  width: 1rem;
  height: 1rem;
  position: absolute;
  right: 12px;
  top: 1.2rem;
  cursor: pointer;
`;

export const StyledArrow = styled(ArrowDown)`
  width: 1rem;
  position: absolute;
  right: 12px;
  top: 1.2rem;
  pointer-events: none;
`;
