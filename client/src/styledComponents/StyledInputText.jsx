import styled from "styled-components";
import { lighten, darken } from "polished";

export const StyledInputContainer = styled.div`
  position: relative;
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
  border: 1px solid #acacac;
  border-radius: 6px;

  :focus {
    border: 20px solid var(--accent1);
  }

  :focus + label {
    font-size: 0.8rem;
    top: -0.5rem;
    left: 10px;
    background: white;
    padding: 0 0.2rem;
  }

  :not(:placeholder-shown) + label {
    font-size: 0.8rem;
    top: -20%;
    left: 10px;
    background: white;
    padding: 0 0.2rem;
  }
`;
