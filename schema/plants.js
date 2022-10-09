const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const plantSchema = new mongoose.Schema({
  name: String,
  description: String,
  category: String,
  image: String,
  price : Number,
  qunatity : Number,
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

module.exports = mongoose.model("plant", plantSchema);
