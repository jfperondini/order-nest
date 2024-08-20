import React from 'react'
import PropTypes from 'prop-types'

export function WhatsappField ({ whatsapp, onChange, error }) {
  return (
    <div className='mb-4'>
      <label htmlFor='whatsapp' className='block text-lg font-semibold mb-2'>
        Whatsapp *DDD + Número
      </label>
      <input
        type='text'
        id='whatsapp'
        name='whatsapp'
        placeholder='(11) 12345 6789'
        className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'
        value={whatsapp}
        onChange={e => onChange(e.target.value)}
      />
      {error && <span className='text-red-500 text-sm mt-1'>{error}</span>}
    </div>
  )
}

WhatsappField.propTypes = {
  whatsapp: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
}

export default WhatsappField
