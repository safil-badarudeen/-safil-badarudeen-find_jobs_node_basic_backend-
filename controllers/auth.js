const login=async(req,res)=>{
    res.send('this is login auth')

}

const register=async(req,res)=>{
    res.send('this is register auth')
}

module.exports={login,register}