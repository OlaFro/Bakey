import styled, { css } from "styled-components";
import { darken } from "polished";
import colors from "./colors";
import device from "./device";
import { EyeClose, Eye, ArrowDown } from "styled-icons/remix-line";

export const StyledForm = styled.form`
  margin: calc(2 * var(--space-l)) auto;
  width: 90%;
  max-width: 448px;
  border: var(--border) solid ${colors.accent1};
  padding: var(--space-s);
  border-radius: var(--border-radius);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  > Header {
    background-color: white;
    padding: var(--space-xs) var(--space-s);
    position: absolute;
    top: 24px;
    left: var(--space-s);
    font-size: 0.5rem;
    @media ${device.mobile} {
      font-size: 1rem;
      top: -44.8px;
      left: var(--space-l);
    }
  }

  > small {
    padding: var(--space-xs);
    color: ${colors.warning};
    text-align: center;
  }

  .warning {
    color: ${colors.warning};
  }

  @media ${device.mobile} {
    padding: var(--space-m) calc(var(--space-m) * 2) var(--space-l)
      calc(var(--space-m) * 2);
  }

  ${(props) =>
    props.cafe &&
    css`
      width: 90%;
      max-width: 800px;
      border: var(--border) solid ${colors.accent2};
      @media ${device.tabletLandscape} {
        display: grid;
        grid-template-columns: auto auto;
        grid-column-gap: var(--space-m);
        grid-template-areas: "input input" "input input" "input input" "input input" "input input" "register register";
      } ;
    `};
`;

export const StyledInputContainer = styled.div`
  width: 240px;
  position: relative;
  display: flex;
  flex-direction: column;
  margin: var(--space-xs) 0;

  & small {
    padding: var(--space-xs);
    color: ${colors.warning};
    text-align: center;
  }

  @media ${device.tabletPortrait} {
    width: 320px;
  }
  grid-area: "input";
`;

export const StyledLabel = styled.label`
  position: absolute;
  font-family: var(--heading);
  text-transform: uppercase;
  letter-spacing: calc(0.33 * var(--ls));
  font-weight: 500;
  top: var(--space-s);
  left: var(--space-s);
  transition: all 200ms ease-in-out;
`;

export const StyledInputField = styled.input`
  padding: var(--space-s);
  background-color: white;
  font-size: 1rem;
  font-family: var(--heading);
  border: var(--border) solid ${colors.accent1};
  border-radius: var(--border-radius);

  :hover {
    cursor: text;
    border: var(--border) solid ${darken(0.2, colors.gray)};
  }
  :focus {
    outline: none;
    border: var(--border) solid ${darken(0.2, colors.gray)};
  }

  :focus + label,
  :not(:placeholder-shown) + label {
    font-size: 0.8rem;
    top: -8px;
    left: 13px;
    background: white;
    padding: 0 calc(0.2 * var(--space-s));
    letter-spacing: calc(0.66 * var(--ls));
  }
  ${(props) =>
    props.cafe &&
    css`
      border: var(--border) solid ${colors.accent2};
      :hover {
        cursor: text;
        border: var(--border) solid ${darken(0.2, colors.gray)};
      }
      :focus {
        outline: none;
        border: var(--border) solid ${darken(0.2, colors.gray)};
      }
    `};
`;

export const StyledSelect = styled.select`
  border: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -ms-appearance: none;
  padding: var(--space-s);
  background-color: white;
  font-size: 1rem;
  font-family: var(--heading);
  border: var(--border) solid ${colors.accent1};
  border-radius: var(--border-radius);

  :hover {
    cursor: pointer;
    border: var(--border) solid ${darken(0.2, colors.gray)};
  }
  :focus {
    outline: none;
    border: var(--border) solid ${darken(0.2, colors.gray)};
    font-family: var(--heading);
  }

  :focus + label,
  :not(:placeholder-shown) + label {
    font-size: 0.8rem;
    top: -8px;
    left: 13px;
    background: white;
    padding: 0 calc(0.2 * var(--space-s));
    letter-spacing: calc(0.66 * var(--ls));
  }

  ${(props) =>
    props.cafe &&
    css`
      border: var(--border) solid ${colors.accent2};
    `};
`;

export const StyledEyeClose = styled(EyeClose)`
  width: 16px;
  height: 16px;
  position: absolute;
  right: 12px;
  top: 19.2px;
  cursor: pointer;
`;

export const StyledEye = styled(Eye)`
  width: 16px;
  height: 16px;
  position: absolute;
  right: 12px;
  top: 19.2px;
  cursor: pointer;
`;

export const StyledArrow = styled(ArrowDown)`
  width: 16px;
  height: 16px;
  position: absolute;
  right: 12px;
  top: 19.2px;
  pointer-events: none;
`;
