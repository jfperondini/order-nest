'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import CartItems from '../../component/checkout/cartItem'
import DeliveryOptions from '../../component/checkout/deliveryOptions'
import AddressField from '../../component/checkout/addressField'
import NameField from '../../component/checkout/nameField'
import WhatsappField from '../../component/checkout/whatsappField'
import ObservationsField from '../../component/checkout/observationsField'
import CheckoutButton from '../../component/checkout/checkoutButton'

export default function Checkout () {
  const [cart, setCart] = useState({ total: 0, items: [] })
  const [deliveryOption, setDeliveryOption] = useState('pickup')
  const [name, setName] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [address, setAddress] = useState('')
  const [errors, setErrors] = useState({})
  const router = useRouter()

  useEffect(() => {
    try {
      const storedCart = localStorage.getItem('cart')
      if (storedCart) {
        const parsedCart = JSON.parse(storedCart)
        setCart(parsedCart)
      }
    } catch (error) {
      console.error('Error parsing stored cart:', error)
    }
  }, [])

  const handleDeliveryChange = option => {
    setDeliveryOption(option)
  }

  const validateWhatsapp = value => {
    const cleanedValue = value.replace(/\D/g, '')
    return cleanedValue.length === 11
  }

  const validateForm = () => {
    const newErrors = {}
    if (name.trim().length < 3)
      newErrors.name = 'O nome deve ter pelo menos 3 caracteres.'
    if (!whatsapp.trim() || !validateWhatsapp(whatsapp))
      newErrors.whatsapp =
        'Digite um número de WhatsApp válido com exatamente 11 dígitos.'
    if (deliveryOption === 'delivery' && !address.trim())
      newErrors.address = 'Este campo é obrigatório.'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleOrderClick = () => {
    if (validateForm()) {
      router.push('/')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 bg-opacity-90">
      <div className='bg-white rounded-lg p-8 shadow-2xl max-w-md w-full'>
        <CartItems cart={cart} items={cart.items} />

        <h1 className='text-lg font-semibold mb-2'>O que você deseja?</h1>
        <DeliveryOptions
          deliveryOption={deliveryOption}
          onChange={handleDeliveryChange}
        />
        {deliveryOption === 'delivery' && (
          <AddressField
            address={address}
            onChange={setAddress}
            error={errors.address}
          />
        )}
        <NameField name={name} onChange={setName} error={errors.name} />
        <WhatsappField
          whatsapp={whatsapp}
          onChange={setWhatsapp}
          error={errors.whatsapp}
        />
        <ObservationsField />
        <CheckoutButton onClick={handleOrderClick} />
      </div>
    </div>
  )
}
