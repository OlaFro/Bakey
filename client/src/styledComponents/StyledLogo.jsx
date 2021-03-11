import styled, { css } from "styled-components";
import colors from "../styledComponents/colors";
import device from "./device";
import { lighten, darken } from "polished";

// export const StyledLogo = styled.div`
//   margin: auto;
//   position: relative;
//   width: 120px;
//   height: 120px;
//   border-radius: 100%;
//   background-color: white;
//   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
//   > img {
//     width: 90px;
//     position: absolute;
//     top: 45%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//   }
//   > span {
//     text-align: center;
//     color: ${colors.accent2};
//     font-family: var(--logo);
//     font-weight: 700;
//     position: absolute;
//     top: 72%;
//     left: 50%;
//     transform: translateX(-50%);
//   }

// `;

export const StyledLogo = styled.div`
  margin: auto;
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  > img {
    width: 90px;
    margin-top: 4px;
  }
  > span {
    text-align: center;
    color: ${colors.accent2};
    font-family: var(--logo);
    font-weight: 700;
    margin-top: -13px;
  }
  ${(props) =>
    props.nav &&
    css`
      box-shadow: none;
      height: 40px;
      width: 40px;
      border-radius: 0;
      flex-direction: row;
      align-items: center;
      border: 1px solid red;

      > img {
        width: inherit;
      }
      > span {
     
    
    `}
`;
