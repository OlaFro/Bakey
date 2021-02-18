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
import ListingForm from "./components/ListingForm";

function App() {
  const [isLogged, setIsLogged] = useState({ state: false, role: "" });
  const [userName, setUserName] = useState("");
  const [profilePic, setProfilePic] = useState();
  // const [role, setRole] = useState("");

  useEffect(() => {
    console.log("authentication  request sent");
    Axios({
      method: "GET",
      url: `users/auth`,
    })
      .then((res) => {
        if (res.data.authenticated) {
          console.log(res.data);
          setIsLogged({ state: true, role: res.data.userType });
          setUserName(res.data.firstName);
          setProfilePic(res.data.profilePic);
        } else {
          setIsLogged({ state: false, role: "" });
        }
      })
      .catch((err) => {
        console.log(err);
        setIsLogged({ state: false, role: "" });
      });
  }, []);

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
        <GlobalStyle />
        <Navigation />
        <Switch>
          <Route path="/" exact>
            {/* <h1>Welcome to bakey</h1>
            listingForm for preview, will be deleted later */}
            <ListingForm />
          </Route>
          <Route path="/registration/user" exact>
            <RegistrationUser />
          </Route>
          <Route path="/registration/cafe" exact>
            <RegistrationCafe />
          </Route>
          <Route path="/client-dashboard" exact>
            {console.log(isLogged.state && isLogged.role === "client")}
            {isLogged.state && isLogged.role === "client" ? (
              <DashboardUser />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          <Route path="/cafe-dashboard" exact>
            {isLogged.state && isLogged.role === "cafe" ? (
              <DashboardCafe />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          <Route path="/login" exact>
            {isLogged.state ? <Redirect to="/" /> : <Login />}
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
