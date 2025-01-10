import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const CartTotal = () => {
  const { currency, deliveryFee, getCartAmount, navigate } = useContext(ShopContext);

  return (
    <div className="w-full bg-white rounded-xl shadow-sm p-4 sm:p-6">
      <div className="text-xl sm:text-2xl mb-4 sm:mb-6">
        <Title text1={'CART'} text2={'TOTALS'} />
      </div>

      <div className="flex flex-col gap-3 sm:gap-4 mt-3 sm:mt-4">
        <div className="flex items-center justify-between py-2">
          <p className="text-[13px] sm:text-sm font-medium text-gray-600">Subtotal</p>
          <p className="text-base sm:text-sm font-semibold text-gray-900">
            {currency} {getCartAmount()}.00
          </p>
        </div>

        <hr className="border-gray-200" />

        <div className="flex justify-between py-2">
          <div className="flex flex-col">
            <p className="text-[13px] sm:text-sm font-medium text-gray-600">Shipping fee</p>
            <p className="text-[11px] sm:text-xs text-gray-500 mt-1">Standard delivery</p>
          </div>
          <p className="text-base sm:text-sm font-semibold text-gray-900 ml-4">
            {currency} {deliveryFee}.00
          </p>
        </div>

        <hr className="border-gray-200" />

        <div className="flex justify-between py-3">
          <p className="text-[15px] sm:text-base font-bold text-gray-900">Total</p>
          <div className="text-right">
            <p className="text-lg sm:text-lg font-bold text-gray-900">
              {currency} {getCartAmount() === 0 ? 0 : getCartAmount() + deliveryFee}.00
            </p>
            <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5">Including VAT</p>
          </div>
        </div>
        <div className="mt-3 sm:mt-4 text-center">
       <p className="text-[11px] sm:text-xs text-gray-500">Secure payment powered by Stripe</p>
          <p className="text-[11px] sm:text-xs text-gray-500 mt-1">30-day money-back guarantee</p>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;