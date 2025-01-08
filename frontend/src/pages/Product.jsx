import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProduct from './RelatedProduct';

const Product = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setproductData] = useState(false);
  const [image, setimage] = useState('');
  const [size, setsize] = useState('');
  const [activeTab, setActiveTab] = useState('description'); // New state for tabs

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setproductData(item);
        setimage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  if (!productData) return <div className="min-h-screen"></div>;

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Product Images Section */}
        <div className="flex-1">
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnail Gallery */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-y-auto md:w-24 no-scrollbar">
              {productData.image.map((item, index) => (
                <img
                  onClick={() => setimage(item)}
                  src={item}
                  key={index}
                  className={`w-20 h-20 object-cover cursor-pointer rounded-lg 
                    ${image === item ? 'ring-1 ring-orange-500' : ''}`}
                  alt={`Product view ${index + 1}`}
                />
              ))}
            </div>
            {/* Main Image */}
            <div className="flex-1">
              <img
                src={image}
                alt="Main product"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          </div>
        </div>

        {/* Product Info Section */}
        <div className="flex-1 space-y-6">
          <h1 className="text-2xl md:text-3xl font-semibold">{productData.name}</h1>
          
          {/* Rating */}
          <div className="flex items-center gap-1">
            {[...Array(4)].map((_, i) => (
              <img key={i} src={assets.star_icon} alt="" className="w-4 h-4" />
            ))}
            <img src={assets.star_dull_icon} alt="" className="w-4 h-4" />
            <span className="text-sm text-gray-600 ml-2">(122 reviews)</span>
          </div>

          {/* Price */}
          <div className="text-3xl font-bold">
            {currency}{productData.price}
          </div>

          {/* Description */}
          <p className="text-gray-600">{productData.description}</p>

          {/* Size Selection */}
          <div className="space-y-4">
            <h3 className="font-medium">Select Size</h3>
            <div className="flex flex-wrap gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setsize(item)}
                  className={`px-4 py-2 rounded-md transition-all
                    ${item === size 
                      ? 'bg-black text-white' 
                      : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button className="w-full md:w-auto px-8 py-3 bg-black text-white rounded-md
            hover:bg-gray-800 transition-colors active:bg-gray-700">
            Add to Cart
          </button>

          {/* Product Features */}
          <div className="border-t pt-6 mt-6 space-y-2">
            <div className="flex gap-2 items-start text-sm text-gray-600">
              <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>100% Original Product</span>
            </div>
            <div className="flex gap-2 items-start text-sm text-gray-600">
              <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Cash on Delivery Available</span>
            </div>
            <div className="flex gap-2 items-start text-sm text-gray-600">
              <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Easy 7-Day Returns & Exchange</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-16">
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab('description')}
            className={`px-6 py-3 text-sm font-medium transition-colors
              ${activeTab === 'description'
                ? 'border-b-2 border-black'
                : 'text-gray-500 hover:text-black'
              }`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`px-6 py-3 text-sm font-medium transition-colors
              ${activeTab === 'reviews'
                ? 'border-b-2 border-black'
                : 'text-gray-500 hover:text-black'
              }`}
          >
            Reviews (122)
          </button>
        </div>
        <div className="py-6">
          {activeTab === 'description' ? (
            <div className="prose max-w-none">
              <p>{productData.description}</p>
            </div>
          ) : (
            <div className="text-gray-600">
              {/* Reviews content would go here */}
              <p>Customer reviews coming soon...</p>
            </div>
          )}
        </div>
      </div>

      {/* display related products */}
      <RelatedProduct category={productData.category} subCategory={productData.subCategory}/>
    </div>
  );
};

export default Product;