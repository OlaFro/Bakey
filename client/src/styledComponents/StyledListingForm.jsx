import styled from "styled-components";

export const StyledListingSteps = styled.div`
  margin: var(--space-s) 0 calc(2 * var(--space-l)) 0;

  > div,
  > form,
  > .communication {
    width: 100%;
    margin: var(--space-l) 0;
  }

  > .communication {
    display: flex;
    justify-content: space-between;

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      > p {
        text-align: center;
      }
      > button {
        margin-top: var(--space-s);
      }
    }
  }
`;
