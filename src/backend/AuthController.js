require('dotenv').config();
const asyncHandler = require('express-async-handler');
const API_KEY = process.env.API_KEY
const User = require('./user');
const jwt = require('jsonwebtoken');
const mailgun = require('mailgun-js');
const DOMAIN = process.env.DOMAIN;
const mg = mailgun({apiKey: API_KEY, domain:DOMAIN});
const _ = require('lodash');
const {generateToken, token} = require('./generateToken');

const registerUser = asyncHandler(async(req,res) => {
    const {username, email, password} = req.body;
   const userExists = await User.findOne({email});
    if (userExists) {
        res.status(400);
        throw new Error("User Already Exists");
    }
    const data = {
        from: 'noreply@smartSolutions.com',
        to: email,
        subject: 'Account Activation Link',
        html:`
            <br/> <h2>  Thank you for choosing smartSolutions!    </h2>
            <br/> <p> Please confirm your 
            email address by clicking the link below. </p>
           <p>We'll communicate important updates with you from time to time via email, so
             it's essential that we have an up-to-date email address on file. </p> 
            <button><a style = {{text-decoration: 'none'; color: 'inherit';}} href = '${process.env.CLIENT_URL}/activate/${generateToken(username, email, password)}'> Activate Your Account</a></button>
             `
        
    };
    mg.messages().send(data, function (error, body) {
       console.log(body);
    }); 

    const user = await User.create({
        username,
        email,
        password,
            })

            if (user) {
                res.status(201).json({
                    _id:user._id,
                    username:user.username,
                    email:user.email,
                    token:generateToken(_id),
                });

            }
            else {
                res.status(400);
                throw new Error("Error Occured");
            }
    
});
const authenticateEmail = asyncHandler(async(req,res) => {
   
    const {token} = req.body;
    if (token) {
       jwt.verify(token, process.env.JWT_SECRET, function(error, decodedToken) {
           if (error) {
                res.status(400)
               throw new Error("Incorrect or Expired Link")
               
           }
  if (decodedToken){
        return  res.status(200).json({message:"Signup Success"});
  }})}});

const authUser = asyncHandler(async(req,res) => {
    const { username, password} = req.body;

    const user = await User.findOne({username});

    if (user && (await user.matchPassword(password))){
        res.json({
                      _id:user._id,
                   
                    email:user.email,
                   username:user.username,
        })
    } 
  
    else {
        res.status(400);
        throw new Error("Username or Password Incorrect")
    }
});
const googleLogin2 = asyncHandler(async(req,res) => {
    const {username,email} = req.body;
    password = 'ggggg';
    const user = await User.create({
        username,
        email,
        password,
            })
            if (user) {
                res.status(201).json({
                   
                    username:user.username,
                    email:user.email,
                   
                });

            }
            else {
                res.status(400);
                throw new Error("Error Occured");
            }
})


const forgotPassword = asyncHandler(async(req,res)=> {
    const {email} = req.body;
    User.findOne({email}, (error, user) => {
        if (error||!user) {
             res.status(400);
             throw new Error("User with this email does not exists.");
        }
        const data = {
            from: 'noreply@smartSolutions.com',
            to: email,
            subject: 'Reset  Link',
            html:`
                <br/> <h2>  Thank you for choosing smartSolutions!    </h2>
                <br/> <p> Please click on the given link to reset your password </p> 
                <button><a style = {{text-decoration:'none', color: 'inherit'}} href = '${process.env.CLIENT_URL}/reset/${token(email)}'> Activate Your Account</a></button>
                 `
        }
      
      return user.updateOne({resetLink: token(email)}, function(err, success) {
          if(err) {
              return res.status(400).json({error: "reset password link error"});
          }
          else {
            mg.messages().send(data, function (error, body) {
               if (error) {
                res.json.status(401)
                throw new Error ("Error Occured!")
               }
                  console.log(body)
                  return res.json({message: 'Email has been sent, kindly follow the instruction'})
              });
              
          }
      })
        }) } )
const resetEmail = asyncHandler(async(req, res) => {
    const {resetLink, newPass} = req.body;
    if (resetLink) {
        jwt.verify(resetLink, process.env.JWT_SECRET, function(error, decodedData) {
            if (error) {
                res.status(401);
                throw new Error("Incorrect token or it is expired!");
            }
            User.findOne({resetLink}, (error, user)=>{
                if(error||!user) {
                    res.status(400);
                    throw new Error("User with this Token Does Not Exist!");
                }
                const obj = {
                    password:newPass
                }
                user = _.extend(user, obj);
                user.save((error, result)=> {
                    if(error) {
                        res.status(400);
                        throw new Error("reset password error");
                    }
                    else{
                        return res.status(200).json({message:"Your Password Has Been Changed!"});
                    }
                })
            })
        })
    }else{
        if (error || !user) {
            res.status(400);
            throw new Error("Authentication error!!!")
        }
    }
    
  });

module.exports = {registerUser, authUser, googleLogin2, forgotPassword, authenticateEmail, resetEmail};