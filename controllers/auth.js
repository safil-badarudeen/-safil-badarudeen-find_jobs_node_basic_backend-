const User=require('../models/user')
const {statusCode}=require('http-status-code')
const bcrypt = require('bcryptjs');

const login=async(req,res)=>{
     const {name,email,password}=req.body
     const salt=await bcrypt.genSaltSync(10);
     const hashedPassword=bcrypt.hashSync(password, salt);

     const securedData= {name,email,password:hashedPassword}
    const user=await User.create({...securedData})
    res.json({user})

}

const register=async(req,res)=>{
    res.send('this is register auth')
}

module.exports={login,register}