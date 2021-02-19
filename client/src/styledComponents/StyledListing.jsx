import styled from "styled-components";
import colors from "../styledComponents/colors";

export const StyledListingContainer = styled.div`
  width: 90%;
  max-width: 800px;
  height: 320px;

  display: grid;
  grid-template-columns: 40% 60%;
`;

export const StyledPhotoContainer = styled.div`
  height: 100%;
  background-image: url("https://images.unsplash.com/photo-1572383672419-ab35444a6934?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80");
  background-size: contain;
`;

export const StyledDescContainer = styled.div`
  height: 100%;
  background-color: ${colors.gray};
`;
