import React, { useContext, useState } from 'react';
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';

const PlaceOrder = () => {
    const [method, setMethod] = useState('razorpay');
    const { navigate } = useContext(ShopContext);

    return (
        <div className="flex flex-col sm:flex-row justify-between gap-8 pt-5 sm:pt-14 min-h-[-80vh] border-t transition-all duration-300 ease-in-out">
            <div className="flex flex-col gap-4 w-full sm:max-w-[480px] transform transition-all duration-300 hover:shadow-lg p-6 rounded-lg">
                <div className="text-xl sm:text-2xl my-3 transform transition-all duration-300 hover:scale-102">
                    <Title text1={"DELIVERY"} text2={"INFORMATION"} />
                </div>
                
                <div className="flex gap-3">
                    <input 
                        type="text" 
                        className="border border-gray-300 rounded py-2 px-4 w-full transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-400 outline-none" 
                        placeholder='First Name' 
                    />
                    <input 
                        type="text" 
                        className="border border-gray-300 rounded py-2 px-4 w-full transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-400 outline-none" 
                        placeholder='Last Name' 
                    />
                </div>

                <input 
                    type="email" 
                    className="border border-gray-300 rounded py-2 px-4 w-full transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-400 outline-none" 
                    placeholder='Email' 
                />
                
                <input 
                    type="city" 
                    className="border border-gray-300 rounded py-2 px-4 w-full transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-400 outline-none" 
                    placeholder='Street' 
                />

                <div className='flex gap-3'>
                    <input 
                        type="text" 
                        className="border border-gray-300 rounded py-2 px-4 w-full transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-400 outline-none" 
                        placeholder='City' 
                    />
                    <input 
                        type="text" 
                        className="border border-gray-300 rounded py-2 px-4 w-full transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-400 outline-none" 
                        placeholder='State' 
                    />
                </div>

                <div className='flex gap-3'>
                    <input 
                        type="number" 
                        className="border border-gray-300 rounded py-2 px-4 w-full transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-400 outline-none" 
                        placeholder='Zip Code' 
                    />
                    <input 
                        type="text" 
                        className="border border-gray-300 rounded py-2 px-4 w-full transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-400 outline-none" 
                        placeholder='Country' 
                    />
                </div>

                <input 
                    type="number" 
                    className="border border-gray-300 rounded py-2 px-4 w-full transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-400 outline-none" 
                    placeholder='Phone Number' 
                />
            </div>

            <div className=""> {/* Removed animations from cart total container */}
                <div className="mt-8 min-w-80">
                    <CartTotal />
                </div>

                <div className="mt-12">
                    <Title text1={"PAYMENT"} text2={"METHOD"} />
                    <div className="flex gap-4 flex-col lg:flex-row mt-4">
                        <div 
                            onClick={() => setMethod('stripe')} 
                            className={`flex items-center gap-3 border p-3 px-4 cursor-pointer rounded-lg transition-all duration-200 transform hover:scale-102 hover:shadow-md ${method === 'stripe' ? 'border-blue-500 bg-blue-50' : 'hover:border-blue-300'}`}
                        >
                            <div className={`w-4 h-4 border-2 rounded-full transition-all duration-200 ${method === 'stripe' ? 'border-blue-500 bg-blue-500' : 'border-gray-300'}`}></div>
                            <img src={assets.stripe_logo} className='h-6 mx-4 transition-transform duration-200 hover:scale-105' alt="payment_gateway" />
                        </div>

                        <div 
                            onClick={() => setMethod('razorpay')} 
                            className={`flex items-center gap-3 border p-3 px-4 cursor-pointer rounded-lg transition-all duration-200 transform hover:scale-102 hover:shadow-md ${method === 'razorpay' ? 'border-blue-500 bg-blue-50' : 'hover:border-blue-300'}`}
                        >
                            <div className={`w-4 h-4 border-2 rounded-full transition-all duration-200 ${method === 'razorpay' ? 'border-blue-500 bg-blue-500' : 'border-gray-300'}`}></div>
                            <img src={assets.razorpay_logo} className='h-6 mx-4 transition-transform duration-200 hover:scale-105' alt="razorpay" />
                        </div>

                        <div 
                            onClick={() => setMethod('cod')} 
                            className={`flex items-center gap-3 border p-3 px-4 cursor-pointer rounded-lg transition-all duration-200 transform hover:scale-102 hover:shadow-md ${method === 'cod' ? 'border-blue-500 bg-blue-50' : 'hover:border-blue-300'}`}
                        >
                            <div className={`w-4 h-4 border-2 rounded-full transition-all duration-200 ${method === 'cod' ? 'border-blue-500 bg-blue-500' : 'border-gray-300'}`}></div>
                            <p className='text-gray-600 font-medium mx-4'>CASH ON DELIVERY</p>
                        </div>
                    </div>

                    <div className='w-full text-end mt-8'>
                        <button
                            onClick={() => navigate('/order')}
                            className='bg-blue-600 hover:bg-blue-700 text-white px-16 py-3 text-sm sm:mt-4 rounded-lg transition-all duration-200 transform hover:scale-102 hover:shadow-lg active:scale-98'
                        >
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;