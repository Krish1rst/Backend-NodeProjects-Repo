require('dotenv').config();
require('express-async-errors')
//async error
const express = require('express');
const app=express();
const connectDB=require('./db/connect')
const productRouter=require('./routes/products')

const notFoundMiddleware= require('./middleware/not-found')
const errorMiddleware= require('./middleware/error-handler')

//middleware
app.use(express.json())

//routes
app.get('/',(req,res)=>{
    res.send('<h1>Hello </h1><a href="/api/v1/products">products route</a> ')
})
 app.use('/api/v1/products',productRouter)
//products routes
app.use(notFoundMiddleware)
app.use(errorMiddleware)


const port=process.env.PORT || 3000
const start=async()=>{
    try{
        //conectDB
        await connectDB(process.env.MONGO_URI)
       app.listen(port, console.log(`Serever is runing on port ${port}...`)) 
    }catch(err){
        console.log(err,'something went wrong');
    }
}
start();