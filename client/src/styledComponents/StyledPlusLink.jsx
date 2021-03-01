import styled, { css } from "styled-components";
import colors from "./colors";
import { Plus } from "styled-icons/feather/";

export const StyledPlusLink = styled.div`
  padding: var(--space-xs);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const StyledPlusIcon = styled(Plus)`
  border: var(--border) solid ${colors.black};
  color: ${colors.black};
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;

export const StyledPlusLinkInfo = styled.div`
  padding-left: var(--space-xs);
`;
