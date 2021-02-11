import Axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Warning from "./Warning";

export default function RegistrationUser() {
  const history = useHistory();

  const [data, setData] = useState({});
  const [msg, setMsg] = useState({ firstName: true });
  const [warning, setWarning] = useState(false);
  const [warningContent, setWarningContent] = useState("");
  const [warningValidation, setWarningValidation] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const getValue = (e) => {
    setWarning(false);
    setWarningValidation(false);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();

    setMsg({});

    Axios({
      method: "POST",
      url: "/users/register",
      data: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.msg) {
          let msgChanged = res.data.msg.reduce((acc, item) => {
            acc[item.param] = true;
            return acc;
          }, {});
          setMsg(msgChanged);
        } else if (res.data.code === 11000) {
          setWarningContent(Object.keys(res.data.keyValue)[0]);
          setWarning(true);
        } else if (
          res.data._message === "users validation failed" ||
          res.data.errorSource === "BCRYPT"
        ) {
          setWarningValidation(true);
        } else {
          history.push("/login");
        }
      })
      .catch((err) => {
        console.log(err);
        setShowWarning(true);
      });
  };

  return showWarning ? (
    <Warning />
  ) : (
    <section>
      <form onSubmit={submit}>
        <header>
          <h2>Registration</h2>
        </header>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            onInput={getValue}
            required
          />
          {msg.firstName ? (
            <small>Please write your name in letters</small>
          ) : null}
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            onInput={getValue}
            required
          />
          {msg.lastName ? (
            <small>Please write your name in letters</small>
          ) : null}
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            onInput={getValue}
            required
          />
          {msg.email ? <small>Please use proper e-mail address</small> : null}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onInput={getValue}
            required
          />
          {msg.password ? (
            <small>Your password does not meet the password criteria</small>
          ) : null}
        </div>
        <div>
          <label htmlFor="passwordConfirm">Repeat password</label>
          <input
            type="password"
            name="passwordConfirm"
            id="passwordConfirm"
            onInput={getValue}
            required
          />
          {msg.password ? (
            <small>Your password does not meet the password criteria</small>
          ) : null}
        </div>
        <div>
          <label htmlFor="city">See offers from:</label>
          <select id="city" name="city" onInput={getValue}>
            <option value="Leipzig">Leipzig</option>
            <option value="Hamburg">Hamburg</option>
            <option value="Düsseldorf">Düsseldorf</option>
          </select>
          {msg.password ? (
            <small>Your password does not meet the password criteria</small>
          ) : null}
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
        <p>If you are already registered, please login.</p>
        {warning ? (
          <div>
            <p>User with this {warningContent} already exists, please log-in</p>
          </div>
        ) : null}
        {warningValidation ? <p>Please fill all fields!</p> : null}
      </form>
    </section>
  );
}
