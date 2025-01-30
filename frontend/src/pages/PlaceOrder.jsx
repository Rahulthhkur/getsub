import React, { useState, useContext } from 'react';
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from '../assets/assets.js';
import { ShopContext } from '../context/ShopContext';
import toast from 'react-hot-toast';
import axios from "axios";

const PlaceOrder = () => {
  const { navigate, backendUrl, token, cartItems, setcartItems, getCartAmount, deliveryFee, products } = useContext(ShopContext);
  const [method, setMethod] = useState('cod');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: '',
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const initPay = (order)=>{
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name:'Order Payment',
      description:'Order Payment',
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response)=>{
        console.log(response);
        try {
          const {data} = await axios.post(backendUrl+ '/api/order/verifyRazorpay',response, {headers:{token}})
          if (data.success) {
            navigate('/order')
            setcartItems({})
            toast.success("Order Placed")
          }
        } catch (error) {
          console.log(error);
          toast.error(error)
        }
      }
    }
    const rzp = new window.Razorpay(options)
    rzp.open()
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      let orderItems = [];
      Object.keys(cartItems).forEach((itemId) => {
        Object.keys(cartItems[itemId]).forEach((size) => {
          if (cartItems[itemId][size] > 0) {
            const itemInfo = structuredClone(products.find(product => product._id === itemId));
            if (itemInfo) {
              itemInfo.size = size;
              itemInfo.quantity = cartItems[itemId][size];
              orderItems.push(itemInfo);
            }
          }
        });
      });

      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + deliveryFee,
      };

      switch (method) {
        case 'cod':
          const responseCOD = await axios.post(
            `${backendUrl}/api/order/place`,
            orderData,
            { headers: { token } }
          );

          if (responseCOD.data.success) {
            setcartItems({});
            navigate('/order');
            toast.success(responseCOD.data.message);
          } else {
            toast.error(responseCOD.data.message);
          }
          break;

        case 'razorpay':
          const responseRazorpay = await axios.post(
            `${backendUrl}/api/order/razorpay`,
            orderData,
            { headers: { token } }
          );

          if (responseRazorpay.data.success) {
            initPay(responseRazorpay.data.order);
          }
          break;

        default:
          console.warn('Invalid payment method:', method);
          break;
      }
    } catch (error) {
      console.error('Error processing the order:', error.message);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        <div className="flex gap-3">
          <input onChange={onChangeHandler} name="firstName" value={formData.firstName} type="text" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" placeholder="First Name" required />
          <input onChange={onChangeHandler} name="lastName" value={formData.lastName} type="text" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" placeholder="Last Name" required />
        </div>
        <input onChange={onChangeHandler} name="email" value={formData.email} type="email" className="border-gray-300 border rounded py-1.5 px-3.5 w-full" placeholder="Email" required />
        <input onChange={onChangeHandler} name="street" value={formData.street} type="text" className="border-gray-300 border rounded py-1.5 px-3.5 w-full" placeholder="Street" required />
        <div className="flex gap-3">
          <input onChange={onChangeHandler} name="city" value={formData.city} type="text" className="border-gray-300 border rounded py-1.5 px-3.5 w-full" placeholder="City" required />
          <input onChange={onChangeHandler} name="state" value={formData.state} type="text" className="border-gray-300 border rounded py-1.5 px-3.5 w-full" placeholder="State" required />
        </div>
        <div className="flex gap-3">
          <input onChange={onChangeHandler} name="zipcode" value={formData.zipcode} type="number" className="border-gray-300 border rounded py-1.5 px-3.5 w-full" placeholder="Zip Code" required />
          <input onChange={onChangeHandler} name="country" value={formData.country} type="text" className="border-gray-300 border rounded py-1.5 px-3.5 w-full" placeholder="Country" required />
        </div>
        <input onChange={onChangeHandler} name="phone" value={formData.phone} type="number" className="border-gray-300 border rounded py-1.5 px-3.5 w-full" placeholder="Phone Number" required />
      </div>
      <div>
        <CartTotal />
        <Title text1={"PAYMENT"} text2={"METHOD"} />
        <div className="flex gap-3 flex-col lg:flex-row">
          {['stripe', 'razorpay', 'cod'].map((payMethod) => (
            <div key={payMethod} onClick={() => setMethod(payMethod)} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === payMethod ? 'bg-green-400' : ''}`}></p>
              {payMethod !== 'cod' ? <img src={assets[`${payMethod}_logo`]} className="h-5 mx-4" alt={payMethod} /> : <p className="text-gray-500 text-sm font-medium mx-4">CASH ON DELIVERY</p>}
            </div>
          ))}
        </div>
        <div className="w-full text-end mt-8">
          <button type='submit' className="bg-black text-white px-16 py-3 text-sm">PLACE ORDER</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
