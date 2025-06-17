// All Carts endpoints are written here in routes/controller folder for better management of endpoints
const express = require('express');
const route = express.Router();
const CartItem = require('../model/cartSchema');

route.post("/addToCart", (req, res)=>{
    CartItem.insertOne(req.body)
    .then((resp)=>{
        res.send({ok: true, result:resp});
    })
    .catch((err)=>{ 
        res.send({ok: false, error: err});
    })
// http://localhost:7979/api/cart/addToCart
})






module.exports = route;