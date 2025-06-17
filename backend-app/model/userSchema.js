const mongoose = require('mongoose')

//                                                  //https://mongoosejs.com/docs/guide.html
    const UserSchema = new mongoose.Schema({    
        username: String,
        email:{
                type: String,
                required: true,
                unique: true,            // this is added to db on the mongodb level and will remain unique even if i dont mention unique: true now. It is added to list of indexes. check using db.<collectionName>.getIndexes(). Use db.users.dropIndex("email_1") to drop it as index
              },
        age: Number,
        isActive: Boolean,
        password: String
    })

    const User = mongoose.model('user', UserSchema);          
    //first arg is the singular name of the collection your model is for. Mongoose automatically looks for plural, lowercase version of the model name. so this is for the 'users' collection in the db.

    module.exports = User;