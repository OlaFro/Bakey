import styled, { css } from "styled-components";
import { darken, lighten } from "polished";
import colors from "./colors";
import device from "./device";
import { EyeClose, Eye, ArrowDown, ImageAdd } from "styled-icons/remix-line";

export const StyledForm = styled.form`
  margin-top: var(--space-l);
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
  ${(props) =>
    props.cafe &&
    css`
      width: 90%;
      max-width: 800px;
      border: var(--border) solid ${colors.accent2};
      @media ${device.tabletLandscape} {
        display: grid;
        grid-template-columns: auto auto;
        column-gap: var(--space-m);
        grid-template-areas: "input input" "input input" "input input" "input input" "input input" "check check" "register register" "warning warning";
      } ;
    `};
  ${(props) =>
    props.listing &&
    css`
      border: var(--border) solid ${colors.accent2};
      width: 90%;
      max-width: 800px;
      display: grid;
      justify-items: center;
      > div {
        width: 100%;
        display: flex;
        flex-direction: column;
        @media ${device.tabletLandscape} {
          flex-direction: row;
          justify-content: space-between;
        }
      }
    `}
  > Header {
    background-color: white;
    padding: var(--space-xs) var(--space-s);
    position: absolute;
    top: -22px;
    left: var(--space-s);
    font-size: 0.5rem;
    @media ${device.tabletPortrait} {
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
  .oops-warning {
    grid-area: warning;
  }
  > button {
    margin-top: var(--space-s);
  }
  @media ${device.mobile} {
    padding: var(--space-m) calc(var(--space-m) * 2) var(--space-l)
      calc(var(--space-m) * 2);
  }
`;

export const StyledPhotoUpload = styled.div`
  padding: var(--space-xs);
  > label {
    cursor: pointer;
    display: grid;
    grid-template-rows: 125px 1fr;
    row-gap: var(--space-xs);
    text-align: left;
    @media ${device.tabletLandscape} {
      grid-template-columns: 125px 1fr;
      column-gap: var(--space-s);
      align-items: center;
    }
    > .picContainer {
      margin: 0;
      position: relative;
      overflow: hidden;
      width: 125px;
      height: 125px;
      border-radius: var(--border-radius);
      > img {
        position: absolute;
        top: 0;
        left: 0;
        height: 125px;
      }
    }
    > div {
      margin: 0 var(--space-s);
      display: flex;
      flex-direction: column;
    }
  }
  /* hiding input type file */
  > input {
    display: none;
  }
  ${(props) =>
    props.logo &&
    css`
      > label {
        > .picContainer {
          border-radius: 100%;
        }
      }
    `}
`;
export const StyledCoverUpload = styled.div`
  padding: var(--space-xs);
  > label {
    cursor: pointer;
    display: grid;
    grid-template-rows: 125px 1fr;
    row-gap: var(--space-xs);
    text-align: left;
    @media ${device.tabletLandscape} {
      grid-template-columns: 125px 1fr;
      column-gap: var(--space-s);
      align-items: center;
    }
    > .picContainer {
      margin: 0;
      position: relative;
      overflow: hidden;
      width: 125px;
      height: 125px;
      border-radius: var(--border-radius);
      > img {
        position: absolute;
        top: 0;
        left: 0;
        height: 125px;
      }
    }
    > div {
      margin: 0 var(--space-s);
      display: flex;
      flex-direction: column;
    }
  }
  /* hiding input type file */
  > input {
    display: none;
  }
`;
export const StyledInputContainer = styled.div`
  width: 240px;
  position: relative;
  display: flex;
  flex-direction: column;
  margin: var(--space-s) 0;
  grid-area: "input";
  > div {
    height: 16px;
    > small {
      padding: var(--space-xs);
      color: ${colors.warning};
    }
  }
  @media ${device.tabletPortrait} {
    width: 320px;
  }

  ${(props) =>
    props.number &&
    css`
      width: 80px;
      @media (min-width: 400px) {
        width: 100px;
      }
    `}

  ${(props) =>
    props.long &&
    css`
      @media (min-width: 100px) {
        width: 100%;
      }
    `}

    ${(props) =>
    props.listing &&
    css`
      margin-top: var(--space-m);
    `}
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
  ${(props) =>
    props.long &&
    css`
      width: 100%;
    `}

  /* style for credit card mock-up for transparent background in the labels. than changed to white but maybe we can re use it somehow in the future? */
  ${(props) =>
    props.fake &&
    css`
  background-color: transparent;
  :focus + label,
  :placeholder-shown + label {
    font-size: 0.8rem;
    top: -8px;
    left: 13px;
    background: white;
    padding: 0 calc(0.2 * var(--space-s));
    letter-spacing: calc(0.66 * var(--ls));`}
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

  /* ${(props) =>
    props.number &&
    css`
      background-color: transparent;
      :not(:placeholder-shown) + label {
        background-color: ${lighten(0.28, colors.gray)};
      }
    `}; */

  ${(props) =>
    props.cafe &&
    css`
      border: var(--border) solid ${colors.accent2};
    `};
`;

// container for the untypical inputs type file or type checkbox
export const StyledOtherInputsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: var(--border) solid ${colors.accent1};
  border-radius: var(--border-radius);
  width: 320px;
  margin: var(--space-s) 0;
  padding: var(--space-s);
  position: relative;
  ${(props) =>
    props.cafe &&
    css`
      border: var(--border) solid ${colors.accent2};
      :hover {
        cursor: pointer;
        border: var(--border) solid ${darken(0.2, colors.gray)};
      }
      :focus {
        outline: none;
        border: var(--border) solid ${darken(0.2, colors.gray)};
      }
    `};
  > div {
    padding: calc(var(--space-xs) / 2) var(--space-xs);
  }
  > header {
    position: absolute;
    font-family: var(--heading);
    font-weight: 500;
    text-transform: uppercase;
    font-size: 0.8rem;
    top: -9px;
    left: 13px;
    background: white;
    padding: 0 calc(0.2 * var(--space-s));
    letter-spacing: calc(0.66 * var(--ls));
  }
  ${(props) =>
    props.long &&
    css`
      @media ${device.tabletLandscape} {
        max-width: 700px;
      }
    `}

  ${(props) =>
    props.registerCafe &&
    css`
      width: 100%;
      max-width: 320px;
      grid-area: check;
      justify-self: center;
      @media ${device.tabletLandscape} {
        max-width: 700px;
      }
    `}

    ${(props) =>
    props.registerUser &&
    css`
      width: 100%;
      max-width: 240px;
      grid-area: check;
      justify-self: center;
      @media ${device.tabletPortrait} {
        max-width: 320px;
      }
    `}
`;

// icons used in form:
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

export const StyledPhoto = styled(ImageAdd)`
  width: 48px;
  height: 48px;
`;

export const StyledTextArea = styled.textarea`
  padding: var(--space-s);
  width: 100%;
  height: auto;
  background-color: white;
  font-size: 1rem;
  font-family: var(--heading);
  border: var(--border) solid ${colors.accent2};
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
`;
