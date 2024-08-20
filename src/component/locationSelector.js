import React from 'react'
import PropTypes from 'prop-types'

export function LocationSelector ({
  selectedLocation,
  setSelectedLocation,
  listRestaurantCount,
  onButtonClick,
  orderSelect
}) {
  return (
    <main className='relative w-full h-[480px] bg-cover bg-center flex flex-col items-center justify-center'>
      <h1 className='text-5xl font-bold text-black mb-4 leading-snug'>
        {orderSelect?.call}
      </h1>
      <div className='bg-gray-100 bg-opacity-90 rounded-lg p-8 shadow-2xl max-w-md w-full'>
        <h2 className='text-2xl font-semibold mb-4'>{orderSelect?.redline}</h2>
        <div className='mb-6'>
          <select
            value={selectedLocation}
            onChange={e => setSelectedLocation(e.target.value)}
            className='bg-white border border-red-300 rounded-lg p-3 w-full'
          >
            <option value=''>Selecione uma localização</option>
            {listRestaurantCount.map(({ location, count }) => (
              <option key={location} value={location}>
                {location} {count > 1 ? `(${count})` : ''}
              </option>
            ))}
          </select>
        </div>
        <button
          className={`bg-red-400 text-white p-4 rounded-lg w-full ${
            selectedLocation
              ? 'hover:bg-red-500'
              : 'opacity-50 cursor-not-allowed'
          }`}
          onClick={onButtonClick}
          disabled={!selectedLocation}
        >
          Ver estabelecimentos
        </button>
      </div>
    </main>
  )
}

LocationSelector.propTypes = {
  selectedLocation: PropTypes.string.isRequired,
  setSelectedLocation: PropTypes.func.isRequired,
  listRestaurantCount: PropTypes.arrayOf(
    PropTypes.shape({
      location: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired
    })
  ).isRequired,
  onButtonClick: PropTypes.func.isRequired,
  orderSelect: PropTypes.shape({
    call: PropTypes.string.isRequired,
    redline: PropTypes.string.isRequired
  }).isRequired
}

export default LocationSelector
