import styled from "styled-components";
import { lighten, darken } from "polished";
import colors from "./colors";
import device from "./device";

export const StyledOrderContainer = styled.div`
  margin: calc(3 * var(--space-l)) auto;
  /* max-width: 500px; */
  min-height: 500px;
  width: 90%;
  border-radius: var(--border-radius);
  background-color: ${lighten(0.28, colors.gray)};
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${device.tabletLandscape} {
    max-width: 900px;
  }
`;

export const StyledOrderSummaryContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 400px 300px;
  row-gap: var(--space-m);
  @media ${device.tabletLandscape} {
    max-width: 900px;
    row-gap: 0;
    height: 500px;
    grid-template-rows: 500px 0;
    grid-template-columns: 40% 60%;
  }
`;

export const StyledPreview = styled.div`
  height: 300px;
  width: 200px;
  display: flex;
  flex-direction: column;

  > figure {
    margin: 0;
    height: 200px;
    width: 200px;

    > img {
      border-radius: var(--border-radius) var(--border-radius) 0 0;
      width: 100%;
      height: 100%;
      object-fit: scale-down;
    }
  }
  > div {
    background-color: ${lighten(0.2, colors.gray)};
    border-radius: 0 0 var(--border-radius) var(--border-radius);
    text-align: center;
    > div {
      margin-bottom: var(--space-m);
      > span {
        display: block;
        margin: calc(0.5 * var(--space-xs));
      }
    }
  }
`;

export const StyledLeftPart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledRightPart = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledSummary = styled.div`
  margin: auto;
  width: 80%;
  @media ${device.tabletLandscape} {
    margin: 0;
    width: 80%;
  }
  @media ${device.desktop} {
    margin: 0;
    width: 80%;
  }

  > h4 {
    text-align: center;
    @media ${device.tabletLandscape} {
      text-align: left;
    }
  }
  > hr {
    margin: var(--space-s) auto;
    width: 50%;
    @media ${device.tabletLandscape} {
      width: 100%;
    }
  }
`;

export const StyledAdd = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.tabletLandscape} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  > span {
    font-weight: 500;
    margin: var(--space-xs) 0;
  }
`;

export const StyledAmount = styled.div`
  width: 115px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > span {
    font-weight: 500;
  }
`;

export const StyledTotal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${device.tabletLandscape} {
    align-items: flex-end;
  }

  > span {
    margin-bottom: var(--space-m);
    letter-spacing: 0.6px;
  }
`;
