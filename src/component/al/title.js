import React from 'react'
import PropTypes from 'prop-types'

export function Title ({ name, section }) {
  return (
    <main
      id={section}
      className='grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto max-w-7xl p-2'
    >
      <h1 className='text-2xl mt-4 mb-2 font-bold text-black'>{name}</h1>
    </main>
  )
}

Title.propTypes = {
  name: PropTypes.string.isRequired,
  section: PropTypes.string.isRequired
}

export default Title
