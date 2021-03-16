import styled, { css } from "styled-components";
import colors from "../styledComponents/colors";
import device from "./device";

export const StyledLogo = styled.div`
  margin: auto;
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
      height: 30px;
      width: 40px;
      box-shadow: none;
      border-radius: 0;
      flex-direction: row;
      align-items: center;
      @media ${device.tabletLandscape} {
        width: 110px;
      }

      > img {
        height: 40px;
        width: 40px;
        margin-right: 0.5rem;
        margin-top: 0;
        margin-left: var(--space-xs);
      }
      > span {
        margin-top: 0;
        display: none;
        @media ${device.tabletLandscape} {
          display: block;
        }
      }
    `}
`;
