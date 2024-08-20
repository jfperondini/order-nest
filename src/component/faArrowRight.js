import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

export function ArrowRight () {
  return (
    <div className='flex items-center'>
      <div className='rounded-full bg-green-500 p-2'>
        <FaArrowRight size={20} color='white' />
      </div>
    </div>
  )
}
