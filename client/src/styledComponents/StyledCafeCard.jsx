import styled from "styled-components";
import { lighten, darken } from "polished";
import colors from "./colors";
import device from "./device";
import { Cake3 } from "styled-icons/remix-line/";

export const StyledIcon = styled(Cake3)``;

export const StyledCafeCard = styled.div`
  width: 90%;
  max-width: 600px;
  margin: var(--space-m) 0;
  cursor: pointer;
  background-color: ${lighten(0.28, colors.gray)};
  border-radius: var(--border-radius);
  padding: var(--space-s);

  header {
    display: grid;
    grid-template-rows: 116px auto;

    @media ${device.tabletPortrait} {
      grid-template-columns: 116px auto;
    }

    > figure {
      width: 100px;
      height: 100px;
      border-radius: 100%;
      border: calc(2 * var(--border)) solid ${lighten(0.3, colors.black)};
      overflow: hidden;
      margin: var(--space-s) auto;
      position: relative;
      @media ${device.tabletPortrait} {
        margin: var(--space-xs);
      }
      > img {
        width: 100px;
        height: 100px;
        object-fit: cover;
      }
      > ${StyledIcon} {
        position: absolute;
        width: 3.5rem;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        color: ${lighten(0.3, colors.black)};
      }
    }
    > div {
      margin: var(--space-xs);
      width: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      > h3 {
        margin: var(--space-xs);
      }
      > span {
        padding: 0 var(--space-xs);
      }
      @media ${device.tabletPortrait} {
        text-align: left;
        > h3 {
          margin: 0;
          padding: 0 var(--space-xs);
        }
      }
    }
  }

  main {
    margin: var(--space-xs);

    > h3 {
      margin: var(--space-xs) 0;
    }
  }
`;

export const StyledListing = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  padding: 0;
  margin: var(--space-m) 0;

  @media ${device.tabletPortrait} {
    flex-direction: row;
    align-items: center;
    margin: var(--space-xs) 0;
  }

  > .name-tags {
    display: flex;
    align-items: center;
    margin: var(--space-xs) 0;

    @media ${device.tabletPortrait} {
      margin: 0;
    }
    > div {
      display: flex;
      margin-left: var(--space-xs);
    }
  }
  > .progressBar {
    width: 200px;
  }
`;
