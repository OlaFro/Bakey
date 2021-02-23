var express = require("express");
var router = express.Router();
const UserModel = require("../models/UserModel");

router.post("/", (req, res, next) => {
  //no need to check connection bc we connect in the app.js
  const city = req.body.city;
  UserModel.find({ city: city, userType: "cafe" })
    .populate({
      path: "cafeListings",
      select: ["listingName", "listingTags", "totalPieces", "availablePieces"],
    })
    .select([
      "cafeName",
      "profilePic",
      "cafeStreet",
      "cafeStreetNr",
      "cafeZip",
      "city",
    ])
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.post("/info", (req, res, next) => {
  const cafeID = req.body.id;
  UserModel.findById(cafeID)
    .populate("cafeListings")
    .select(["-password"])
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
