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
    color: ${colors.accent1};
    text-transform: uppercase;
    letter-spacing: 5px;
  }
`;

export default StyledWarning;
