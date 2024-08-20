'use client'

import LocationSelector from '@/component/locationSelector'
import Steps from '@/component/steps'
import getOrderNest from '@/service/orderNestService'
import { getListRestaurantCount } from '@/service/restaurantService'
import { normalizeNameForUrl } from '@/utils/normalizeNameForUrl'
import { useRouter } from 'next/navigation'
import React, { useState, useEffect, useCallback } from 'react'


export default function Home () {
  const [orderSelect, setOrderNest] = useState({})
  const [listRestaurantCount, setListRestaurantCount] = useState([])
  const [selectedLocation, setSelectedLocation] = useState('')
  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [orderNestResult, listRestaurantResult] = await Promise.all([
          getOrderNest(),
          getListRestaurantCount()
        ])
        setOrderNest(orderNestResult)
        setListRestaurantCount(listRestaurantResult)
      } catch (error) {
        console.error('Erro ao buscar dados do pedido:', error)
      }
    }
    fetchData()
  }, [])

  const handleButtonClick = useCallback(() => {
    if (selectedLocation) {
      const normalizedName = normalizeNameForUrl(selectedLocation)
      localStorage.setItem('location', selectedLocation)
      router.push(`/delivery/${normalizedName}`)
    }
  }, [router, selectedLocation])

  return (
    <div>
      <LocationSelector
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        listRestaurantCount={listRestaurantCount}
        onButtonClick={handleButtonClick}
        orderSelect={orderSelect}
      />
      <Steps />
    </div>
  )
}
