import React from 'react'
import PropTypes from 'prop-types'

export function Button ({ name, section }) {
  return (
    <button
      className={`py-2 px-4 rounded-lg shadow-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500`}
      onClick={() =>
        document.getElementById(section).scrollIntoView({ behavior: 'smooth' })
      }
    >
      {name}
    </button>
  )
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  section: PropTypes.string.isRequired
}

export default Button
