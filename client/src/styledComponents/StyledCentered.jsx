import styled, { css } from "styled-components";

const StyledCentered = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 600px) {
    padding-left: var(--space-s);
    padding-right: var(--space-s);
  }
  ${(props) =>
    props.settings &&
    css`
      text-align: center;
    `}
  ${(props) =>
    props.landing &&
    css`
      @media (max-width: 600px) {
        padding-left: 0;
        padding-right: 0;
      }
    `}
    ${(props) =>
    props.marginTop &&
    css`
      margin-top: 10vh;
    `}
`;

export default StyledCentered;
