import styled from "styled-components";
import device from "./device";

export const StyledCafeDashboard = styled.div`
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

export const StyledQuickLinks = styled.section`
  width: 90%;
  max-width: 1000px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media ${device.tabletPortrait} {
    justify-content: space-around;
  }

  div {
    flex: 1;
  }
`;
