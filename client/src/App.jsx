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
import DashboardClient from "./components/DashboardClient";
import DashboardCafe from "./components/DashboardCafe";
import Navigation from "./components/Navigation";
import ListingForm from "./components/ListingForm";

import Profile from "./components/Profile";
import ListView from "./components/ListView";
import Settings from "./components/Settings";
import LandingPage from "./components/LandingPage";

import Order from "./components/Order";
import Footer from "./components/Footer";

function App() {
  const [isLogged, setIsLogged] = useState({ state: false, role: "", id: "" });
  const [userName, setUserName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [cafeName, setCafeName] = useState("");
  const [cafes, setCafes] = useState([]);
  const [city, setCity] = useState("Leipzig");
  const [selectedListing, setSelectedListing] = useState({
    listingImage: "",
    listingName: "",
    listingAllergenes: [],
    listingTags: [],
    totalPieces: "",
    pickUpDate: "",
    piecePrice: "",
  });

  useEffect(() => {
    console.log("authentication  request sent");
    Axios({
      method: "GET",
      url: `users/auth`,
    })
      .then((res) => {
        if (res.data.authenticated) {
          console.log(res.data);
          setIsLogged({
            state: true,
            role: res.data.userType,
            id: res.data.id,
          });
          setUserName(res.data.firstName);
          setProfilePic(res.data.profilePic);
          setCafeName(res.data.cafeName);
        } else {
          setIsLogged({ state: false, role: "" });
        }
      })
      .catch((err) => {
        console.log(err);
        setIsLogged({ state: false, role: "" });
      });
    // .finally(() => {
    //   alert("This is just a demo project not offering real products!");
    // });
  }, []);

  return (
    <bakeyContext.Provider
      value={{
        city,
        setCity,
        isLogged,
        setIsLogged,
        userName,
        setUserName,
        profilePic,
        setProfilePic,
        cafeName,
        setCafeName,
        cafes,
        setCafes,
        selectedListing,
        setSelectedListing,
      }}
    >
      <Router>
        <GlobalStyle />
        <div className="wrapper">
          <Navigation />
          <Switch>
            <Route path="/" exact>
              <LandingPage />
            </Route>
            <Route path="/registration/user" exact>
              <RegistrationUser />
            </Route>
            <Route path="/registration/cafe" exact>
              <RegistrationCafe />
            </Route>
            <Route path="/client-dashboard" exact>
              {isLogged.state && isLogged.role === "client" ? (
                <DashboardClient />
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
            <Route path="/listingform" exact>
              {isLogged.state && isLogged.role === "cafe" ? (
                <ListingForm />
              ) : (
                <Redirect to="/" />
              )}
            </Route>
            <Route path="/cafes-list" exact>
              <ListView />
            </Route>
            <Route path="/settings" exact>
              {isLogged.role === "cafe" ? <Settings /> : <Redirect to="/" />}
            </Route>
            <Route path="/cafe:id" exact>
              <Profile />
            </Route>
            <Route path="/order" exact>
              <Order />
            </Route>
            <Route path="*">
              {" "}
              <Redirect to="/" />{" "}
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </bakeyContext.Provider>
  );
}

export default App;
