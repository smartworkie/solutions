const jwt = require('jsonwebtoken');

 const generateToken = (username,email,password) =>{
    return jwt.sign({username, email, password}, process.env.JWT_SECRET, {
        expiresIn: '10m',
    });
};


const token = ( email) =>{
    return jwt.sign({ email}, process.env.JWT_SECRET, {
    expiresIn:'10m',});
    };
module.exports = {token, generateToken};