import styled from "styled-components";
import colors from "./colors";
import device from "./device";

export const StyledPaymentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: calc(1.5 * var(--space-l)) 0;
`;

export const StyledCreditCard = styled.div`
  width: 90%;
  max-width: 600px;
  background-color: white;
  border: var(--border) solid ${colors.accent1};
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  > p {
    cursor: pointer;
    position: absolute;
    top: -40px;
    left: 0px;
    font-size: 0.8rem;
  }

  > header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 80%;

    @media ${device.tabletPortrait} {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    > div {
      display: flex;
      align-items: center;
      margin-left: -10px;
      margin-top: -20px;

      > :first-child {
        margin-top: 1px;
        margin-right: -7px;
      }

      @media ${device.tabletPortrait} {
        margin-top: 0px;
        > :first-child {
          margin-right: -7px;
        }
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
  > button {
    margin: var(--space-s) 0;
    transform: scale(0.7);
    @media ${device.mobile} {
      transform: scale(1);
    }
  }
`;

export const StyledSmallInputs = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.tabletPortrait} {
    flex-direction: row;
    margin-top: -15px;
  }

  > div {
    display: flex;

    > div {
      margin-right: var(--space-s);
    }
  }
`;
