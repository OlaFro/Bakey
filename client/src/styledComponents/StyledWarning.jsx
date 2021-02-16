import styled from "styled-components";
import colors from "./colors";
import { lighten } from "polished";

const StyledWarning = styled.div`
  border: var(--border) solid ${lighten(0.2, colors.warning)};
  width: 320px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & h2 {
    font-size: 2rem;
    margin: var(--space-xs);
    color: ${colors.warning};
    text-transform: uppercase;
    letter-spacing: var(--ls);
  }
  & p {
    margin: var(--space-xs) 0 var(--space-s) 0;
    color: ${colors.warning};
  }
`;

export default StyledWarning;
