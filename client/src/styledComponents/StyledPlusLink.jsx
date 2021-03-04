import styled, { css } from "styled-components";
import colors from "./colors";
import device from "./device";
import { Plus } from "styled-icons/feather/";
import { Settings } from "@styled-icons/feather/Settings";

export const StyledPlusLink = styled.div`
  padding: var(--space-xs);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.2rem;
  margin: var(--space-xs) 0;

  @media ${device.tabletPortrait} {
    margin: var(--space-m) 0;
  }

  a {
    width: 250px;
    text-decoration: none;
    color: black;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: auto;

    @media ${device.tabletPortrait} {
      justify-content: center;
  }
`;

export const StyledPlusIcon = styled(Plus)`
  border: var(--border) solid ${colors.black};
  color: ${colors.black};
  height: 40px;
  width: 40px;
  border-radius: 50%;
  cursor: pointer;
`;

export const StyledIcon = styled.figure`
  height: 40px;
  width: 40px;
  margin: 0;
  cursor: pointer;
  display: grid;
  place-items: center;

  svg {
    width: 95%;
  }

  ${(props) =>
    props.profile &&
    css`
      border: var(--border) solid ${colors.black};
      border-radius: 50%;

      img {
        width: 80%;
      }
    `}
`;

export const StyledPlusLinkInfo = styled.span`
  padding-left: var(--space-xs);
`;
