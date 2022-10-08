const getAllJob=async(req,res)=>{
    res.send('get all jobs')

}

const getJob =async(req,res)=>{
    res.send('get jobs controller')
}

const createJob=async(req,res)=>{
    res.send('create job controller')
}

const updateJob =async(req,res)=>{
    res.send('update jobs controller')
}

const deleteJob=async(req,res)=>{
    res.send('get jobs controller')
}


module.exports={getJob,getAllJob,createJob,updateJob,deleteJob}