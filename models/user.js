const { required } = require('joi')
const mongoose =require('mongoose')

const UserSchema = new Schema({
    name:{
        type:String,
        required:[true,'please provide name'],
        minLength:3,
        maxLength:2
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
        maxLength:15
        
    }
    
})

module.exports=mongoose.model('User',UserSchema)