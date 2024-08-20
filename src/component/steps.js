import React from 'react'
import { BsGeoAltFill } from 'react-icons/bs'
import { FaShoppingCart, FaUtensils } from 'react-icons/fa'
import { ArrowRight } from './faArrowRight'

export function Steps () {
  return (
    <div className='flex flex-col items-center justify-center p-4'>
      <h2 className='text-4xl font-bold text-red-500 mb-6'>É MUUUUITO FÁCIL</h2>
      <div className='flex flex-col items-center'>
        <div className='flex items-center space-x-6 '>
          <div className='rounded-full bg-red-500 p-6'>
            <BsGeoAltFill size={56} color='white' />
          </div>
          <ArrowRight />
          <div className='rounded-full bg-red-500 p-6'>
            <FaUtensils size={56} color='white' />
          </div>
          <ArrowRight />
          <div className='rounded-full bg-red-500 p-6'>
            <FaShoppingCart size={56} color='white' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Steps
