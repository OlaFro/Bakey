import styled, { css } from "styled-components";
import size from "./device";

const StyledCentered = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  ${(props) =>
    props.settings &&
    css`
      text-align: center;
    `}
    @media (max-width: 600px) {
      padding-left: var(--space-s);
      padding-right: var(--space-s);
    }
  
`;

export default StyledCentered;
