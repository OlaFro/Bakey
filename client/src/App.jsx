import GlobalStyle from "./styledComponents/GlobalStyle";

import Warning from "./components/Warning";
import Login from "./components/Login";
import RegistrationUser from "./components/RegistrationUser";
import RegistrationCafe from "./components/RegistrationCafe";
import StyledButton from "./styledComponents/StyledButton";

function App() {
  return (
    <div>
      <GlobalStyle />
      {/* <Warning msg="site is not found" /> */}

      <RegistrationUser />
      <RegistrationCafe />
      {/* <Login /> */}
    </div>
  );
}

export default App;
