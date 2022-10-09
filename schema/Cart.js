const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const cartSchema = new mongoose.Schema({
    plant : {
        type : Schema.Types.ObjectId,
        ref : "plant"
    },
    user : {
        type : Schema.Types.ObjectId,
        ref: "user"
    }
});

module.exports = mongoose.model("cart", cartSchema);
