const { Schema, model } = require("mongoose");

const cartSchema = new Schema({
    userId : {
        type :Schema.Types.ObjectId,
        ref : "user",
        required : true
    },
    productId : {
        type :Schema.Types.ObjectId,
        ref : "product",
        required : true
    }

});

const cartModel = model("cart", cartSchema);

module.exports = cartModel;