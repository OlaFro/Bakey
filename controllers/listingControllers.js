const ListingModel = require("../models/ListingModel");
const listingAction = {};

listingAction.inactivate = (req, res, next) => {
  const now = new Date();
  const string = `${now.getFullYear()}-0${now.getMonth() + 1}-0${
    now.getDate() + 1
  }`;
  const today = new Date(string.toString());
  console.log(today);
  ListingModel.updateMany(
    { pickUpDate: { $lte: today } },
    { listingStatus: "inactive" }
  )
    .then((result) => {
      next();
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = listingAction;
