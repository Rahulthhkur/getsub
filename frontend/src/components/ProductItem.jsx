import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    const scrollPosition = window.scrollX;
    navigate(`/product/${id}`, {
      state: { 
        fromCollection: true,
        scrollPosition 
      }
    });
  };

  return (
    <a 
      className='text-gray-700 cursor-pointer' 
      href={`/product/${id}`} 
      onClick={handleClick}
    >
      <div className='overflow-hidden'>
        <img 
          className='hover:scale-110 transition ease-in-out' 
          src={image[0]} 
          alt={name} 
        />
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='text-sm font-medium'>{currency}{price}</p>
      </div>
    </a>
  );
};

export default ProductItem;