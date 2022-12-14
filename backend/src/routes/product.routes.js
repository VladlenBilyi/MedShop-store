const express = require("express");
const ProductRoute = express.Router();
const cors = require("cors");
const productModel = require("../model/product.model");
const {getProduct,updateProduct,deleteProduct,updateQuantity,createProduct,getOneProduct} = require('../controller/product.controller')
ProductRoute.use(cors());


ProductRoute.get('/',async(req,res)=>{
    res.send('welcome to product route')
})

ProductRoute.post('/',async(req,res)=>{
    let newProduct = req.body;
    
})

module.exports = ProductRoute