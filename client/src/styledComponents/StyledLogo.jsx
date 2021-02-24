import styled from "styled-components";
import device from "./device";

const StyledLogo = styled.div`
  font-family: var(--logo);
  font-size: 1.5rem;
  font-weight: 500;
  padding: 0;
  @media ${device.desktop} {
    padding-right: var(--space-xs);
  }
`;

export default StyledLogo;
