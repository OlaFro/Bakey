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
`;

export default StyledWarning;
