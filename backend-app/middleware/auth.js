const jwt = require('jsonwebtoken');
const secret_key = 'asdfghjklasdfghjklasdfghjklasdfghjklasdfghjkl';

function verifyToken(req, res, next) {
    if(req.headers["authorization"] === undefined){
        res.send({ok: false, error: 'token is missing'})
    }
    else {
        var token = req.headers["authorization"].slice(7)
        console.log(token + ' is the auth token server received');
        jwt.verify(token, secret_key, (error, data)=>{
            
            if(error) {
                res.send({ok: false, error: 'token is invalid'})
            } else {
                next();
            }
        
        })
    }
}



module.exports = verifyToken;


