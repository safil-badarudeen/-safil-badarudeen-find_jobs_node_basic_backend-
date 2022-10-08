const getAllJobs=async(req,res)=>{
    res.send('get all jobs')

}

const getJobs =async(req,res)=>{
    res.send('get jobs controller')
}

const updateJobs =async(req,res)=>{
    res.send('update jobs controller')
}

const deleteJobs =async(req,res)=>{
    res.send('get jobs controller')
}


module.exports={getJobs,getAllJobs,updateJobs,deleteJobs}