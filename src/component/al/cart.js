import React from 'react'
import PropTypes from 'prop-types'

export function Card ({
  isCartOpen,
  cart,
  incrementQuantity,
  decrementQuantity,
  closeCart,
  handleOrderClick
}) {
  return (
    <div
      className={`fixed top-0 right-0 h-screen bg-black/60 shadow-lg transition-transform transform ${
        isCartOpen ? 'translate-x-0' : 'translate-x-full'
      } w-[400px] p-4 z-50`}
    >
      <div className='bg-white p-5 rounded-md h-full flex flex-col'>
        <h2 className='text-xl font-semibold mb-4'>Meu Carrinho</h2>

        i<div className='flex-1 overflow-y-auto'>
          {cart.items.length > 0 ? (
            cart.items.map((item, index) => (
              <div
                key={index}
                className='block p-4 border border-gray-300 rounded-lg hover:bg-gray-100 cursor-pointer mb-4'
              >
                <h2 className='text-lg font-semibold'>{item.name}</h2>
                <div className='flex items-center justify-between'>
                  <p className='font-bold text-lg'>
                    R$ {item.price.toFixed(2)}
                  </p>
                  <div className='flex items-center'>
                    <button
                      onClick={() => decrementQuantity(item.name)}
                      className='bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600'
                    >
                      -
                    </button>
                    <p className='mx-4 text-sm'>{item.quantity}</p>
                    <button
                      onClick={() => incrementQuantity(item.name)}
                      className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600'
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className='text-center text-gray-500'>
              Seu carrinho está vazio.
            </p>
          )}
        </div>

        <div className='p-4 border-t border-gray-300'>
          <h1 className='text-lg font-bold'>
            Total: R$ {cart.total.toFixed(2)}
          </h1>
        </div>

        <div className='flex items-center justify-between mt-5 w-full'>
          <button onClick={closeCart} className='bg-gray-300 px-4 py-1 rounded'>
            Fechar
          </button>
          {cart.items.length > 0 && (
            <button
              onClick={handleOrderClick}
              className='bg-red-500 text-white px-4 py-1 rounded'
            >
              Finalizar pedido
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  isCartOpen: PropTypes.bool.isRequired,
  cart: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired
      })
    ).isRequired,
    total: PropTypes.number.isRequired
  }).isRequired,
  incrementQuantity: PropTypes.func.isRequired,
  decrementQuantity: PropTypes.func.isRequired,
  closeCart: PropTypes.func.isRequired,
  handleOrderClick: PropTypes.func.isRequired
}

export default Card
