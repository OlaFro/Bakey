const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
require("dotenv").config();


connectionString = process.env.DB_URL;

const Schema = mongoose.Schema;

const Users = new Schema({
  id: {
    type: String,
    required: true
  },
   email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  userType: { type: String,
    enum: ['cafe', 'client'],
    required: true
  },
  cafeName: {
    type: String,
  },
  profilePic: {
    type: String,
  },
  cafeCover: {
    type: String,
  },
  cafeAddress: {
    type: String
  },
  cafeURL: {
    type: String
  }
 })

//coordinates?

module.exports = mongoose.model("User", Users);
