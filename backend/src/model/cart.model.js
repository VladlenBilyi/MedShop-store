const mongoose = require("mongoose");

cartItemSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    productID: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
        required: true
    }]
},{
    versionKey:false,
    timestamps:true
});
module.exports = mongoose.model("cartItem", cartItemSchema);