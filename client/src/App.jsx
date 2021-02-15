import GlobalStyle from "./styledComponents/GlobalStyle";
import { useState } from "react";
import Warning from "./components/Warning";
import Login from "./components/Login";
import RegistrationUser from "./components/RegistrationUser";
import RegistrationCafe from "./components/RegistrationCafe";
import StyledButton from "./styledComponents/StyledButton";
import { bakeyContext } from "./Context";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [userName, setUserName] = useState("");
  const [profilePic, setProfilePic] = useState();

  return (
    <bakeyContext.Provider
      value={{
        isLogged,
        setIsLogged,
        userName,
        setUserName,
        profilePic,
        setProfilePic,
      }}
    >
      <GlobalStyle />
      <RegistrationUser />
      <RegistrationCafe />
      {/* <Login /> */}

    </bakeyContext.Provider>

  );
}

export default App;
