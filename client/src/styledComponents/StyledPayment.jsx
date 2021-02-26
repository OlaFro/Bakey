import styled from "styled-components";
import { lighten, darken } from "polished";
import colors from "./colors";
import device from "./device";

export const StyledPaymentContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledCreditCard = styled.div`
  height: 400px;
  width: 90%;
  max-width: 600px;
  border: var(--border) solid ${colors.accent1};
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;

  > header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 80%;

    @media ${device.tabletPortrait} {
      flex-direction: row;
    }

    > div {
      display: flex;
      align-items: center;
      > :first-child {
        margin-right: -7px;
      }
    }
  }
  > main {
    width: 80%;

    > div {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const StyledSmallInputs = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  @media ${device.tabletPortrait} {
    flex-direction: row;
  }

  > div {
    display: flex;
    /* border: 1px solid red; */

    > div {
      margin-right: var(--space-s);
    }
  }
`;
