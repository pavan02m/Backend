const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const nurserySchema = new mongoose.Schema({
  name: String,
  address: String,
  registrationNo: Number,
  contact: Number,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("nursery", nurserySchema);
