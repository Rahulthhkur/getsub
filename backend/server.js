import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js';
import subscriberRouter from './routes/subscriberRoutes.js'

//App Config
const app = express()
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

               

//Middle Wares

app.use(express.json());
app.use(cors());


//Api end Points 
app.use('/api/user',userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order', orderRouter)
app.use('/api/subscribe', subscriberRouter);

app.get('/',(req,res)=>{
  res.send("API IS WORKING ");
})


app.listen(port,()=>{
  console.log(`Server Started on port ${port} `);
})