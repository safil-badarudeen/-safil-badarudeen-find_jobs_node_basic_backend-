const User=require('../models/user')
const {StatusCodes}=require('http-status-code')
const jwt = require('jsonwebtoken');


const register=async(req,res)=>{
      const {name,email,password}=req.body
    //  const salt=await bcrypt.genSaltSync(10);
    //  const hashedPassword=bcrypt.hashSync(password, salt);

    //  const securedData= {name,email,password:hashedPassword}
    const user=await User.create({...req.body})
    const token=user.getToken();
    res.json({name:user.name,token})
}
const login=async(req,res)=>{
  
    res.send('this is login auth')
}



module.exports={login,register}