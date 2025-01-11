import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProduct from './RelatedProduct';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setproductData] = useState(false);
  const [image, setimage] = useState('');
  const [size, setsize] = useState('');
  const [activeTab, setActiveTab] = useState('description');

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
    window.scrollTo(0, 0);
  }, [productId]);

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
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto md:w-24 no-scrollbar">
              {productData.image.map((item, index) => (
                <img
                onMouseEnter={() => setimage(item)}
                onClick={() => setimage(item)} // Allow clicking to select
                onKeyDown={(e) => e.key === 'Enter' && setimage(item)} // Select on Enter key press
                src={item}
                key={index}
                tabIndex={0}
                className={`w-20 h-20 object-cover cursor-pointer rounded-lg 
                  ${image === item ? 'ring-2 m-1 ring-orange-500' : ''}`}
                alt={`Product view ${index + 1}`}
              />
              ))}
            </div>
            {/* Main Image */}
            <div className="flex-1">
              <img
                src={image}
                alt="Main product"
                className="w-full h-auto rounded-lg object-cover shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Product Info Section */}
        <div className="flex-1 space-y-6">
          <h1 className="text-xl md:text-2xl font-medium text-gray-800">{productData.name}</h1>

          {/* Rating */}
          <div className="flex items-center gap-1">
            {[...Array(4)].map((_, i) => (
              <img key={i} src={assets.star_icon} alt="" className="w-4 h-4" />
            ))}
            <img src={assets.star_dull_icon} alt="" className="w-4 h-4" />
            <span className="text-sm text-gray-500 ml-2">(122 reviews)</span>
          </div>

          {/* Price */}
          <div className="text-3xl font-bold text-gray-900">
            {currency}{productData.price}
            
            <span className="line-through text-gray-500 ml-4">
              {currency}{productData.price + 200}
            </span>
          </div>

          {/* Description */}
          <div 
  className="text-gray-700 leading-relaxed" 
  dangerouslySetInnerHTML={{ __html: productData.features }} 
/>

          {/* Size Selection */}
          <div className="space-y-4">
            <h3 className="font-medium text-gray-800">Select Color</h3>
            <div className="flex flex-wrap gap-2">
              {productData.colors.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setsize(item)}
                  className={`px-4 py-2 rounded-lg border transition-all
                    ${item === size
                      ? 'bg-black text-white border-black'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200 border-gray-300'
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={() => addToCart(productData._id, size)}
            className="w-full md:w-auto px-8 py-3 bg-black text-white rounded-lg
            hover:bg-gray-800 transition-colors active:bg-gray-700"
          >
            Add to Cart
          </button>

          {/* Product Features */}
          <div className="border-t pt-6 mt-6 space-y-2">
            {[
              "100% Original Product",
              "Cash on Delivery Available",
              "Easy 7-Day Returns & Exchange",
            ].map((feature, index) => (
              <div key={index} className="flex gap-2 items-start text-sm text-gray-600">
                <svg
                  className="w-5 h-5 text-green-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{feature}</span>
              </div>
            ))}
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
          ? 'border-b-2 border-black text-black'
          : 'text-gray-500 hover:text-black'
        }`}
    >
      Description
    </button>
    <button
      onClick={() => setActiveTab('reviews')}
      className={`px-6 py-3 text-sm font-medium transition-colors
        ${activeTab === 'reviews'
          ? 'border-b-2 border-black text-black'
          : 'text-gray-500 hover:text-black'
        }`}
    >
      Reviews (122)
    </button>
  </div>

  <div className="py-6">
    {activeTab === 'description' ? (
      <div 
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: productData.description }} 
      />
    ) : (
      <div className="text-gray-600">
        <p>Customer reviews coming soon...</p>
      </div>
    )}
  </div>
</div>

      {/* Display Related Products */}
      <RelatedProduct
        category={productData.category}
        subCategory={productData.subCategory}
        currentProductId={productData._id}
      />
    </div>
  );
};

export default Product;
