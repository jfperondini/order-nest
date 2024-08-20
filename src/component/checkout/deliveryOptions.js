import React from 'react';
import PropTypes from 'prop-types';
import { FaTruck, FaShoppingBag } from 'react-icons/fa';

export function DeliveryOptions ({ deliveryOption, onChange })  {
  return (
    <div className='flex justify-around'>
      <label
        onClick={() => onChange('delivery')}
        className={`flex flex-col items-center cursor-pointer ${
          deliveryOption === 'delivery' ? 'text-red-600' : 'text-gray-600'
        }`}
      >
        <FaTruck
          className={`w-12 h-12 mb-2 ${
            deliveryOption === 'delivery' ? 'text-red-600' : 'text-gray-600'
          }`}
        />
        Delivery
      </label>
      <label
        onClick={() => onChange('pickup')}
        className={`flex flex-col items-center ${
          deliveryOption === 'pickup' ? 'text-red-600' : 'text-gray-600'
        }`}
      >
        <FaShoppingBag
          className={`w-12 h-12 mb-2 ${
            deliveryOption === 'pickup' ? 'text-red-600' : 'text-gray-600'
          }`}
        />
        Retirada
      </label>
    </div>
  );
};

DeliveryOptions.propTypes = {
  deliveryOption: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default DeliveryOptions;
