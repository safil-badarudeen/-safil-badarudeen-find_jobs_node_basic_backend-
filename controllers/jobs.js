const Job=require('../models/job')
const {StatusCodes}=require('http-status-codes')
const {BadRequestError}=require('../errors')

const getAllJob=async(req,res)=>{
    res.send('get all jobs')

}

const getJob =async(req,res)=>{
    res.send('get jobs controller')
}

const createJob=async(req,res)=>{
    console.log(req.user.userid)
    req.body.createdBy=req.user.userid
    const job= await Job.create(req.body)
    res.status(StatusCodes.CREATED).json({job})
}

const updateJob =async(req,res)=>{
    res.send('update jobs controller')
}

const deleteJob=async(req,res)=>{
    res.send('get jobs controller')
}


module.exports={getJob,getAllJob,createJob,updateJob,deleteJob}