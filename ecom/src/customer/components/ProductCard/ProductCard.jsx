import React from 'react'
import './ProductCard.css'
import { useNavigate } from 'react-router-dom';

const ProductCard = ({product}) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/product/${5}`)} className='ProductCard w-[15rem] m-3 transition-all cursor-pointer'>
      <div className='h-[20rem]'>
        <img className='h-full w-full object-cover object-left-top' src={product.imageUrl} alt="productImage" />
      </div>
      <div className='textPart bg-white p-3'>
        <p className='font-semibold text-lg'>{product.brand}</p>
        <p className='text-gray-500'>{product.title}</p>
        <div className=' flex items-center space-x-2'>
          <p className='font-semibold text-lg'>{product.discountedPrice}</p>
          <p className='text-sm line-through text-gray-500'>{product.price}</p>
          <p className='text-sm text-green-500'>{product.discountPersent}% off</p>
        </div>
      </div>
      
    
    
    </div>
  )
}

export default ProductCard