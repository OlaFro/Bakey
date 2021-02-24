import styled from "styled-components";
import { lighten, darken } from "polished";
import colors from "./colors";
import device from "./device";

export const StyledOrderContainer = styled.div`
  margin: auto;

  /* temporal margin-top for better preview */
  margin-top: 5rem;

  width: 90%;
  max-width: 900px;
  height: 500px;
  border-radius: var(--border-radius);

  display: grid;
  grid-template-columns: 40% 60%;
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
      > p {
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
  /* display: flex;
  justify-content: center;
  align-items: center; */
`;
export const StyledSummary = styled.div``;
