import GlobalStyle from "./styledComponents/GlobalStyle";
import { useState } from "react";
import Warning from "./components/Warning";
import Login from "./components/Login";
import RegistrationUser from "./components/RegistrationUser";
import RegistrationCafe from "./components/RegistrationCafe";
import StyledButton from "./styledComponents/StyledButton";
import { bakeyContext } from "./Context";
import Navigation from "./components/Navigation";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

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
      <Router>
      <Navigation />
      <RegistrationCafe />
      <GlobalStyle />
      <Switch>
        <Route path="/registrationuser">
      <RegistrationUser />
      </Route>
      {/* <Route path="/login">
      <Login /> 
      </Route>*/}
      </Switch>
      </Router>

    </bakeyContext.Provider>

  );
}

export default App;
