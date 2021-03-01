import device from "./device";

const { default: styled } = require("styled-components");

const StyledFooter = styled.footer`
  display: grid;
  justify-items: center;
  text-align: center;
  margin: var(--space-s) var(--space-m);
  font-size: 0.8rem;

  img {
    width: 25px;
    transform: translateY(40%);
  }

  strong {
    text-transform: uppercase;
  }
`;

export default StyledFooter;
