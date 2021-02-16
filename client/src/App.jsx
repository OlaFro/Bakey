import GlobalStyle from "./styledComponents/GlobalStyle";
import { useState, useEffect } from "react";
import Axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { bakeyContext } from "./Context";
import Login from "./components/Login";
import RegistrationUser from "./components/RegistrationUser";
import RegistrationCafe from "./components/RegistrationCafe";
import DashboardUser from "./components/DashboardUser";
import DashboardCafe from "./components/DashboardCafe";
import Navigation from "./components/Navigation";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [userName, setUserName] = useState("");
  const [profilePic, setProfilePic] = useState();
  const [role, setRole] = useState("");

  // useEffect(() => {
  //   Axios({
  //     method: "GET",
  //     url: `users/auth`,
  //   })
  //     .then((res) => {
  //       if (res.data.authorized) {
  //         console.log(res.data);
  //         setIsLogged(true);
  //         setUserName(res.data.firstName);
  //         setProfilePic(res.data.profilePic);
  //         setRole(() => res.data.userType);
  //       } else {
  //         setIsLogged(false);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setIsLogged(false);
  //     });
  // }, []);

  return (
    <bakeyContext.Provider
      value={{
        isLogged,
        setIsLogged,
        userName,
        setUserName,
        profilePic,
        setProfilePic,
        role,
        setRole,
      }}
    >
      <Router>
        <GlobalStyle />
        <Navigation />
        <Switch>
          <Route path="/" exact>
            <h1>Welcome to bakey</h1>
          </Route>
          <Route path="/registration/user">
            <RegistrationUser />
          </Route>
          <Route path="/registration/cafe">
            <RegistrationCafe />
          </Route>
          <Route path="/client/dashboard">
            {isLogged && role === "client" ? (
              <DashboardUser />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route path="/cafe/dashboard">
            {isLogged && role === "cafe" ? (
              <DashboardCafe />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            {" "}
            <Redirect to="/" />{" "}
          </Route>
        </Switch>
      </Router>
    </bakeyContext.Provider>
  );
}

export default App;
