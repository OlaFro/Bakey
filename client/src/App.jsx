import GlobalStyle from "./styledComponents/GlobalStyle";

import Warning from "./components/Warning";
import Login from "./components/Login";
import RegistrationUser from "./components/RegistrationUser";

function App() {
  return (
    <div>
      <GlobalStyle />
      {/* <Warning msg="site is not found" /> */}
      <RegistrationUser />
      {/* <Login /> */}
    </div>
  );
}

export default App;
