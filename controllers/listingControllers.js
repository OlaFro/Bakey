const ListingModel = require("../models/ListingModel");
const listingAction = {};

listingAction.inactivate = (req, res, next) => {
  const now = new Date();
  now.setHours(24, 0, 0, 0);
  //   const string = `${now.getFullYear()}-0${
  //     now.getMonth() + 1
  //   }-0${now.getDate()}T24:00`;
  //   const today = new Date(string.toString());
  req.date = now;
  next();
};

module.exports = listingAction;
