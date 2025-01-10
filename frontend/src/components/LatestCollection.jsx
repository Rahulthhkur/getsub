import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, []);

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16 text-3xl">
          <Title text1={'LATEST'} text2={'COLLECTIONS'} />
          <p className="mt-6 max-w-2xl mx-auto text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis esse, 
            recusandae dicta facere dignissimos impedit beatae nihil earum iure aperiam aliquam!
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {latestProducts.map((item, index) => (
            <div 
              key={index} 
              className="transform transition duration-300 hover:-translate-y-1 hover:shadow-xl rounded-lg"
            >
              <ProductItem
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            </div>
          ))}
        </div>

        {/* Optional Loading State */}
        {latestProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading latest collections...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LatestCollection;