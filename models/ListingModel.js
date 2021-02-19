const mongoose = require("mongoose");

const ListingSchema = new mongoose.Schema({
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
     required: true
 },
 pickUpDate: {
     type: Date,
 },
 listingStatus: {
    type: String, enum: ["active", "inactive", "sold"], required: true 
 }
});

module.exports = mongoose.model("Listing", ListingSchema);