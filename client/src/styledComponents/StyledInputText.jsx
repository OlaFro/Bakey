import styled from "styled-components";

export const StyledInputContainer = styled.div`
  position: relative;
`;

export const StyledLabel = styled.label`
  position: absolute;
  top: 22%;
  left: 1%;
  transition: all 150ms ease-in-out;
`;

export const StyledInputField = styled.input`
  padding: 0.5rem;
  :focus ~ label {
    font-size: 0.8rem;
    top: -20%;
    background: white;
    padding: 0 0.2rem;
  }
`;
