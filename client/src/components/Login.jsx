import Axios from "axios";
import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import {bakeyContext} from "../Context"

export default function Login(props) {
 
  const [loginData, setData] = useState({});
  const [warning, setWarning] = useState(false);
  const {setIsLogged, setUserName, setProfilePic} = useContext(bakeyContext);
  
  let history = useHistory();

  const getData = (e) => {
    setWarning(false);
    setData({ ...loginData, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log("request send", loginData);

    Axios({
      method: "POST",
      url: "/users/login",
      data: JSON.stringify(loginData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.data.logged) {
          console.log(res.data);
          setIsLogged(true);
          setUserName(res.data.firstName);
          setProfilePic(res.data.profilePic);
          setData({});
        } else {
          setWarning(true);
        }
      })
      .catch((err) => {
        console.log(err);
        //display out of order component
      });
  };

  return (
    <section>
      <form onSubmit={submit}>
        <header>
          <h2>Login</h2>
        </header>
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="mail"
            name="email"
            id="email"
            aria-describedby="emailHelp"
            onInput={getData}
            required
          />
          <small id="emailHelp">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Password</label>
          <input
            type="password"
            name="password"
            id="pwd"
            onInput={getData}
            required
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
        <p>
          If you have no account already, please sign-up. Testing login data:
          jane.doe@gmail.com, password 12345678910
        </p>
        {warning ? (
          <div>
            <p>
              Access denied! Combination of the e-mail and password is not
              correct
            </p>
          </div>
        ) : null}
      </form>
    </section>
  );
}
