import React from 'react'
import { BsFillCartPlusFill } from 'react-icons/bs'
import PropTypes from 'prop-types'

export function MenuItem({ item, addToCart }) {
  return (
    <div className='block p-4 border border-gray-300 rounded-lg hover:bg-gray-100 cursor-pointer'>
      <div className='flex gap-4'>
        <img
          src={item?.photo}
          className='w-28 h-28 rounded-md object-cover'
          alt={item?.name}
        />
        <div className='flex flex-col flex-grow'>
          <h2 className='text-lg font-semibold'>{item?.name}</h2>
          <p className='text-sm mt-1'>{item?.description}</p>
          <div className='flex items-center justify-between mt-2'>
            <p className='font-bold text-lg'>
              R$ {item?.price.toFixed(2)}
            </p>
            <button
              type='button'
              onClick={() => addToCart(item)}
              className='bg-red-600 rounded text-white text-lg px-4 py-2 flex items-center gap-2 hover:bg-red-700 transition'
            >
              <BsFillCartPlusFill />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

MenuItem.propTypes = {
  item: PropTypes.shape({
    photo: PropTypes.string,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.number.isRequired
  }).isRequired,
  addToCart: PropTypes.func.isRequired
}


export default MenuItem
