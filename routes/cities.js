var express = require("express");
var router = express.Router();
const UserModel = require("../models/UserModel");

router.get("/all", (req, res, next) => {
  UserModel.distinct("city", { userType: "cafe" })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
