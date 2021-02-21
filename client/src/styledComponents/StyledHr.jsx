import styled, { css } from "styled-components";
import colors from "./colors";

const StyledHr = styled.hr`
  border-top: 2px solid ${colors.accent1};
  width: 100%;
  margin: var(--space-m);
  ${(props) =>
    props.cafe &&
    css`
      border-top: 2px solid ${colors.accent2};
    `}
`;

export default StyledHr;
