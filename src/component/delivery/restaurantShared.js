import React from 'react'
import { FaSearch } from 'react-icons/fa'
import PropTypes from 'prop-types'

export function RestaurantShared ({ handleSubmit, query, handleChange }) {
  return (
    <nav className='flex justify-center mb-4'>
      <form onSubmit={handleSubmit} className='flex w-full max-w-lg'>
        <div className='relative w-full'>
          <FaSearch className='absolute top-1/2 left-3 transform -translate-y-1/2 text-red-500' />
          <input
            type='text'
            value={query}
            onChange={handleChange}
            placeholder='Buscar pelo restaurante'
            className='w-full px-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'
          />
        </div>
      </form>
    </nav>
  )
}

RestaurantShared.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default RestaurantShared
