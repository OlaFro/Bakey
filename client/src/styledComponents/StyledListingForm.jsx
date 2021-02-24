import styled from "styled-components";
import device from "./device";

export const StyledListingSteps = styled.div`
  margin: var(--space-s) 0 calc(2 * var(--space-l)) 0;

  > div,
  > form,
  > .communication {
    width: 100%;
    margin: auto;
  }
  > h3 {
    margin: var(--space-l) auto;
  }

  > .communication {
    display: flex;
    flex-direction: column;

    @media ${device.tabletLandscape} {
      flex-direction: row;
      justify-content: space-between;
    }

    > div {
      margin: var(--space-s) auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media ${device.tabletLandscape} {
        margin: 0;
      }
      > p {
        text-align: center;
      }
      > button,
      > a {
        margin-top: var(--space-s);
      }
    }
  }
`;
