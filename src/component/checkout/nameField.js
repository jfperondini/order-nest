import React from 'react';
import PropTypes from 'prop-types';

export function NameField  ({ name, onChange, error })  {
  return (
    <div className='mb-4'>
      <label htmlFor='name' className='block text-lg font-semibold mb-2'>
        Seu Nome <span className='text-red-500'>*</span>
      </label>
      <input
        type='text'
        id='name'
        name='name'
        placeholder='Pode ser o nome completo'
        className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'
        value={name}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && <span className='text-red-500 text-sm mt-1'>{error}</span>}
    </div>
  );
};

NameField.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default NameField;
