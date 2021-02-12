import styled from "styled-components";

export const StyledInputContainer = styled.div`
  position: relative;
  margin: 20rem 20rem;
`;

export const StyledLabel = styled.label`
  position: absolute;
  bottom: 25%;
  left: 1%;
  transition: all 250ms ease-in-out;
`;

export const StyledInputField = styled.input`
  padding: 0.5rem;
  :focus ~ label {
    font-size: 0.8rem;
    top: -20%;
  }
`;
