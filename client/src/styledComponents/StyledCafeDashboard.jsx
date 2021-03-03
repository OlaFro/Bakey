import styled from "styled-components";
import device from "./device";

const StyledCafeDashboard = styled.div`
  margin: var(--space-m);
  @media ${device.tabletPortrait} {
    margin: var(--space-l);
  }

  .offers-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export default StyledCafeDashboard;
