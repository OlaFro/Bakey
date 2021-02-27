import styled from "styled-components";
import { lighten } from "polished";
import colors from "./colors";
import device from "./device";

export const StyledLoader = styled.div`
  display: ${(props) => props.display};
  flex-direction: column;
  align-items: center;
  span {
    margin: var(--space-m) 0;
  }
`;
