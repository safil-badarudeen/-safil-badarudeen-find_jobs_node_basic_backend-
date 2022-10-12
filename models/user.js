const { required } = require('joi')
const mongoose =require('mongoose')
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'please provide name'],
        minLength:3,
        maxLength:15
    },
    email:{
        type:String,
        required: [true,'please provide email'],
        trim:true,
        unique:true,
        match:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    },
    password:{
        type:String,
        required:[true,'please provide password'],
        minLength:3,    
    }
    
})

UserSchema.pre('save',async function(next){
    const salt= await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password, salt)
    next();
})

module.exports=mongoose.model('User',UserSchema)