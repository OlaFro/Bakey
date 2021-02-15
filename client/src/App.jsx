import GlobalStyle from "./styledComponents/GlobalStyle";
import { useState } from "react";
import Warning from "./components/Warning";
import Login from "./components/Login";
import Registration from "./components/Registration";
import { bakeyContext } from "./Context";
import Navigation from "./components/Navigation";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
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
      <GlobalStyle />
      <Warning msg="site is not found" />
      <Registration />
      <Login />
      </Router>
    </bakeyContext.Provider>
  );
}

export default App;
