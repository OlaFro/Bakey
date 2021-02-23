import styled, { css } from "styled-components";
import colors from "./colors";

const StyledTag = styled.span`
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-content: center;
  font-weight: 700;
  padding: calc(var(--space-xs) / 2.5);

  margin-right: var(--space-xs);
  position: relative;
  overflow: hidden;
  cursor: pointer;

  ${(props) =>
    props.no &&
    css`
      ::after {
        content: "";
        height: 2rem;
        width: 2px;
        background-color: rgba(255, 255, 255, 0.7);
        position: absolute;
        top: -5px;
        transform: rotate(45deg);
      }
    `}

  ${(props) =>
    props.vegan &&
    css`
      background-color: ${colors.vegan};
    `};
  ${(props) =>
    props.organic &&
    css`
      background-color: ${colors.organic};
    `};
  ${(props) =>
    props.lactose &&
    css`
      background-color: ${colors.lactose};
    `};
  ${(props) =>
    props.gluten &&
    css`
      background-color: ${colors.gluten};
    `};
  ${(props) =>
    props.sugar &&
    css`
      background-color: ${colors.sugar};
    `};
  ${(props) =>
    props.wheat &&
    css`
      background-color: ${colors.wheat};
    `}
`;

export default StyledTag;
