import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const RelatedProduct = ({ category, subCategory, currentProductId }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    if (products.length > 0) {
      let productsCopy = products.slice();
      productsCopy = productsCopy.filter(
        (item) => category === item.category && item._id !== currentProductId
      );
      if (subCategory) {
        productsCopy = productsCopy.filter((item) => subCategory === item.subCategory);
      }
      setRelated(productsCopy.slice(0, 5));
      setTimeout(() => setIsLoading(false), 300); // Smooth loading transition
    }
  }, [products, category, subCategory, currentProductId]);

  if (related.length === 0) return null;

  return (
    <div className='py-16 px-4 bg-gradient-to-b from-white to-gray-50'>
      <div className='max-w-7xl mx-auto'>
        <div className='mb-12 text-center'>
          <div className='inline-block relative'>
            <Title text1={'RELATED'} text2={'PRODUCTS'} />
            <div className='absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-black/10 rounded-full'></div>
          </div>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 gap-y-8'>
          {related.map((item, index) => (
            <div
              key={index}
              className={`transform transition-all duration-500 hover:-translate-y-2 ${
                isLoading
                  ? 'opacity-0 translate-y-4'
                  : 'opacity-100 translate-y-0'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              <div className='bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4'>
                <ProductItem
                  id={item._id}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                />
              </div>
            </div>
          ))}
        </div>

        {related.length > 0 && (
          <div className='mt-12 text-center'>
            <button className='inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 hover:text-black transition-colors duration-200'>
              View All Related Products
              <svg
                className='w-4 h-4 ml-2 -mr-1'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RelatedProduct;