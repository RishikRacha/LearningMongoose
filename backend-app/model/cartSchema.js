const mongoose = require('mongoose')

//                                                  //https://mongoosejs.com/docs/guide.html
    const CartItemSchema = new mongoose.Schema({    
        productid: {
            type: String,
            required: true
        }
    })

    const CartItem = mongoose.model('cartitem', CartItemSchema);          
    
    module.exports = CartItem;