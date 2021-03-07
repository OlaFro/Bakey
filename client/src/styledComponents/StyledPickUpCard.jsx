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

  .table-wrapper {
    max-width: 1000px;
    overflow-x: scroll;

    @media ${device.tabletPortrait} {
      overflow-x: hidden;
    }
  }

  table {
    width: 80%;
    border-collapse: separate;
    border-spacing: 10px;
    margin-bottom: var(--space-m);

    @media screen and (max-width: 499px) {
      tr {
        display: grid;
        place-items: center start;
        grid-template-areas: "time qty icon" "mail mail mail";
        margin-bottom: var(--space-m);
      }

      th:first-of-type,
      td:first-of-type {
        grid-area: time;
      }

      th:nth-of-type(2),
      td:nth-of-type(2) {
        grid-area: mail;
        margin-top: var(--space-xs);
      }

      th:nth-of-type(3),
      td:nth-of-type(3) {
        grid-area: qty;
      }

      th:last-of-type,
      td:last-of-type {
        grid-area: icon;
      }

      td:nth-of-type(3) {
        padding-left: var(--space-s);
      }
    }

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
    }
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
