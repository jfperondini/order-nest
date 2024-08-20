import React from 'react'
import PropTypes from 'prop-types'

export function AddressField ({ address, onChange, error }) {
  return (
    <div className='mb-4'>
      <label htmlFor='address' className='block text-lg font-semibold mb-2'>
        Entregar em qual endereço?
      </label>
      <input
        type='text'
        id='address'
        name='address'
        placeholder='Digite o endereço de entrega'
        className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'
        value={address}
        onChange={e => onChange(e.target.value)}
      />
      {error && <span className='text-red-500 text-sm mt-1'>{error}</span>}
    </div>
  )
}

AddressField.propTypes = {
  address: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
}

export default AddressField
