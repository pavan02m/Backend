const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const ownerSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  contact: Number,
  nurseryId: {
    type: Schema.Types.ObjectId,
    ref: "nursery",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("owner", ownerSchema);
