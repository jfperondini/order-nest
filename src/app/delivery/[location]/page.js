'use client'

import RestaurantCard from '@/component/delivery/restaurantCard'
import RestaurantShared from '@/component/delivery/restaurantShared'
import { getRestaurantByLocation } from '@/service/restaurantService'
import { normalizeNameForUrl } from '@/utils/normalizeNameForUrl'
import { useRouter } from 'next/navigation'
import React, { useState, useEffect, useCallback } from 'react'

export default function Location () {
  const [listRestaurant, setListRestaurant] = useState([])
  const [query, setQuery] = useState('')
  const router = useRouter()
  const location = localStorage.getItem('location')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [listRestaurantResult] = await Promise.all([
          getRestaurantByLocation({ location: location })
        ])
        setListRestaurant(listRestaurantResult)
      } catch (error) {
        console.error('Erro ao buscar dados do pedido:', error)
      }
    }

    fetchData()
  }, [location])

  const handleSelectRestaurant = useCallback(
    restaurant => {
      const normalizedName = normalizeNameForUrl(restaurant.name)
      localStorage.setItem('restaurantId', restaurant.id)
      router.push(`/al/${normalizedName}`)
    },
    [router]
  )

  const handleChange = e => {
    setQuery(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <div className='container mx-auto p-6'>
      <RestaurantShared
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        query={query}
      />

      <main className='grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto max-w-7xl p-4'>
        {listRestaurant.map(restaurant => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
            onClick={() => handleSelectRestaurant(restaurant)}
          />
        ))}
      </main>
    </div>
  )
}
