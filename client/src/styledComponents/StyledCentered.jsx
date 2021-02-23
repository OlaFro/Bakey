import styled, { css } from "styled-components";

const StyledCentered = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${(props) =>
    props.settings &&
    css`
      text-align: center;
    `}
`;

export default StyledCentered;
