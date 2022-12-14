const express = require("express");
const OrderRoute = express.Router();
const cors = require("cors");
const { getOrder, deleteOrder, shippingSuccess, packingSuccess, deliverSuccess, createOrder, getSingleOrder, getOrderDataForUser } = require("../controller/order.controller");
OrderRoute.use(cors());


OrderRoute.get('/',async(req,res)=>{
  let ans = await getOrder();
  res.send(ans)
})


OrderRoute.delete('/cancel/:id',async(req,res)=>{
    let ans = await deleteOrder(req.params.id);
    res.send(ans)
})

OrderRoute.patch('/shipped/:id',async(req,res)=>{
    let ans = await shippingSuccess(req.params.id);
    res.send(ans)
})


OrderRoute.patch('/packed/:id',async(req,res)=>{
    let ans = await packingSuccess(req.params.id);
    res.send(ans)
})

OrderRoute.patch('/delivered/:id',async(req,res)=>{
    let ans = await deliverSuccess(req.params.id);
    res.send(ans)
})
OrderRoute.get('/:id',async(req,res)=>{
    let ans = await getSingleOrder(req.params.id);
    res.send(ans)
})

OrderRoute.post('/create',async(req,res)=>{
    const data = req.body
    let ans = await createOrder(data);
    res.send(ans)
})

OrderRoute.post('/user',async(req,res)=>{
    const {userId} = req.body
    let ans = await getOrderDataForUser(userId);
    res.send(ans)
})

module.exports = OrderRoute


