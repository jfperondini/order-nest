'use client'

import Button from '@/component/al/button'
import Card from '@/component/al/cart'
import MenuItem from '@/component/al/menuItem'
import RestaurantHeader from '@/component/al/restaurantHeader'
import Title from '@/component/al/title'
import getListCategoryById from '@/service/categoryService'
import getMenuByIdRestaurant from '@/service/menuService'
import { getRestaurantById } from '@/service/restaurantService'
import { useRouter } from 'next/navigation'
import React, { useState, useEffect } from 'react'

export default function Restaurant () {
  const [listMenu, setListMenu] = useState([])
  const [restaurantSelect, setRestaurant] = useState({})
  const [filteredCategories, setFilteredCategories] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cart, setCart] = useState({ total: 0, items: [] })
  const [isOrderFinalized, setIsOrderFinalized] = useState(false)
  const router = useRouter()
  const restaurantId = localStorage.getItem('restaurantId')

  useEffect(() => {
    const fetchData = async () => {
      if (restaurantId) {
        try {
          const [restaurantResult, listMenuResult] = await Promise.all([
            getRestaurantById(restaurantId),
            getMenuByIdRestaurant({ idRestaurant: restaurantId })
          ])
          setRestaurant(restaurantResult)
          setListMenu(listMenuResult)

          const listIdCategory = listMenuResult.map(item => item.idCategory)
          const uniqueCategories = [...new Set(listIdCategory)]
          const categories = await getListCategoryById(uniqueCategories)

          setFilteredCategories(categories)
        } catch (error) {
          console.error('Erro ao buscar dados:', error)
        }
      }
    }

    fetchData()
  }, [restaurantId])

  const handleQuantityChange = (itemName, value) => {
    setCart(prevCart => ({
      ...prevCart,
      items: prevCart.items.map(cartItem =>
        cartItem.name === itemName ? { ...cartItem, quantity: value } : cartItem
      ),
      total: calculateTotal(prevCart.items)
    }))
  }

  const addToCart = item => {
    setCart(prevCart => {
      const existingItemIndex = prevCart.items.findIndex(
        cartItem => cartItem.name === item.name
      )
      const updatedItems = [...prevCart.items]

      if (existingItemIndex >= 0) {
        updatedItems[existingItemIndex].quantity += 1
      } else {
        updatedItems.push({ ...item, quantity: 1 })
      }

      return {
        ...prevCart,
        items: updatedItems,
        total: calculateTotal(updatedItems)
      }
    })
  }

  const incrementQuantity = itemName => {
    setCart(prevCart => {
      const updatedItems = prevCart.items.map(cartItem =>
        cartItem.name === itemName
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )

      return {
        ...prevCart,
        items: updatedItems,
        total: calculateTotal(updatedItems)
      }
    })
  }

  const decrementQuantity = itemName => {
    setCart(prevCart => {
      const updatedItems = prevCart.items.reduce((updatedCart, cartItem) => {
        if (cartItem.name === itemName) {
          if (cartItem.quantity > 1) {
            updatedCart.push({ ...cartItem, quantity: cartItem.quantity - 1 })
          }
        } else {
          updatedCart.push(cartItem)
        }
        return updatedCart
      }, [])

      return {
        ...prevCart,
        items: updatedItems,
        total: calculateTotal(updatedItems)
      }
    })
  }

  const calculateTotal = updatedItems => {
    const total = updatedItems.reduce((total, item) => {
      return total + item.price * item.quantity
    }, 0)

    return total
  }

  const toggleCart = () => {
    setIsCartOpen(prev => !prev)
  }

  const closeCart = () => {
    setIsCartOpen(false)
  }

  const handleOrderClick = () => {
    setIsOrderFinalized(true)
    setTimeout(() => {
      setIsOrderFinalized(false)
      localStorage.setItem('cart', JSON.stringify(cart))
      router.push('/checkout')
    }, 5000)
  }

  return (
    <div>
      <RestaurantHeader
        restaurantSelect={restaurantSelect}
        cartCount={cart.items.length}
        onCartClick={toggleCart}
      />

      <Card
        isCartOpen={isCartOpen}
        cart={cart}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
        closeCart={closeCart}
        calculateTotal={cart.total}
        isOrderFinalized={isOrderFinalized}
        handleOrderClick={handleOrderClick}
      />

      <div className='flex justify-center gap-x-4 mx-auto max-w-7xl p-4 w-full'>
        {filteredCategories.map(categoryItem => (
          <Button
            key={categoryItem.id}
            name={categoryItem.type}
            section={`${categoryItem.id}-selection`}
          />
        ))}
      </div>

      {filteredCategories.map(categoryItem => (
        <div key={categoryItem.id}>
          <Title
            section={`${categoryItem.id}-selection`}
            name={categoryItem.type}
          />

          <main className='grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto max-w-7xl p-2'>
            {listMenu
              .filter(menuItem => menuItem.idCategory === categoryItem.id)
              .map(filteredMenuItem => (
                <MenuItem
                  key={filteredMenuItem.id}
                  item={filteredMenuItem} // Ajuste aqui conforme o nome correto
                  addToCart={() => addToCart(filteredMenuItem)}
                  onQuantityChange={value =>
                    handleQuantityChange(filteredMenuItem.name, value)
                  }
                />
              ))}
          </main>
        </div>
      ))}

      {/* Box circular condicional */}
      {isOrderFinalized && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50'>
          <div className='bg-white p-4 rounded-lg shadow-lg flex flex-col items-center'>
            <div className='w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white text-4xl'>
              ✓
            </div>
            <p className='text-gray-800 mt-4 text-lg'>
              Pedido finalizado com sucesso...
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
