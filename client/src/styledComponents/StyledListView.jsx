import styled from "styled-components";
import device from "./device";

export const StyledListView = styled.div`
  margin: var(--space-m);
  @media ${device.tabletPortrait} {
    margin: var(--space-l);
  }
`;

export const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;

  > h2 {
    margin-bottom: var(--space-xs);
    padding: 0;
  }
  > .filtering {
    margin-left: var(--space-xs);
    > p {
      margin: var(--space-xs) 0;
      font-size: 0.9rem;
    }
    > .tag-container {
      display: flex;
      flex-wrap: wrap;

      div,
      label {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin-right: var(--space-xs);
        > p {
          margin: var(--space-xs) 0;
          font-size: 0.9rem;
        }

        input {
          margin-right: var(--space-xs);
        }
      }
    }
  }
`;

export const StyledViewWrapper = styled.section`
  display: flex;
  flex-direction: column;

  @media ${device.desktop} {
    flex-direction: row;
    gap: var(--space-l);
  }

  > article {
    width: 100%;
    max-width: 600px;
    order: 2;

    @media ${device.desktop} {
      order: 0;
    }
  }
`;
