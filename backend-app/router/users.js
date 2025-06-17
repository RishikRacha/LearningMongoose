// All Users endpoints are written here in routes/controller folder for better management of endpoints
const express = require('express');
const route = express.Router();
// const mongoose = require('mongoose');
const User = require('../model/userSchema')     //model


// insert new user object from req using POST
route.post('/signup', (req, res)=>{
    const newUser = req.body;
    // mongoose                                                 CONNECTION TO DB MOVED TO CONNECTION.JS IN CONFIG FOLDER
    //   .connect("mongodb://127.0.0.1:27017/usersDB")
    //   .then(()=>{
    //     console.log("Connected to Database 'usersDB'");
    //   })
    //   .catch(()=>{
    //     console.log("Could not connect to Database");
    //   })

    const user = new User(newUser);
    //inserts the data in mongoDB
    user.save()
      .then((userdata)=>{
        res.send({ok: true, result: 'User Created', data:userdata})
      })
      .catch((err)=>{
        res.send({ok:false, error: err, result: 'User not created'});
      })

})
// http://localhost:7979/api/users/signup


route.get('/get-all-users', (req, res)=>{
    // mongoose
    //   .connect("mongodb://127.0.0.1:27017/usersDB")
    //   .then(()=>console.log("Connected to Database 'usersDB'"))
    //   .catch(()=>console.log("Could not connect to Database"));

    User.find()
      .then(data => {res.send({ok: true,length: data.length , result: data})})
      .catch(err => {res.send({ok: false, error: err})});
})
// http://localhost:7979/api/users/get-all-users


route.post('/signin', (req, res)=>{
    const userCredentials = req.body;
    
    User.findOne(userCredentials)
    .then((data)=>{
        if (data) {
            console.log(data);
            res.send({ ok: true, result: "Valid User", data: data });
        }
        else {
            throw new Error("Invalid User, does not exist in database");
        }
    })
    .catch((err)=>{
        res.send({ok: false, error: err.message });
    })

})


module.exports = route;