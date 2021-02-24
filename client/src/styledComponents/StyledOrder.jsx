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

  > div {
    height: 200px;
    width: 200px;
    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const StyledPreview = styled.div``;

export const StyledSummary = styled.div``;
