import styled from "styled-components";
import { lighten, darken } from "polished";
import colors from "./colors";
import device from "./device";
import { Mail } from "@styled-icons/foundation/Mail";

export const StyledPickUpCard = styled.article`
  background-color: ${lighten(0.28, colors.gray)};
  border-radius: var(--border-radius);
  padding: var(--space-s);
  margin-bottom: var(--space-m);
`;

export const StyledMailIcon = styled(Mail)`
  width: 25px;
`;
