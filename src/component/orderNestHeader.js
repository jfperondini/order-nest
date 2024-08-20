import React from 'react'
import PropTypes from 'prop-types'

export function OrderNestHeader ({ orderSelect }) {
  return (
    <header className='relative w-full h-[100px] bg-gray-100 shadow-lg bg-cover bg-center'>
      <div className='w-full h-full flex items-center justify-between relative z-10 px-4'>
        <div className='flex items-center'>
          <h1 className='text-4xl ml-4 font-bold text-red-500'>
            {orderSelect?.name}
          </h1>
          <img
            
            src={orderSelect?.photo}
            className='w-20 h-35 object-cover hover:scale-110 duration-200'
            alt='Logo'
          />
        </div>
      </div>
    </header>
  )
}

OrderNestHeader.propTypes = {
  orderSelect: PropTypes.shape({
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired
  }).isRequired
}

export default OrderNestHeader
