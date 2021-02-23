var express = require("express");
const validateData = require("../controllers/validControllers");
const UserModel = require("../models/UserModel");
const {
  verifyPassword,
  authenticateToken,
} = require("../controllers/authControllers");
const uploadFile = require("../controllers/multerController");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/auth", authenticateToken, (req, res, next) => {
  console.log("authentication request");
  const user = req.user;
  let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "3d",
  });
  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "strict",
  });
  console.log(token);
  UserModel.findById(user.id)
    .then((result) => {
      console.log(result);
      res.send({
        authenticated: true,
        firstName: result.firstName,
        profilePic: result.profilePic,
        userType: result.userType,
        cafeName: result.cafeName,
      });
    })
    .catch((err) => {
      res.send(err);
    });
});

router.post(
  "/register",
  validateData.sanitize,
  validateData.register,
  (req, res, next) => {
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

        if (newUser.userType === "cafe") {
          addedUser.cafeName = newUser.cafeName;
          addedUser.cafeStreet = newUser.cafeStreet;
          addedUser.cafeStreetNr = newUser.cafeStreetNr;
          addedUser.cafeZip = newUser.cafeZip;
        }

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
  }
);

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
      userType: user.userType,
      cafeName: user.cafeName,
    });
  }
);

router.get("/logout", (req, res, next) => {
  console.log(req.cookies.token);
  res.clearCookie("token");
  res.send({ logged: false });
});

router.put(
  "/update",
  authenticateToken,
  uploadFile,
  validateData.sanitize,
  validateData.updateProfile,
  (req, res, next) => {
    const data = req.body;
    const user = req.user;

    let modification = {};

    modification.profilePic = req.files && eq.files[0] ? req.files[0].path : "";
    // modification.city = data.city ? data.city : null;

    if (data.userType === "cafe") {
      modification.cafeCover =
        req.files && eq.files[1] ? req.files[1].path : "";
      modification.cafeURL = data.cafeURL ? data.cafeURL : null;
      modification.cafeDescription = data.cafeDescription
        ? data.cafeDescription
        : "Oat cake tart toffee. Chocolate cake muffin lollipop. Bear claw gummies apple pie biscuit fruitcake cake sesame snaps tootsie roll candy. Cake icing macaroon chocolate cake pie apple pie pudding toffee dessert. Sweet roll danish candy cheesecake lemon drops. Pudding sweet roll dragée cupcake liquorice. Soufflé fruitcake marshmallow gingerbread caramels. Bear claw jelly beans cake sugar plum bonbon liquorice sugar plum tiramisu lemon drops. Pastry pudding marshmallow halvah liquorice soufflé tootsie roll cake.";
      modification.cafeName = data.cafeName ? data.cafeName : null;
      modification.firstName = data.firstName ? data.firstName : null;
      modification.lastName = data.lastName ? data.lastName : null;
      // modification.cafeStreet = data.cafeStreet ? data.cafeStreet : null;
      // modification.cafeStreetNr = data.cafeStreetNr ? data.cafeStreetNr : null;
      // modification.cafeZip = data.cafeZip ? data.cafeZip : null;
    }
    UserModel.findByIdAndUpdate(user.id, { $set: modification }, { new: true })
      .then((result) => {
        res.send("info updated");
      })
      .catch((err) => {
        res.send(err);
      });
  }
);

module.exports = router;
