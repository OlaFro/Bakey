import styled from "styled-components";

export const StyledInputContainer = styled.div`
  position: relative;
`;

export const StyledLabel = styled.label`
  position: absolute;
  top: 22%;
  left: 15px;
  transition: all 150ms ease-in-out;
`;

export const StyledInputField = styled.input`
  padding: 0.5rem;
  background-color: none;
  :focus + label {
    font-size: 0.8rem;
    top: -20%;
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
