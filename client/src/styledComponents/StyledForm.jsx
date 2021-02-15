import styled, { css } from "styled-components";
import { darken } from "polished";
import colors from "./colors";
import device from "./device";
import { EyeClose, Eye, ArrowDown } from "styled-icons/remix-line";

export const StyledForm = styled.form`
  /* margin-top only for preview purposes */
  margin-top: 3rem;

  border: var(--border) solid ${colors.accent1};
  padding: var(--space-s);
  border-radius: var(--border-radius);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  > Header {
    background-color: white;
    padding: var(--space-xs) var(--space-s);
    position: absolute;
    top: -1.5rem;
    left: var(--space-l);
    font-size: 0.5rem;
    @media ${device.mobile} {
      font-size: 1rem;
      top: -2.8rem;
      left: var(--space-l);
    }
  }
  @media ${device.mobile} {
    padding: var(--space-m) calc(var(--space-m) * 2) var(--space-l)
      calc(var(--space-m) * 2);
  }

  ${(props) =>
    props.cafe &&
    css`
      border: var(--border) solid ${colors.accent2};
      display: grid;
      grid-template-columns: auto;
      @media ${device.tabletLandscape} {
        grid-template-columns: auto auto;
        grid-column-gap: var(--space-m);
      }
    `};
`;

export const StyledInputContainer = styled.div`
  width: 15rem;
  position: relative;
  display: flex;
  flex-direction: column;
  margin: var(--space-xs) 0;

  & small {
    padding: var(--space-xs);
    color: ${colors.warning};
  }

  @media ${device.tabletLandscape} {
    width: 25rem;
  }
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
    top: -0.5rem;
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
  width: 1rem;
  height: 1rem;
  position: absolute;
  right: 12px;
  top: 1.2rem;
  cursor: pointer;
`;

export const StyledEye = styled(Eye)`
  width: 1rem;
  height: 1rem;
  position: absolute;
  right: 12px;
  top: 1.2rem;
  cursor: pointer;
`;

export const StyledArrow = styled(ArrowDown)`
  width: 1rem;
  position: absolute;
  right: 12px;
  top: 1.2rem;
  pointer-events: none;
`;
