import userModel from "../models/userModel.js";
import orderModel from "../models/orderModel.js"; 
import razorpay from 'razorpay'


const currency = 'inr'
const deliveryCharge = 49


const razorpayInstance = new razorpay({
  key_id: process.env.RAZORPAY_KEY_ID ,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
})

// Placing Order Using COD Method
const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };
    console.log(orderData);

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    await userModel.findByIdAndUpdate(userId, { cartData: {} });
    res.json({ success: true, message: "Order Placed" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Placing Order Using Stripe
const placeOrderStripe = async (req, res) => {};

// Placing Order Using Razorpay
const placeOrderRazorpay = async (req, res) => {
  try {
    const { userId, items, amount, address} = req.body;

    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: "Razorpay",
      payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    const options = {
      amount: amount * 100, // Convert to paise
      currency: currency.toUpperCase(),
      receipt: newOrder._id.toString(), // Fixed spelling
    };

    const order = await razorpayInstance.orders.create(options);
    
    res.json({ success: true, order });
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const verifyRazorpay = async(req,res)=>{
  try {
    const {userId, razorpay_order_id}= req.body

    const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id)
    if (orderInfo.status=== 'paid') {
      await orderModel.findByIdAndUpdate(orderInfo.receipt, {payment:true});
      await userModel.findByIdAndUpdate(userId, {cartData:{}})
      res.json({success:true, message:'payment successfull'})
    }
    else{
      res.json({success:false, message:'payment failed'})
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
}


// Fetch All Orders
const allOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({})
        res.json({success:true,orders})
    } catch (error) {
        console.error(error);
    res.status(500).json({ success: false, message: error.message });
    }
};

// Fetch User-Specific Orders
const userOrders = async (req, res) => {
  try {
    const { userId } = req.body;

    const orders = await orderModel.find({ userId });
    res.json({ success: true, orders });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

// Update Order Status
const updateStatus = async (req, res) => {
    try {
        const {orderId, status}= req.body
        await orderModel.findByIdAndUpdate(orderId,{status})
        res.json({success:true, message:'Status Upadated'})
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: error.message });
    }
};

export {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateStatus,
  verifyRazorpay
};
