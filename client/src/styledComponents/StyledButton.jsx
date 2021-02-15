import styled, { css } from "styled-components";
import colors from "./colors";
import { darken } from "polished";
import device from "./device";

const StyledButton = styled.button`
  ${(props) =>
    !props.small &&
    css`
      font-family: var(--headings);
      background-color: ${colors.accent1};
      border: var(--border) solid transparent;
      color: var(--black);
      font-size: 1rem;
      padding: var(--space-s) var(--space-m);
      border-radius: var(--border-radius);
      text-transform: uppercase;
      letter-spacing: var(--ls);
      font-weight: 700;
      transition: background-color 200ms;

      :hover {
        cursor: pointer;
        background-color: ${darken(0.1, colors.accent1)};
      }
      :active {
        background-color: white;
        border: var(--border) solid ${colors.accent1};
        color: var(--black);
      }
    `}

  ${(props) =>
    props.cafe &&
    css`
      background-color: ${colors.accent2};
      :hover {
        cursor: pointer;
        background-color: ${darken(0.1, colors.accent2)};
      }
      :active {
        background-color: white;
        border: var(--border) solid ${colors.accent2};
        color: var(--black);
      }
    `};

  ${(props) =>
    props.registration &&
    css`
      @media ${device.desktop} {
        background-color: ${colors.accent2};
        border: var(--border) solid ${colors.accent2}
        :hover {
          cursor: pointer;
          background-color: ${darken(0.1, colors.accent2)};
        }
        :active {
          background-color: white;
          border: var(--border) solid ${darken(0.1, colors.accent2)};
          color: var(--black);
        }
      }
    `};

  ${(props) =>
    props.small &&
    css`
      background: none;
      border: none;
      font-family: var(--headings);
      text-align: left;
      padding: 0;
      font-size: inherit;
      @media ${device.desktop} {
        padding: var(--space-xs);
        font-size: 0.8rem;
        font-family: var(--headings);
        border-radius: var(--border-radius);
        text-transform: uppercase;
        letter-spacing: var(--ls);
        font-weight: 700;
        transition: background-color 200ms;
      }
    `};
  ${(props) =>
    props.login &&
    css`
      @media ${device.desktop} {
        background-color: white;
        border: var(--border) solid ${colors.accent2};
        color: ${colors.accent2};
        margin-right: var(--space-xs);
        :hover {
          cursor: pointer;
          border: var(--border) solid ${darken(0.1, colors.accent2)};
          background: white;
          color: ${darken(0.1, colors.accent2)};
        }
        :active {
          background-color: ${colors.accent2};
          border: var(--border) solid ${colors.accent2};
          color: var(--black);
        }
      }
    `};
`;

export default StyledButton;
