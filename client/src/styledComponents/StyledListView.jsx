import styled from "styled-components";
import colors from "./colors";
import { darken } from "polished";
import device from "./device";

export const StyledListView = styled.section`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: 60px 200px;
grid-auto-rows: minmax(200px);
border: red solid 1px;
adjust-content: start;
padding: var(--space-s);
 div {
     justify-content: flex-start;
     margin:0;
     border: blue 1px solid;
 }
`;
