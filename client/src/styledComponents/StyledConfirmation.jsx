import styled from "styled-components";
import { lighten } from "polished";
import colors from "./colors";
import device from "./device";

import { CheckDouble, Link } from "styled-icons/boxicons-regular";

export const StyledConfirmationContainer = styled.div``;

export const StyledLoader = styled.div`
  display: ${(props) => props.display};
  flex-direction: column;
  align-items: center;
  span {
    margin: var(--space-m) 0;
  }
`;

export const StyledCongrats = styled.main`
  width: 80%;
  margin: auto;
  display: ${(props) => props.display};
  flex-direction: column;
  align-items: center;
  p {
    text-align: center;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const StyledLinkContainer = styled.div`
  cursor: pointer;
  padding: var(--space-s);
  background-color: ${lighten(0.2, colors.gray)};
  font-family: monospace;
`;

export const StyledLink = styled(Link)`
  width: 2rem;
  height: 2rem;
  margin-left: var(--space-xs);
  cursor: pointer;
  display: ${(props) => props.display};
`;

export const StyledCopied = styled(CheckDouble)`
  width: 2.4rem;
  height: 2.4rem;
  margin-left: var(--space-xs);
  cursor: pointer;
  display: ${(props) => props.display};
`;
