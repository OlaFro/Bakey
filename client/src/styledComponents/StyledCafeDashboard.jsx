import styled from "styled-components";
import device from "./device";

const StyledCafeDashboard = styled.div`
  margin: var(--space-m);
  text-align: center;
  @media ${device.tabletPortrait} {
    margin: var(--space-l);
  }

  .offers-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  h3 {
    margin-bottom: var(--space-m);
  }
`;

export default StyledCafeDashboard;
