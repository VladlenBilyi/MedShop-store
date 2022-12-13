const express = require("express");
const OrderRoute = express.Router();
const cors = require("cors");
OrderRoute.use(cors());


OrderRoute.get('/',async(req,res)=>{
    res.send('welcome to OrderRoute')
})

module.exports = OrderRoute