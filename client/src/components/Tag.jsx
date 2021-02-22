import React from "react";
import StyledTag from "../styledComponents/StyledTag";

export default function Tag(props) {
  const mainComponent = [];
  if (props.data.includes("lactoseFree")) {
    mainComponent.push(
      <StyledTag no lactose title="lactose free">
        L
      </StyledTag>
    );
  }
  if (props.data.includes("glutenFree")) {
    mainComponent.push(
      <StyledTag no gluten title="gluten free">
        G
      </StyledTag>
    );
  }
  if (props.data.includes("sugarFree")) {
    mainComponent.push(
      <StyledTag no sugar title="sugar free">
        S
      </StyledTag>
    );
  }
  if (props.data.includes("wheatFree")) {
    mainComponent.push(
      <StyledTag no wheat title="wheat free">
        W
      </StyledTag>
    );
  }
  if (props.data.includes("vegan")) {
    mainComponent.push(
      <StyledTag vegan title="vegan">
        V
      </StyledTag>
    );
  }
  if (props.data.includes("organic")) {
    mainComponent.push(
      <StyledTag organic title="organic">
        O
      </StyledTag>
    );
  }
  return mainComponent;
}
