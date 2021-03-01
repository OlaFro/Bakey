var express = require("express");
const listingAction = require("../controllers/listingControllers");
var router = express.Router();
const UserModel = require("../models/UserModel");

router.post("/", listingAction.inactivate, (req, res, next) => {
  //no need to check connection bc we connect in the app.js
  const city = req.body.city;
  const today = req.date;
  UserModel.find({ city: city, userType: "cafe", cafeListings: { $ne: null } })
    .populate({
      path: "cafeListings",
      match: { listingStatus: "active", pickUpDate: { $gte: today } },
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
      result = result.filter((cafe) => cafe.cafeListings.length);
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.post("/info", listingAction.inactivate, (req, res, next) => {
  const cafeID = req.body.id;
  const today = req.date;
  UserModel.findById(cafeID)
    .populate({
      path: "cafeListings",
      match: { listingStatus: "active", pickUpDate: { $gte: today } },
    })
    .select(["-password"])
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
