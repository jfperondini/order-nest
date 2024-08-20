import React from 'react'
import PropTypes from 'prop-types'

export function RestaurantCard ({ restaurant, onClick }) {
  return (
    <div
      className='border rounded-lg shadow-md p-4 hover:bg-gray-100 cursor-pointer'
      onClick={() => onClick(restaurant)}
    >
      <div className='flex gap-4'>
        <img
          
          src={restaurant?.photo}
          className='w-28 h-28 rounded-md object-cover'
          alt={restaurant?.name || 'Item'}
        />
        <div className='flex flex-col flex-grow'>
        <h2 className='text-lg font-semibold'>{restaurant?.name}</h2>
        <p>{restaurant?.address}</p>
        <p>{restaurant?.hour}</p>
        </div>
      </div>
    </div>
  )
}


RestaurantCard.propTypes = {
  restaurant: PropTypes.shape({
    name: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    hour: PropTypes.string.isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired
}


export default RestaurantCard
