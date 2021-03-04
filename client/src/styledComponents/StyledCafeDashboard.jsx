import styled from "styled-components";
import device from "./device";

export const StyledCafeDashboard = styled.div`
  margin: var(--space-m);
  text-align: center;
  @media ${device.tabletPortrait} {
    margin: var(--space-l);
  }

  .offers-wrapper {
    margin: auto;
    width: 100%;
    max-width: 1650px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media ${device.bigDesktop} {
      justify-content: space-between;
    }
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

export const StyledButtonContainer = styled.section`
  width: 90%;
  max-width: 1000px;
  margin: var(--space-xl) auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  button {
    margin-bottom: var(--space-m);
  }

  @media ${device.tabletPortrait} {
    flex-direction: row;
    flex-wrap: wrap;

    button {
      padding: var(--space-s) var(--space-m);
      order: 0;
    }
  }
`;
