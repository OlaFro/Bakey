import styled from "styled-components";
import device from "./device";

const StyledCafeDashboard = styled.div`
  margin: var(--space-m);
  @media ${device.tabletPortrait} {
    margin: var(--space-l);
  }
`;

export default StyledCafeDashboard;
