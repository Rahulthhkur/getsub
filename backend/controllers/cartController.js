import userModel from "../models/userModel.js";

// Add products to user cart
const addToCart = async (req, res) => {
  try {
    const { userId, itemId, size } = req.body;

    // Validate request
    if (!userId || !itemId || !size) {
      return res.json({ success: false, message: "Invalid input data" });
    }

    // Fetch user data
    const userData = await userModel.findById(userId);
    if (!userData) {
      return res.json({ success: false, message: "User not found" });
    }

    // Update cart data
    const cartData = userData.cartData || {};

    if (cartData[itemId]) {
      cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;
    } else {
      cartData[itemId] = { [size]: 1 };
    }

    // Update the user document
    await userModel.findByIdAndUpdate(userId, { cartData }, { new: true });

    res.json({ success: true, message: "Added to cart" });
  } catch (error) {
    console.error("Error adding to cart:", error);
    res.json({ success: false, message: error.message });
  }
};

// Update user cart
const updateCart = async (req, res) => {
  try {
    const { userId, itemId, size, quantity } = req.body;

    // Validate request
    if (!userId || !itemId || !size || quantity === undefined) {
      return res.json({ success: false, message: "Invalid input data" });
    }

    // Fetch user data
    const userData = await userModel.findById(userId);
    if (!userData) {
      return res.json({ success: false, message: "User not found" });
    }

    // Update cart data
    const cartData = userData.cartData || {};
    if (cartData[itemId]) {
      cartData[itemId][size] = quantity;
    } else {
      return res.json({ success: false, message: "Item not found in cart" });
    }

    // Update the user document
    await userModel.findByIdAndUpdate(userId, { cartData }, { new: true });

    res.json({ success: true, message: "Cart updated" });
  } catch (error) {
    console.error("Error updating cart:", error);
    res.json({ success: false, message: error.message });
  }
};

// Get user cart data
const getUserCart = async (req, res) => {
  try {
    const { userId } = req.body;

    // Validate request
    if (!userId) {
      return res.json({ success: false, message: "User ID is required" });
    }

    // Fetch user data
    const userData = await userModel.findById(userId);
    if (!userData) {
      return res.json({ success: false, message: "User not found" });
    }

    const cartData = userData.cartData || {};
    res.json({ success: true, cartData });
  } catch (error) {
    console.error("Error fetching cart data:", error);
    res.json({ success: false, message: error.message });
  }
};

export { addToCart, updateCart, getUserCart };
