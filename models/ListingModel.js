const mongoose = require("mongoose");
require("dotenv").config();

connectionString = process.env.DB_URL;

const Schema = mongoose.Schema;

const ListingsSchema = new Schema({
  id: {
    type: String,
    unique: true,
    required: true,
  },
  cafeId: {
      type: String,
      required: true,
  },
  cafeName: {
      type: String,
      required: true,
  },

  listingName: {
      type: String,
      required: true,
  },
  listingTags: {
      type: Object,
  },
  listingAllergenes: {
      type: Object,
  },
  totalPieces: {
      type: Number,
      required: true,
  },
  availablePieces: {
      type: Number,
      required: true,
  },
  piecePrice: {
      type: Number,
      required: true,
  },
 listingPicture: {
     type: String,
 },
});

module.exports = mongoose.model("Listing", UsersSchema);