import styled from "styled-components";
import { lighten } from "polished";
import colors from "./colors";
import device from "./device";

import { CheckDouble, Link } from "styled-icons/boxicons-regular";

export const StyledConfirmationContainer = styled.div`
  @media ${device.mobile} {
    width: 95vw;
    margin: auto;
  }
`;

export const StyledLoader = styled.div`
  display: ${(props) => props.display};
  flex-direction: column;
  align-items: center;
  span {
    margin: var(--space-m) 0;
  }
`;

export const StyledCongrats = styled.main`
  width: 70%;
  margin: var(--space-s) auto;
  display: ${(props) => props.display};
  flex-direction: column;
  align-items: center;

  h1 {
    margin: var(--space-xs) 0;
  }

  p {
    text-align: center;
    margin: var(--space-xs) 0;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  button {
    margin: var(--space-xs) 0;
  }
`;

export const StyledLinkContainer = styled.div`
  cursor: pointer;
  padding: var(--space-s);
  margin: var(--space-m) 0;
  background-color: ${lighten(0.2, colors.gray)};
  :active {
    background-color: ${colors.accent1};
  }

  @media ${device.mobile} {
  }
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

export const StyledCopyToClipboard = styled.div`
  @media (max-width: 600px) {
    overflow-wrap: break-word;
    word-wrap: break-word;

    -ms-word-break: break-all;
    word-break: break-all;
    word-break: break-word;
  }
`;
