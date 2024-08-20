import React from 'react';
import PropTypes from 'prop-types';

export function CheckoutButton ({ onClick }) {
  return (
    <button
      onClick={onClick}
      className='bg-red-500 text-white px-4 py-2 rounded w-full'
    >
      Finalizar pedido
    </button>
  );
};

CheckoutButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default CheckoutButton;
