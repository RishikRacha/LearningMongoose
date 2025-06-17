const mongoose = require('mongoose')

//                                                  //https://mongoosejs.com/docs/guide.html
    const ProductSchema = new mongoose.Schema({    
        title: String,
        description:String,
        category: String,
        image: String,
        price: Number,
        rating: Number,
    })

    const Product = mongoose.model('product', ProductSchema);          
    //first arg is the singular name of the collection your model is for. 
    // Mongoose automatically looks for plural, lowercase version of the model name. so this is for the 'products' collection in the db.

    module.exports = Product;