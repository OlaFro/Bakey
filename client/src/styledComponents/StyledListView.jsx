import styled from "styled-components";

export const StyledListView = styled.div`
  margin: var(--space-l);
`;

export const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;

  > h2 {
    margin-bottom: var(--space-xs);
  }
  > .filtering {
    > p {
      margin: var(--space-xs) 0;
      font-size: 0.9rem;
    }
    > .tag-container {
      display: flex;

      > div {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin-right: var(--space-xs);
        > p {
          margin: var(--space-xs) 0;
          font-size: 0.9rem;
        }
      }
    }
  }
`;
