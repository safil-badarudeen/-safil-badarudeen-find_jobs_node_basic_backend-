const Job=require('../models/job')
const {StatusCodes}=require('http-status-codes')
const {BadRequestError,NotFoundError}=require('../errors')
const { findByIdAndUpdate } = require('../models/job')

const getAllJob=async(req,res)=>{
    const jobs=await Job.find({createdBy:req.user.userId})
   res.status(StatusCodes.CREATED).json({jobs,count:jobs.length})

}

const getJob =async(req,res)=>{
    const {userId}=req.user
    const {id:jobId}=req.params //we can also use nested destructuring in one line also.destructure req
    const job=await Job.findOne({_id:jobId,createdBy:userId})
    if(!job){
        throw new NotFoundError('No jobs has been found')
    }
    res.status(StatusCodes.CREATED).json({job})
}

const createJob=async(req,res)=>{
    // console.log(req.user.userid)
    req.body.createdBy=req.user.userId
    const job= await Job.create(req.body)
    res.status(StatusCodes.CREATED).json({job})
}

const updateJob =async(req,res)=>{
    // destucturing req object
    const {user:{userId},
    params:{id:jobId},
    body:{company,position}}=req
    // console.log(jobId)
    // console.log(userId)

    if(company===' '|| position===' '){
        throw new BadRequestError("please enter company name and position")

    }
    const job=await Job.findByIdAndUpdate({_id: jobId,createdBy:userId},//it also works fine with jobid only
        req.body,
        {new:true, runValidators:true})
        if(!job){
            throw new NotFoundError(`Job doesnt exist ${jobId}`)
        }
        res.status(StatusCodes.OK).json({job})

    
}

const deleteJob=async(req,res)=>{
    const {id:jobId}=req.params
   const job=await Job.findByIdAndRemove({_id:jobId})
   if(!job){
     throw new NotFoundError(`NO job Exist on  ${jobId} this job id`)
   }



    res.status(StatusCodes.OK).send({})
}


module.exports={getJob,getAllJob,createJob,updateJob,deleteJob}