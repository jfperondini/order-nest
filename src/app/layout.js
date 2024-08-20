'use client'

import React, { useState, useEffect } from 'react'
import { Inter } from 'next/font/google'
import PropTypes from 'prop-types'
import './globals.css'
import getOrderNest from '@/service/orderNestService'
import OrderNestHeader from '@/component/orderNestHeader'
import ScrollTopButton from '@/component/scrollTopButton'
import HeadTitle from '@/component/head'


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout ({ children }) {
  const [orderSelect, setOrderNest] = useState({})
  const [showScrollTopButton, setShowScrollTopButton] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [orderNestResult] = await Promise.all([getOrderNest()])
        setOrderNest(orderNestResult)
      } catch (error) {
        console.error('Erro ao buscar dados do pedido:', error)
      }
    }
    fetchData()
    const handleScroll = () => {
      setShowScrollTopButton(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <html lang='en'>
     <HeadTitle />
      <body className={inter.className}>
        <OrderNestHeader orderSelect={orderSelect} />
        {children}
        <ScrollTopButton
          showScrollTopButton={showScrollTopButton}
          scrollToTop={scrollToTop}
        />
      </body>
    </html>
  )
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired
}
