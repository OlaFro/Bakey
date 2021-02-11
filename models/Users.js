const mongoose = require("mongoose");
require("dotenv").config();

connectionString = process.env.DB_URL;

const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  id: {
    type: String,
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
  userType: { type: String, enum: ["cafe", "client"] },
  cafeName: {
    type: String,
  },
  profilePic: {
    type: String,
  },
  cafeCover: {
    type: String,
  },
});

module.exports = mongoose.model("User", Users);
