const mongoose = require("mongoose");
const {Schema} = require('mongoose')
const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  createdAt:{
    type : Date,
    default : Date.now(),
  },
  updatedAt:{
    type : Date,
    default : Date.now(),
  },
  verified: {
    type : Boolean,
    default : false
  },
  role:{
    type : Schema.Types.ObjectId,
    ref : "role"
  }
});

module.exports = mongoose.model("user", UserSchema);
