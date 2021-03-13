import colors from "./colors";
import device from "./device";
import { lighten } from "polished";

const { default: styled } = require("styled-components");

const StyledFooter = styled.footer`
  height: 40vh;
  display: grid;
  justify-items: center;
  align-content: center;
  text-align: center;
  padding: var(--space-l);
  font-size: 0.8rem;
  margin-top: 20vh;
  background-color: rgb(252, 230, 152);
  background-color: ${lighten(0.08, colors.gray)};
  color: white;
  border-radius: var(--border-radius) var(--border-radius) 0 0;

  > :first-child {
    box-shadow: none;
    background-color: transparent;
    height: 80px;
  }

  p {
    font-weight: 700;
    letter-spacing: 0.5px;
  }

  .responsive {
    display: inline;
    @media ${device.mobile} {
      display: none;
    }
  }

  a {
    color: white;
  }

  .logos {
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-top: -1rem;
  }

  .logoAlice {
    width: 25px;
    transform: translateY(40%);
  }
`;

export default StyledFooter;
