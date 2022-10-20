const mongoose = require('mongoose')

const jobSchema=new mongoose.Schema({
    job:{
        type:String,
        require:[true,'please provide job title'],
        maxlength:50,
    },
    position:{
        type:String,
        require:[true,'please provide job position'],
        maxlength:100
    },
    status:{
        type:String,
        enum:['interview','declined','pending'],
        default: 'pending'
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:[true,'please provide user id']

    }
},{timestamps:true});

module.exports=mongoose.model('job',jobSchema)