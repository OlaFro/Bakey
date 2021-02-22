var express = require("express");
var router = express.Router();
const User = require("../models/UserModel");

router.post("/", (req, res, next) => {
  //no need to check connection bc we connect in the app.js
  const city = req.body.city;
  User.find({ city: city, userType: "cafe" })
    .populate({
      path: "cafeListings",
      select: ["listingName", "listingTags", "totalPieces", "availablePieces"],
    })
    .select(["cafeName"])
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
