import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title.jsx';
import ProductItem from '../components/ProductItem.jsx';
import { useLocation } from 'react-router-dom';
import { Filter, SlidersHorizontal } from 'lucide-react';
import PromoBanner from '../components/PromoBanner.jsx';

const Collection = ({ initialCategory, title }) => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setcategory] = useState(initialCategory ? [initialCategory] : []);
  const [subCategory, setsubCategory] = useState([]);
  const [sortType, setsortType] = useState('relavent');
  const location = useLocation();  // Add this


  // toggling the category 
  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setcategory((prev) => prev.filter((item) => item !== e.target.value));
    }
    else {
      setcategory(prev => [...prev, e.target.value])
    }
  }

  // toggling the sub category
  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setsubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setsubCategory(prev => [...prev, e.target.value]);
    }
  };

  // applying the filter for men/women etc.
  const applyFilter = () => {
    let productsCopy = products.slice();
    
    if(showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }
    
    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }
    setFilterProducts(productsCopy);

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }
    setFilterProducts(productsCopy);
  };

  // sorting the products according to the price
  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => (a.price - b.price)));
        break;

      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => (b.price - a.price)));
        break;

      default:
        applyFilter();
        break;
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    applyFilter();
  }, [category, subCategory , search, showSearch])

  useEffect(() => {
    sortProduct();
  }, [sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter options */}
      <div className='min-w-60 bg-white rounded-lg'>
  {!initialCategory && (
    <>
      <p onClick={() => setShowFilter(!showFilter)} 
         className='my-2 text-xl flex items-center justify-between cursor-pointer gap-2 font-medium hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-gray-50'>
        <span className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 6h18M6 12h12m-9 6h6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          FILTERS
        </span>
        <img className={`h-3 sm:hidden transition-transform duration-200 ${showFilter ? 'rotate-90' : ''}`} 
             src={assets.dropdown_icon} 
             alt="" />
      </p>
      {/* Category Filter */}
      <div className={`border border-gray-200 rounded-lg shadow-sm pl-5 py-3 mt-6 hover:border-gray-300 transition-colors ${showFilter ? '' : 'hidden'} sm:block`}>
        <p className='mb-3 text-sm font-medium text-gray-800 uppercase tracking-wide'>
          <span className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 7h18M3 12h18M3 17h18" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            CATEGORIES
          </span>
        </p>
        <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
          <label className='flex gap-2 items-center hover:bg-gray-50 p-2 rounded-md transition-colors cursor-pointer'>
            <input className='w-3 h-3 accent-blue-600 cursor-pointer' 
                   type="checkbox" 
                   value={'Smartwatch'} 
                   onChange={toggleCategory} 
                   checked={category.includes('Smartwatch')} />
            Smart Watch
          </label>
          <label className='flex gap-2 items-center hover:bg-gray-50 p-2 rounded-md transition-colors cursor-pointer'>
            <input className='w-3 h-3 accent-blue-600 cursor-pointer' 
                   type="checkbox" 
                   value={'Headphones'} 
                   onChange={toggleCategory} />
            Headphones
          </label>
          <label className='flex gap-2 items-center hover:bg-gray-50 p-2 rounded-md transition-colors cursor-pointer'>
            <input className='w-3 h-3 accent-blue-600 cursor-pointer' 
                   type="checkbox" 
                   value={'Earbuds'} 
                   onChange={toggleCategory} />
            Earbuds
          </label>
        </div>
      </div>
    </>
  )}
  {/* Sub Category Filter */}
  <PromoBanner/>
</div>

      {/* Right Side */}
      <div className='flex-1'>
          <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6'>
            <Title text1={title ? title.text1 : 'ALL'} text2={title ? title.text2 : 'COLLECTIONS'} />
            
            <div className='flex items-center gap-2'>
              <SlidersHorizontal size={20} className="text-gray-500" />
              <select 
                onChange={(e) => setsortType(e.target.value)} 
                className='bg-white border rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer'
              >
                <option value="relavent">Sort by: Relevant</option>
                <option value="low-high">Price: Low to High</option>
                <option value="high-low">Price: High to Low</option>
              </select>
            </div>
          </div>

        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 '>
          {
            filterProducts.map((item, index) => (
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Collection