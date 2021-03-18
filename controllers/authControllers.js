var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const UserModel = require("../models/UserModel");
require("dotenv").config();

const allowedAccess = {};

allowedAccess.authenticateToken = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    res.send({ errorSource: "JWT" });
  } else {
    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
      if (err) {
        res.send({ errorSource: "JWT" });
      } else {
        console.log(payload);
        req.user = payload;
        next();
      }
    });
  }
};

allowedAccess.verifyPassword = (req, res, next) => {
  console.log("password verification");
  const userID = req.body.email;
  const { password } = req.body;

  console.log(userID);
  UserModel.find({ email: userID })
    .then((users) => {
      if (users.length) {
        let user = users[0];
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) {
            res.send({ errorSource: "BCRYPT" });
          } else {
            if (result) {
              req.user = user;
              next();
            } else {
              res.send({ logged: false });
            }
          }
        });
      } else {
        res.send({ logged: false });
      }
    })
    .catch((err) => {
      res.send(err);
    });
};

allowedAccess.authorizeCafe = (req, res, next) => {
  const user = req.user;
  if (user.userType === "cafe") {
    next();
  } else {
    res.send({ status: "no authorization" });
  }
};

module.exports = allowedAccess;
