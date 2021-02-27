import styled from "styled-components";
import { lighten } from "polished";
import colors from "./colors";
import device from "./device";

export const StyledOrderContainer = styled.div`
  margin: calc(3 * var(--space-l)) auto;
  min-height: 500px;
  width: 90%;
  border-radius: var(--border-radius);
  background-color: ${lighten(0.28, colors.gray)};
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${device.tabletLandscape} {
    max-width: 900px;
  }
`;
