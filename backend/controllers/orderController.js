import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

//Placing order using COD
const placeOrder = async (req,res)=>{
    try {
        const {userId, item, amount , address} = req.body;
        const orderData = {
            userId,
            item,
            amount,
            address,
            paymentMethod:"COD",
            payment:false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId, {cartData:{}})

        res.json({success:true, message:'Order Placed'})

    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
        
    }
}

//Placing order using Stripe
const placeOrderStripe = async (req,res)=>{
    
}

//Placing order using Razorpay
const placeOrderRazorpay = async (req,res)=>{
    
}

//All order data for admin panel
const allOrders = async (req,res)=>{
    
}

//User order data for frontend
const userOrders = async (req,res)=>{
    
}

//Update Order status from admin panel
const updateStatus = async (req,res)=>{
    
}

export {placeOrder,placeOrderRazorpay,placeOrderStripe,allOrders,userOrders,updateStatus}