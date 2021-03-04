import styled, { css } from "styled-components";
import { lighten, darken } from "polished";
import colors from "./colors";
import device from "./device";
import { Mail } from "@styled-icons/foundation/Mail";

export const StyledPickUpCard = styled.article`
  width: 90%;
  max-width: 1000px;
  background-color: ${lighten(0.28, colors.gray)};
  border-radius: var(--border-radius);
  padding: var(--space-s);
  margin: 0 auto var(--space-m);

  section {
    width: 400px;
    overflow-x: scroll;

    @media ${device.tabletPortrait} {
      overflow-x: hidden;
    }
  }

  table {
    /* border-collapse: separate;
    border-spacing: 10px;

    tr,
    td,
    th {
      text-align: start;
    }

    @media ${device.tabletPortrait} {
      margin: 0 auto var(--space-m);
      td:nth-of-type(3) {
        padding-left: var(--space-xs);
      }
    } */
  }

  a {
    color: ${colors.accent2};
  }

  .sent {
    color: ${colors.gray};
  }
`;

export const StyledMailIcon = styled(Mail)`
  width: 25px;
`;

export const StyledBtnContainer = styled.section`
  margin: auto;
  width: 90%;
  max-width: 350px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  button {
    margin-bottom: var(--space-m);
  }
`;
