const express = require("express");
const ProductRoute = express.Router();
const cors = require("cors");
const productModel = require("../model/product.model");
ProductRoute.use(cors());


ProductRoute.get('/',async(req,res)=>{
    res.send('welcome to product route')
})

module.exports = ProductRoute