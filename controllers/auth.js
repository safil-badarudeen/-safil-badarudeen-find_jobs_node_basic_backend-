const User=require('../models/user')
const {StatusCodes}=require('http-status-code')
const jwt = require('jsonwebtoken');
const {BadRequestError}=require('../errors')
const {UnauthenticatedError}=require('../errors')

const register=async(req,res)=>{
    //   const {name,email,password}=req.body
    //  const salt=await bcrypt.genSaltSync(10);
    //  const hashedPassword=bcrypt.hashSync(password, salt);

    //  const securedData= {name,email,password:hashedPassword}
    const user=await User.create({...req.body})
    const token=user.getToken(); 
    res.json({name:user.name,token})
}
const login=async(req,res)=>{
  
    const {email,password}=req.body;

    if(!email || !password){
        throw new BadRequestError('Please provide email and Password')
    }
    //compare passoword

    const user=await User.findOne({email})

    if (!user){
        throw new UnauthenticatedError('User with entered email not found')
    }   
     
    const passwordAuth=await user.comparePassword(password)
    if(!passwordAuth){
        throw new UnauthenticatedError('Password isnt  correct Try again')
    }

    const token=user.getToken();
    res.status(200).json({name: user.name,token})
}



module.exports={login,register}