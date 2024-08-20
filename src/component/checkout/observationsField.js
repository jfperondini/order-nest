import React from 'react'

export function ObservationsField () {
  return (
    <div className='mb-4'>
      <label
        htmlFor='observations'
        className='block text-lg font-semibold mb-2'
      >
        Observações do pedido (Opcional)
      </label>
      <textarea
        id='observations'
        name='observations'
        placeholder='Digite suas observações aqui'
        className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'
        rows='4'
      />
    </div>
  )
}

export default ObservationsField
