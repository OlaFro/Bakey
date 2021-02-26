import styled from "styled-components";
import { lighten, darken } from "polished";
import colors from "./colors";
import device from "./device";

export const StyledPaymentContainer = styled.div``;

export const StyledCreditCard = styled.div`
  width: 90%;
  max-width: 600px;

  > header {
    display: flex;
    align-items: space-between;

    > div {
      display: flex;
      align-items: center;
      > :first-child {
        margin-right: -7px;
      }
    }
  }
`;
