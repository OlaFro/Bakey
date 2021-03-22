import GlobalStyle from "./styledComponents/GlobalStyle";
import { useState, useEffect } from "react";
import Axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";
import { bakeyContext } from "./Context";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import RegistrationUser from "./pages/RegistrationUser";
import RegistrationCafe from "./pages/RegistrationCafe";
import DashboardClient from "./pages/DashboardClient";
import DashboardCafe from "./pages/DashboardCafe";
import ListingForm from "./pages/ListingForm";
import Profile from "./pages/Profile";
import ListView from "./pages/ListView";
import Settings from "./pages/Settings";
import LandingPage from "./pages/LandingPage";
import AboutUs from "./pages/AboutUs";
import Order from "./pages/Order";
import ProtectedRoute from "./ProtectedRoutes";

function App() {
  const history = useHistory();

  const [isLogged, setIsLogged] = useState({ state: false, role: "", id: "" });
  const [userName, setUserName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [cafeName, setCafeName] = useState("");
  const [cafes, setCafes] = useState([]);
  const [city, setCity] = useState("Leipzig");
  const [availableCities, setAvailableCities] = useState([]);
  const [selectedListing, setSelectedListing] = useState({
    listingImage: "",
    listingName: "",
    listingAllergenes: [],
    listingTags: [],
    totalPieces: "",
    pickUpDate: "",
    piecePrice: "",
  });

  const orderInfo = sessionStorage.getItem("orderInfo");
  const location = sessionStorage.getItem("location");

  useEffect(() => {
    Axios({
      method: "GET",
      url: `users/auth`,
    })
      .then((res) => {
        if (res.data.authenticated) {
          setIsLogged({
            state: true,
            role: res.data.userType,
            id: res.data.id,
          });
          setUserName(res.data.firstName);
          setProfilePic(res.data.profilePic);
          setCafeName(res.data.cafeName);
          setCity(res.data.city);
          if (orderInfo && res.data.userType === "client") {
            history.push("/order");
          }
          if (location) {
            history.push(`/${location}`);
          }
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

  useEffect(() => {
    Axios({
      method: "GET",
      url: "cities/all",
    })
      .then((res) => {
        if (Array.isArray(res.data)) {
          setAvailableCities(res.data);
        } else {
          setAvailableCities(["Leipzig"]);
        }
      })
      .catch((err) => {
        console.log(err);
        setAvailableCities(["Leipzig"]);
      });
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
        availableCities,
        setAvailableCities,
      }}
    >
      <GlobalStyle />
      <div className="wrapper">
        <Navigation />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/cafes-list" exact component={ListView} />
          <Route path="/about-us" exact component={AboutUs} />
          <Route path="/registration-user" exact component={RegistrationUser} />
          <Route path="/registration-cafe" exact component={RegistrationCafe} />
          <ProtectedRoute
            path="/login"
            exact
            condition={!isLogged.state}
            component={Login}
          />
          <ProtectedRoute
            path="/client-dashboard"
            exact
            condition={isLogged.state && isLogged.role === "client"}
            component={DashboardClient}
          />
          <ProtectedRoute
            path="/cafe-dashboard"
            exact
            condition={isLogged.state && isLogged.role === "cafe"}
            component={DashboardCafe}
          />
          <ProtectedRoute
            path="/listingform"
            exact
            condition={isLogged.state && isLogged.role === "cafe"}
            component={ListingForm}
          />
          <ProtectedRoute
            path="/settings"
            exact
            condition={isLogged.state && isLogged.role === "cafe"}
            component={Settings}
          />
          <Route path="/cafe:id" exact component={Profile} />
          <Route path="/order" exact component={Order} />
          <Route path="*">
            {" "}
            <Redirect to="/" />{" "}
          </Route>
        </Switch>
        <Footer />
      </div>
    </bakeyContext.Provider>
  );
}

export default App;
