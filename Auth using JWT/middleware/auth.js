const jwt = require('jsonwebtoken');
const CustomError=require('../errors/custom-error')

const authenticationMiddleware=async(req,res,next)=>{
    const authHeader=req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw new CustomError('No token provided',401)
    }
    const token=authHeader.split(' ')[1]
    try {
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        const {id,username}=decoded
        req.user={id,username}
        next()

    } catch (error) {
        throw new CustomError('Not authoruzed to access',401)
    }
}
module.exports=authenticationMiddleware