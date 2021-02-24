import styled, { css } from "styled-components";
import colors from "./colors";

const StyledHr = styled.hr`
  border-top: var(--border) solid ${colors.accent1};
  width: 100%;
  margin: var(--space-m) 0;
  ${(props) =>
    props.cafe &&
    css`
      border-top: var(--border) solid ${colors.accent2};
    `}
`;

export default StyledHr;
