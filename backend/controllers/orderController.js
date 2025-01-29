import userModel from "../models/userModel.js";
import orderModel from "../models/orderModel.js"; // Assuming you have this model

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
const placeOrderRazorpay = async (req, res) => {};

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
};
