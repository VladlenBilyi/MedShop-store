const express = require("express");
const UserRoute = express.Router();
const cors = require("cors");
const userModel = require("../model/user.model");
UserRoute.use(cors());


UserRoute.get('/',async(req,res)=>{
    res.send('welcome to UserRoute')
})

module.exports = UserRoute