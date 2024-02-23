require('dotenv').config()

const connectDB=require('./db/connect');
const Product=require('./models/product');
const jsonProducts=require('./products.json');
const start=async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
         await Product.deleteMany();
        await Product.create(jsonProducts)
        console.log('success !!!')
        process.exit(0)
    }catch(err){
        console.log(err,'error from json data')
        process.exit(1)
    }
}
start()
