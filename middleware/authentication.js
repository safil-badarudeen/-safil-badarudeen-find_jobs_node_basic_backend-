const jwt = require('jsonwebtoken');
const {UnauthenticatedError}=require('../errors');
const User=require('../models/user')

const authUserMiddleware=async(req,res,next)=>{
    const authHeader=req.headers.authorization
    
    if(!authHeader || !authHeader.startsWith ('Bearer')){
        throw new UnauthenticatedError("No user with token found, Invalid Authentication")
    }

    const token=authHeader.split(" ")[1]
   
    try {
        const verifiedToken=jwt.verify(token,process.env.JWT_KEY)
        //attaching this to user routes.using middle ware passing .get job aa routil okke ith availabale avum
        req.user={userId:verifiedToken.UserId,name:verifiedToken.name}
        next()
    } catch (error) {
        throw new UnauthenticatedError("user token cant be verified")
    }
}

module.exports=authUserMiddleware