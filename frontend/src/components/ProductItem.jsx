import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

function ProductItem({ _id, image, name, price, description }) {
  const { currency } = useContext(ShopContext)

  return (
    // <Link className='text-gray-700 cursor-pointer' to={`/product/${_id}`}>
    //     <div className='overflow-hidden'>
    //         <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
    //     </div>
    //     <p className='pt3 pb-1 text-sm'>{name}</p>
    //     <p className='pt3 pb-1 text-sm'>{description}</p>
    //     <p className='text-sm font-medium'>{currency}{price}</p>
    // </Link>
    <Link
      className='text-gray-800 cursor-pointer shadow-md hover:shadow-lg rounded-md bg-white p-1  transition-shadow duration-300'
      to={`/product/${_id}`}
    >
      <div className='overflow-hidden rounded-md'>
        <img
          className='hover:scale-110 transition-transform duration-300 ease-in-out'
          src={image[0]}
          alt={name}
        />
      </div>
      <p className='pt-3 pb-1  text-bold fw-bold text-black-900'>{name}</p>
      <p className='pb-1  text-sm text-gray-600'>{description}</p>
      <p className='text-sm   font-medium text-green-500'>
        {currency}
        {price}
      </p>
    </Link>

  )
}

export default ProductItem