import React from 'react';
import PropTypes from 'prop-types';

const CartItems = ({ cart, items }) => (
  <div >
    {items.map((item, index) => (
      <div
        key={index}
        className='block p-4 border border-gray-300 rounded-lg hover:bg-gray-100 cursor-pointer mb-4'
      >
        <h2 className='text-lg font-semibold'>{item.name}</h2>
        <div className='flex items-center justify-between'>
          <p className='font-bold text-lg'>R$ {item.price.toFixed(2)}</p>
          <p className='font-bold text-lg'>{item.quantity}</p>
        </div>
      </div>
    ))}
    <h1 className='text-2xl font-bold mb-4 text-right'>
      Total: R$ {cart.total.toFixed(2)}
    </h1>
  </div>
);

CartItems.propTypes = {
  cart: PropTypes.shape({
    total: PropTypes.number.isRequired,
  }).isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default CartItems;
