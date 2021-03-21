import styled from "styled-components";
import { lighten} from "polished";
import colors from "./colors";
import device from "./device";
import { Cake3 } from "styled-icons/remix-line/";

export const StyledIcon = styled(Cake3)``;

export const StyledCafeCard = styled.article`
  width: 100%;
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

      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      overflow: hidden;
      margin: var(--space-xs) auto;
      position: relative;
      @media ${device.tabletPortrait} {
        margin: var(--space-xs);
      }
      > img {
        width: 100px;
        height: 100px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
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
      > h2 {
        margin: calc(var(--space-xs) / 2);
      }
      > span {
        margin: 0 var(--space-xs);
      }
      @media ${device.tabletPortrait} {
        text-align: left;
        margin: var(--space-s);
        > h2 {
          margin: calc(var(--space-xs) / 2) 0;
          padding: 0;
        }
        > span {
          margin: 0;
          padding: 0;
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
  margin: var(--space-s) 0;

  @media ${device.tabletPortrait} {
    flex-direction: row;
    align-items: center;
    margin: var(--space-xs) 0;
  }

  > .name-tags {
    display: flex;
    flex-wrap: wrap;
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
    width: 120px;
    @media ${device.mobile} {
      width: 180px;
    }
  }
`;
