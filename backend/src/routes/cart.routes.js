const express = require("express");
const CartRoute = express.Router();
const cors = require("cors");
CartRoute.use(cors());


CartRoute.get('/',async(req,res)=>{
    res.send('welcome to CartRoute')
})

module.exports = CartRoute