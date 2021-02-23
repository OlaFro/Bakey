import styled from "styled-components";

export const StyledListView = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 60px auto;
  grid-auto-rows: minmax(200px);
  /* adjust-content: start; */
  padding: var(--space-s);
  div {
    justify-content: flex-start;
    /* margin:0; */
  }
`;
