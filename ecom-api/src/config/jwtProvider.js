const jwt = require('jsonwebtoken');

const SECRET_KEY = "efebdrfbeb4bubwuerbbesrtgrghrthtfyjuytjuyujrdtydrtyhrdthut6"

const generateToken = (userId) => {
    const token = jwt.sign({userId},SECRET_KEY,{expiresIn:"48h"});
    return token;
}

const getUserIdFromToken = (token)=>{
    
}