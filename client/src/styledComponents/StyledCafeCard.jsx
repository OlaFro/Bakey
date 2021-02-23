import styled from "styled-components";
import { lighten, darken } from "polished";
import colors from "./colors";
import device from "./device";

export const StyledCafeCard = styled.div`
  width: 90%;
  max-width: 600px;
  background-color: ${lighten(0.28, colors.gray)};

  header {
    display: flex;
    > div {
      display: flex;
      flex-direction: column;
    }
  }
`;
