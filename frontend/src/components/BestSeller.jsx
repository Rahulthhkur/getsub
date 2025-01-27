import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
  }, [products]);

  return (
    <div className="my-10 bg-gradient-to-b from-white to-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section - keeping original title classnames */}
        <div className="text-center text-3xl py-8">
          <Title text1={'BEST'} text2={'SELLERS'} />
          <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 mt-6 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quas 
            magni recusandae ut laboriosam aut porro tenetur error minima! Tempore 
            inventore modi pariatur eos labore maxime consectetur minima sequi rem.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {bestSeller.map((item, index) => (
            <div
              key={index}
              className="group relative transform transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
              <div className="relative bg-white rounded-lg p-2 ring-1 ring-gray-200/50">
                <ProductItem
                  id={item._id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                />
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300">
                  Best Seller
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Loading State */}
        {bestSeller.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-600">Loading best sellers...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BestSeller;