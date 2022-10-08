const User=require('../models/user')
const {statusCode}=require('http-status-code')

const login=async(req,res)=>{
    // const {name,email,password}=req.body
    const user=await User.create({...req.body})
    res.json({user})

}

const register=async(req,res)=>{
    res.send('this is register auth')
}

module.exports={login,register}