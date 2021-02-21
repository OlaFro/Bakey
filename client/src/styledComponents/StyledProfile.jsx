import styled, { css } from "styled-components";
import device from "./device";

export const StyledBackgroundPic = styled.img`
  width: 90%;
  max-width: 1200px;
  height: 200px;
  background-image: url("https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1330&q=80");
  background-repeat: no-repeat;
  position: relative;

  /* for preview only can be deleted later*/
  background-position: 100% 30%;

  @media ${device.tabletPortrait} {
    height: 400px;
  }
`;

export const StyledLogo = styled.img`
  width: 150px;
  height: 150px;
  background-image: url("https://i.pinimg.com/originals/1f/c3/ff/1fc3ff4791f292d4ec65893a2087825c.png");
  background-size: cover;
  background-position: center;
  border-radius: 100%;
  border: 5px solid white;
  position: absolute;
  top: 20%;
  box-shadow: 0px 10px 14px -2px #b9b9b9;
  @media ${device.tabletPortrait} {
    width: 200px;
    height: 200px;
    border: 15px solid white;
    left: 50%;
    top: 53%;
    transform: translate(-50%, -50%);
    box-shadow: 0px 10px 24px -2px #b9b9b9;
  }
`;

export const StyledNameContainer = styled.div`
  margin-top: calc(var(--space-l) * 3);
  text-align: center;
  > h4 {
    margin: var(space-s) 0;
  }
`;
