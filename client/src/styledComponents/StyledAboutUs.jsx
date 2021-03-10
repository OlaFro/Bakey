import styled from "styled-components";
import { lighten, darken } from "polished";
import colors from "./colors";
import device from "./device";

export const StyledAbout = styled.section`
  padding: 10vh 0 20vh 0;
`;

export const StyledFaces = styled.header`
  margin: auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${device.tabletPortrait} {
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: var(--space-s);
    margin-bottom: var(--space-l);

    > figure {
      margin: 0;
      width: 100px;
      height: 100px;
      border-radius: 100%;
      overflow: hidden;
      a > img {
        width: 100%;
        object-fit: contain;
      }
    }

    > h3 {
      margin-bottom: -0.5rem;
      text-align: center;
    }
    > p {
      margin-bottom: -0.75rem;
      font-size: 0.9rem;
      font-weight: 700;
    }
  }
`;

export const StyledCard = styled.main`
  background-color: ${lighten(0.28, colors.gray)};
  padding: var(--space-l);
  width: 90%;
  max-width: 800px;
  margin: auto;
  border-radius: var(--border-radius);

  > :last-child {
    box-shadow: none;
    background-color: transparent;
  }

  > h2 {
    text-align: center;
    margin-bottom: var(--space-m);
  }

  > h3 {
    margin-bottom: calc(-1 * var(--space-xs));
  }
  > p {
    margin-bottom: var(--space-m);
    line-height: 25px;
  }

  a {
    color: #4a4a4a;
    text-decoration: none;
    border-bottom: 3px solid #ed8db2;
    :hover {
      border-bottom: 3px solid transparent;
    }
  }
`;
