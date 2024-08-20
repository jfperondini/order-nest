import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import PropTypes from 'prop-types'

export function RestaurantHeader ({ restaurantSelect, cartCount, onCartClick }) {
  return (
    <header className='relative w-full h-[340px] bg-black bg-cover bg-center'>
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{
          backgroundImage: `url(${restaurantSelect?.background})`,
          opacity: 0.5
        }}
      />
      <div className='w-full h-full flex flex-col justify-center items-center relative z-10'>
        <img
          src={restaurantSelect?.photo}
          className='w-32 h-32 shadow-lg hover:scale-110 duration-200'
          alt='Logo'
        />
        <h1 className='text-4xl mt-4 mb-2 font-bold text-white'>
          {restaurantSelect?.name}
        </h1>
        <span className='text-white font-medium'>
          {restaurantSelect?.address}
        </span>
        <div className='bg-red-600 px-4 py-1 rounded-lg mt-5'>
          <span className='text-white font-medium'>
            {restaurantSelect?.hour}
          </span>
        </div>

        <div
          className='absolute top-4 right-4 flex items-center cursor-pointer'
          onClick={onCartClick}
        >
          <FaShoppingCart className='text-white text-2xl  hover:text-red-600' />
          <span className='ml-2 text-white  font-medium text-lg'>
            {cartCount}
          </span>
        </div>
      </div>
    </header>
  )
}

RestaurantHeader.propTypes = {
  restaurantSelect: PropTypes.shape({
    name: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    hour: PropTypes.string.isRequired
  }).isRequired,
  cartCount: PropTypes.number.isRequired,
  onCartClick: PropTypes.func.isRequired
}

export default RestaurantHeader
