const ListingModel = require("../models/ListingModel");
const listingAction = {};

listingAction.inactivate = (req, res, next) => {
  const now = new Date();
  now.setHours(24, 0, 0, 0);
  req.date = now;
  next();
};

module.exports = listingAction;
