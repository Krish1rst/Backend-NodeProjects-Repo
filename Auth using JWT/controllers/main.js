
const jwt = require('jsonwebtoken');
const {BadRequestError}=require('../errors')
const login=async(req,res)=>{

    const {username,password}=req.body;

    if(!username||!password){
        throw new BadRequestError('please provide name and password')
    }
    const id=new Date().getDate()

    //keep payload small for better experience
    //keep complex ,long secret string in production

    const token=jwt.sign({id,username},process.env.JWT_SECRET,{
        expiresIn:'30d',
    })
    res.status(200).json({msg:'new user created',token})
}

const dashboard=async(req,res)=>{

        const luckyNumber=Math.floor(Math.random()*100)
        res.status(200).json({
            msg:`Hello, ${req.user.username}`,
            secret:`Your lucky number ${luckyNumber}`
        })   
}  

module.exports ={login,dashboard}