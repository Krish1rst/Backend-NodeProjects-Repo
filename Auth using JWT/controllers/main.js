
const jwt = require('jsonwebtoken');
const CustomError=require('../errors/custom-error')
const login=async(req,res)=>{

    const {username,password}=req.body;

    if(!username||!password){
        throw new CustomError('please provide name and password',400)
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
   console.log(req.user)
        const luckyNumber=Math.floor(Math.random()*100)

        res.status(200).json({
            msg:`Hello, ${req.user.username}`,
            secret:`Your lucky number ${luckyNumber}`
        })   
}  

module.exports ={login,dashboard}