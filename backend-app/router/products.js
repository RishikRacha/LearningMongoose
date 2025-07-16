// All Products endpoints are written here in routes/controller folder for better management of endpoints
const express = require('express');
const route = express.Router();
const Product = require('../model/productSchema');
const verifyToken = require('../middleware/auth');
const jwt = require('jsonwebtoken');
const secret_key = 'asdfghjklasdfghjklasdfghjklasdfghjklasdfghjkl';



route.post("/insertProducts", (req, res)=>{ 
    Product.insertMany(req.body)
    .then((insertedData) => {
        res.send({
            ok: true, 
            result: `Inserted ${insertedData.length} Products`
        })
    })
    .catch((err)=>{res.send({ok: false, error: err})});
})
// http://localhost:7979/api/products/insertProducts

// route.get("/getProducts", verifyToken, (req, res)=>{             
route.get("/getProducts", (req, res)=>{
    Product.find()
    .then(data => {res.send({ok: true, length: data.length, result: data})})
    .catch(err => {res.send({ok: false, error: err})});

})
// http://localhost:7979/api/products/getProducts

route.get(("/getOneProduct"), verifyToken, (req, res)=>{
    const productId = req.query.id;

    Product.findOne({_id: productId})
    .then(data => {
        if(data){
            res.send({ok: true, result: data});
        } else {throw new Error("Could not find product")}
    })
    .catch(err=>{
        res.send({ok: false, error: err})
    })

})
// http://localhost:7979/api/products/getOneProduct


module.exports = route;

