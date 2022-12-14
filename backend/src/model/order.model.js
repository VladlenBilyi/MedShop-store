const { Schema, model } = require("mongoose");

const orderSchema = new Schema({
   data : {
    userId : {
        type :Schema.Types.ObjectId,
        ref : 'user',
        required : true
    },
    productId:{
        type :Schema.Types.ObjectId,
        ref : 'products',
        required : true
    }
   },
    
   packed : {type :Boolean , default : false} ,
   shipped: {type :Boolean , default : false} ,
   delivered : {type :Boolean , default : false} ,
   payment : {type :Number} ,
   paymentType : {type :String},
   location:{type : Object , required:true}

});

const orderModel = model("order", orderSchema);

module.exports = orderModel;

// orderData :  [
    //     {
    //         title: { type: String, required: true },
    //         img1: { type: String, required: true },
    //         img2: { type: String, required: false },
    //         img3: { type: String, required: false },
    //         mrp: { type: Number, required: true },
    //         strike: { type: Number, required: false },
    //         discount: { type: Number, required: false },
    //         ancestor: { type: [String], required: true },
    //         brand: { type: String, required: false },
    //         instock: { type: Boolean, default: true, required: true },
    //         quantity : {type :Number ,default : 15}
    //       }
    // ],