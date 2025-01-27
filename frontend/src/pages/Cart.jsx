import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate} = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {

    if(products.length > 0){
      const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item]
          });
        }
      }
    }
    setCartData(tempData);
    }

    
  }, [cartItems,products]);

  return (
    <div className="border-t pt-8 sm:pt-14 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
      <div className="text-xl sm:text-2xl mb-6 sm:mb-8">
        <Title text1={'YOUR'} text2={'CART'} />
      </div>

      <div className="divide-y divide-gray-200">
        {cartData.length === 0 ? (
          <div className="text-center py-12 sm:py-16">
            <p className="text-gray-500 text-base sm:text-lg">Your cart is empty</p>
          </div>
        ) : (
          cartData.map((item, index) => {
            const productData = products.find((products) => products._id === item._id);
            return (
              <div
                key={index}
                className="py-4 sm:py-6 text-gray-700 grid grid-cols-[3fr_1fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-2 sm:gap-4 group hover:bg-gray-50 transition-colors duration-200 rounded-lg px-2 sm:px-4"
              >
                <div className="flex items-start gap-3 sm:gap-6">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={productData.image[0]}
                      className="w-14 sm:w-24 aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
                      alt={productData.name}
                    />
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <p className="text-sm sm:text-lg font-medium text-gray-900 line-clamp-2 sm:line-clamp-1 transition-colors duration-200 group-hover:text-blue-600">
                      {productData.name}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-5">
                      <p className="font-semibold text-gray-900 text-sm sm:text-base">
                        {currency}
                        {productData.price}
                      </p>
                      <span className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm bg-gray-100 rounded-md font-medium text-gray-700 inline-block w-fit">
                        {item.size}
                      </span>
                    </div>
                  </div>
                </div>

                <input
                  onChange={(e) =>
                    e.target.value === '' || e.target.value === 0
                      ? null
                      : updateQuantity(item._id, item.size, Number(e.target.value))
                  }
                  className="border border-gray-300 rounded-md w-12 sm:w-20 px-1 sm:px-2 py-1 sm:py-1.5 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow duration-200"
                  type="number"
                  min={1}
                  defaultValue={item.quantity}
                />

                <button
                  onClick={() => updateQuantity(item._id, item.size, 0)}
                  className="group/delete flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full hover:bg-red-100 transition-colors duration-200"
                  aria-label="Remove item"
                >
                  <img
                    className="w-3.5 sm:w-4 opacity-60 group-hover/delete:opacity-100 transition-opacity duration-200"
                    src={assets.bin_icon}
                    alt="Remove"
                  />
                </button>
              </div>
            );
          })
        )}
      </div>

      <div className="flex justify-end my-12 sm:my-20">
        <div className="w-full sm:w-[450px] bg-gray-50 rounded-lg p-4 sm:p-6 shadow-sm">
          <CartTotal />
          <div>
          <button 
          onClick={()=>navigate('/place-order')} 
          className="w-full mt-3 sm:mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3.5 sm:py-3 px-4 rounded-lg transition-colors duration-200 text-[14px] sm:text-base"
        >
          Proceed to Checkout
        </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;