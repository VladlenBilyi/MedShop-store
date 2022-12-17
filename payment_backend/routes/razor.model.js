const mongoose = require("mongoose");

razorSchema = new mongoose.Schema({
    razorpay_payment_id: {
        type: String,
        required: true
    },
    razorpay_order_id: {
        type:String,required:true
    },
    razorpay_signature: {
        type:String,required:true

    },
    email:{
        type:String,required:true
    }
    ,amount:{
        type:Number,required:true
    }
},{
    versionKey:false,
    timestamps:true
});
module.exports = mongoose.model("razorpay", razorSchema);