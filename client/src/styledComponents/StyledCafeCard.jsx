import styled from "styled-components";
import { lighten, darken } from "polished";
import colors from "./colors";
import device from "./device";

export const StyledCafeCard = styled.div`
  width: 90%;
  max-width: 600px;
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
      overflow: hidden;
      margin: var(--space-s) auto;
      @media ${device.tabletPortrait} {
        margin: var(--space-xs);
      }
      > img {
        width: 100px;
        height: 100px;
        object-fit: cover;
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

    > .listing {
    }
  }
`;

export const StyledListing = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: var(--space-s) 0;

  > .tag-container {
    display: flex;
    margin: var(--space-xs);
  }
  > .progressBar {
    width: 200px;
  }
`;
