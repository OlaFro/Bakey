const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  userType: { type: String, enum: ["cafe", "client"], required: true },
  cafeName: {
    type: String,
  },
  profilePic: {
    type: String,
  },
  cafeCover: {
    type: String,
  },
  cafeStreet: {
    type: String,
  },
  cafeStreetNr: {
    type: String,
  },
  cafeZip: {
    type: String,
  },
  cafeURL: {
    type: String,
  },
  cafeListings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Listing" }],
});

//coordinates?

module.exports = mongoose.model("User", UsersSchema);
