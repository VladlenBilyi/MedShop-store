const { Schema, model } = require("mongoose");

const orderSchema = new Schema({ 
    userID : {
        type :Schema.Types.ObjectId,
        ref : 'user',
        required : true
    },
    orderData :  [
                   {
                    "productID":{
                    type :Schema.Types.ObjectId,
                    ref : 'product',
                    required : true
                     }
                   }
                 ],
    
   packed : {type :Boolean , default : false} ,
   shipped: {type :Boolean , default : false} ,
   delivered : {type :Boolean , default : false} ,
   payment : {type :Number} ,
   paymentType : {type :String},
   location:{type : Object , required:true}

});

const orderModel = model("order", orderSchema);

module.exports = orderModel;
