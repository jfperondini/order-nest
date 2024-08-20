import React from 'react';
import PropTypes from 'prop-types';

export function ScrollTopButton({ showScrollTopButton, scrollToTop }) {
  return (
    showScrollTopButton && (
      <button
        onClick={scrollToTop}
        className='fixed bottom-4 right-4 bg-red-500 text-white p-4 rounded-2xl shadow-lg hover:bg-red-700 transition duration-300'
      >
        ↑
      </button>
    )
  );
}

ScrollTopButton.propTypes = {
  showScrollTopButton: PropTypes.bool.isRequired,
  scrollToTop: PropTypes.func.isRequired
};

export default ScrollTopButton;
