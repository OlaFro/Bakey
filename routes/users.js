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
  let token = jwt.sign(
    { id: user.id, userType: user.userType, cafeName: user.cafeName },
    process.env.JWT_SECRET,
    {
      expiresIn: "3d",
    }
  );
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
        id: user.id,
        firstName: result.firstName,
        profilePic: result.profilePic,
        userType: result.userType,
        cafeName: result.cafeName,
        city: result.city,
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

    UserModel.find()
      .sort({ _id: -1 })
      .limit(1)
      .then((newest) => {
        newUser.id = +newest[0].id + 1;

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
      })
      .catch((err) => {
        res.send(err);
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

    let token = jwt.sign(
      { id: user._id, userType: user.userType, cafeName: user.cafeName },
      process.env.JWT_SECRET,
      {
        expiresIn: "3d",
      }
    );
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "strict",
    });
    console.log(token);

    res.send({
      logged: true,
      id: user._id,
      firstName: user.firstName,
      profilePic: user.profilePic,
      userType: user.userType,
      cafeName: user.cafeName,
      city: user.city,
    });
  }
);

router.get("/logout", (req, res, next) => {
  console.log(req.cookies.token);
  res.clearCookie("token");
  res.send({ logged: false });
});

router.get("/profile-info", authenticateToken, (req, res, next) => {
  const user = req.user;

  UserModel.findById(user.id)
    .select([
      "firstName",
      "lastName",
      "cafeName",
      "profilePic",
      "cafeCover",
      "cafeDescription",
      "cafeURL",
      "city",
      "cafeStreet",
      "cafeStreetNr",
      "cafeZip",
    ])
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
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

    console.log(req.files);

    let modification = {};

    if (req.files && req.files["file"]) {
      modification.profilePic = req.files["file"][0].path;
    }

    modification.city = data.city;

    if (data.userType === "cafe") {
      if (req.files && req.files["cover"]) {
        modification.cafeCover = req.files["cover"][0].path;
      }
      if (data.cafeURL) {
        modification.cafeURL = data.cafeURL;
      }

      modification.cafeDescription = data.cafeDescription
        ? data.cafeDescription
        : "Oat cake tart toffee. Chocolate cake muffin lollipop. Bear claw gummies apple pie biscuit fruitcake cake sesame snaps tootsie roll candy. Cake icing macaroon chocolate cake pie apple pie pudding toffee dessert. Sweet roll danish candy cheesecake lemon drops. Pudding sweet roll dragée cupcake liquorice. Soufflé fruitcake marshmallow gingerbread caramels. Bear claw jelly beans cake sugar plum bonbon liquorice sugar plum tiramisu lemon drops. Pastry pudding marshmallow halvah liquorice soufflé tootsie roll cake.";

      modification.cafeName = data.cafeName;
      modification.firstName = data.firstName;
      modification.lastName = data.lastName;
      modification.cafeStreet = data.cafeStreet;
      modification.cafeStreetNr = data.cafeStreetNr;
      modification.cafeZip = data.cafeZip;
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

router.get("/orders", authenticateToken, (req, res, next) => {
  const user = req.user;
  UserModel.findById(user.id)
    .populate({ path: "orders", select: ["-buyers", "-boughtPieces"] })
    .select("orders")
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/cities", (req, res, next) => {
  UserModel.distinct("city", { userType: "cafe" })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => res.send(err));
});

module.exports = router;
