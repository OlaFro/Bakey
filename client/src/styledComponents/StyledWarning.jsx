import styled from "styled-components";
import colors from "./colors";

const StyledWarning = styled.div`
  border: var(--border) solid ${colors.accent1};
  width: 20rem;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & h2 {
    font-size: 2rem;
    margin: 0.5rem;
    color: ${colors.accent1};
    text-transform: uppercase;
    letter-spacing: 5px;
  }
  & p {
    margin: 0.5rem 0 1rem 0;
  }
`;

export default StyledWarning;
