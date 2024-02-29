const User=require('../models/User')
const {StatusCodes} =require('http-status-codes')
const {BadRequestError}=require('../errors')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')

const register=async(req,res)=>{

    const user=await User.create({...req.body})
    //once we create user, we have all methods created in schema i.e. 'User'..so 
    const token=user.createJWT()
    
    res.status(StatusCodes.CREATED).json({user:{name:user.getName()},token})
}
const login=async(req,res)=>{
    res.send('login user')
}

module.exports={register,login}