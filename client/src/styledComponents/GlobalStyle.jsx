const { createGlobalStyle } = require("styled-components");

const GlobalStyle = createGlobalStyle`

:root {
  --logo: 'Montserrat Alternates', sans-serif;
  --headings: 'Montserrat', sans-serif;
  --text: 'Raleway', sans-serif;
  
  --border: 2px;
  --border-radius: 12px;

  --space-xs: 0.5em;
  --space-s: 1em;
  --space-m: 2em; 
  --space-l: 3em;

  --ls: 0.15em;

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
  font-family: var(--headings);
  color: #4A4A4A;
}

h2 {
  text-transform: uppercase;
  letter-spacing: var(--ls);
  font-weight: 700;
}


h4{
  font-size: 1.5rem;
  font-weight: 300;

}


h3{
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: var(--ls);
}

p {
  font-family: var(--text);
}

.wrapper{
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  

}


}
`;

export default GlobalStyle;
