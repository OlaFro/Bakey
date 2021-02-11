const { createGlobalStyle } = require("styled-components");

const GlobalStyle = createGlobalStyle`

:root {
  --display: "Dancing Script", cursive;
  --text: "Raleway", sans-serif;

  --space-small: 0.75em;
  --space-medium: 1.5em;
  --space-larger: 2em;
  --space-large: 3em;
}

html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  margin: 0;
  padding: 0;
  font-family: var(--text);
}
`;

export default GlobalStyle;
