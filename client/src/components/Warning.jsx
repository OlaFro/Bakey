import React from "react";

import StyledWarning from "../styledComponents/StyledWarning";
import StyledH2 from "../styledComponents/StyledH2";
import StyledText from "../styledComponents/StyledText";

export default function Warning(props) {
  return (
    <div>
      <StyledWarning>
        <StyledH2>OOPS!</StyledH2>
        <StyledText>It looks like {props.msg} </StyledText>
      </StyledWarning>
    </div>
  );
}
