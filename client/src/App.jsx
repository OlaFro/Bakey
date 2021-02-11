import { GlobalStyle } from "./styledComponents/global";

import Warning from "./components/Warning";
import Login from "./components/Login";
import Registration from "./components/Registration";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Warning />
      <Registration />
      <Login />
    </div>
  );
}

export default App;
