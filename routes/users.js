var express = require("express");
const validateData = require("../controllers/validControllers");
const UserModel = require("../models/UserModel");
const { verifyPassword } = require("../controllers/authControllers");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/register", validateData.register, (req, res, next) => {
  console.log(req.body);
  let newUser = req.body;

  UserModel.estimatedDocumentCount({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      newUser.id = result + 1;
      console.log(newUser);

      let addedUser = new UserModel({
        id: newUser.id,
        email: newUser.email,
        password: newUser.password,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        city: newUser.city,
        userType: newUser.userType,
      });

      bcrypt.hash(newUser.password, 10, (err, hashedPassword) => {
        if (!err) {
          addedUser.password = hashedPassword;
          addedUser
            .save()
            .then(() => {
              res.send({ registered: true });
            })
            .catch((err) => {
              res.send(err);
            });
        } else {
          res.send({ errorSource: "BCRYPT" });
        }
      });
    }
  });
});

router.post(
  "/login",
  validateData.sanitize,
  verifyPassword,
  (req, res, next) => {
    const user = req.user;
    console.log(user);

    let token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "3d",
    });
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "strict",
    });
    console.log(token);

    res.send({
      logged: true,
      firstName: user.firstName,
      profilePic: user.profilePic,
    });
  }
);

router.get("/logout", (req, res, next) => {
  console.log(req.cookies.token);
  res.clearCookie("token");
  res.send({ logged: false });
});

router.put("/update", (req, res, next) => {
  res.send("settings");
});

module.exports = router;
