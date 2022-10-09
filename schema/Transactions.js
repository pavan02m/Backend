const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  nurseryId: {
    type: Schema.Types.ObjectId,
    ref: "nursery",
  },
  TransactionId: String,
  PaymentId : String,
  amount : String,
  paymentStatus: String,
  TransactionDate: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("owner", TransactionSchema);
