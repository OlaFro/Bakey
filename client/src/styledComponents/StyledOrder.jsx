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
  background-color: ${lighten(0.28, colors.gray)};
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
  width: 60%;

  > hr {
    margin: var(--space-s) 0;
  }
`;

export const StyledAdd = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > span {
    font-weight: 500;
  }
`;

export const StyledAmount = styled.div`
  width: 100px;
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
  align-items: flex-end;
  > span {
    padding-right: 3px;
    margin-bottom: var(--space-m);
  }
`;
