const express = require("express");
const CartRoute = express.Router();
const cors = require("cors");
const cartModel = require("../model/cart.model");
const productModel = require("../model/product.model");
CartRoute.use(cors());


// CartRoute.get('/',async(req,res)=>{
//     res.send('welcome to CartRoute')
// })


CartRoute.post('/:id',async(req,res)=>{
    const {id} = req.params
    const {productId} = req.body
    let data = await cartModel.create({userId:id,productId})
    res.send(data)
})


CartRoute.get('/:id',async(req,res)=>{
    const {id} = req.params
    let data = await cartModel.find({userId:id}).populate('productId')
    res.send(data)
})



module.exports = CartRoute