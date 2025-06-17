const express = require('express')
const app = express();
const PORT = 7979;
const UserRoute = require("./router/users");                // route in users.js controller/router
const ProductsRoute = require("./router/products");
const CartRoute = require('./router/carts');
const createConnection = require('./config/connection');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use("/api/users", UserRoute)
app.use("/api/products", ProductsRoute)
app.use("/api/cart", CartRoute)

app.post('/test', (req,res)=>{
    console.log("Test route HITTT");
    res.send({message: "test success"})
})


app.listen(PORT, ()=>{
    console.log("server started on "+ PORT);
    createConnection();
})