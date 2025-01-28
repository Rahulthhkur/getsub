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
const placeOrderStripe = async (req, res) => {
  
};

// Placing Order Using Razorpay
const placeOrderRazorpay = async (req, res) => {
  
};

// Fetch All Orders
const allOrders = async (req, res) => {
  
};

// Fetch User-Specific Orders
const userOrders = async (req, res) => {
  
};

// Update Order Status
const updateStatus = async (req, res) => {
  
};

export {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateStatus,
};