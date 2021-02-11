import Axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Registration() {
  const history = useHistory();

  const [data, setData] = useState({});
  const [msg, setMsg] = useState({});
  const [warning, setWarning] = useState(false);
  const [warningContent, setWarningContent] = useState("");
  const [warningValidation, setWarningValidation] = useState(false);

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
        //display out of order component
      });
  };

  return (
    <section>
      <form onSubmit={submit}>
        <header>
          <h2>Registration</h2>
        </header>
        <p>
          This is just a mock-up, please{" "}
          <strong>do not use real data for registration</strong> (no
          confirmation e-mail is sent for registration)
        </p>
        <div>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            name="fullName"
            id="name"
            onInput={getValue}
            required
          />
          {msg.fullName ? (
            <small>Your full name shall contain just letters</small>
          ) : null}
        </div>
        <div>
          <label htmlFor="mail">E-mail</label>
          <input
            type="email"
            name="email"
            id="mail"
            onInput={getValue}
            required
          />
          {msg.email ? (
            <small>E-mail do not correspond to typical rules for email</small>
          ) : null}
        </div>
        <div>
          <label htmlFor="date">User name</label>
          <input
            type="text"
            name="uname"
            id="date"
            onInput={getValue}
            required
          />
          {msg.uname ? (
            <small>Please use just letters and numbers in your username</small>
          ) : null}
        </div>
        <div>
          <label htmlFor="pwd">Password</label>
          <input
            type="password"
            name="password"
            id="pwd"
            onInput={getValue}
            required
          />
          {msg.password ? (
            <small>
              Your password is too short, you need at least 10 characters
            </small>
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
