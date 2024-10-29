/* eslint-disable react/prop-types */
// import React from 'react'

const Button = ({ setCount, count, color, num }) => {
  return (
      <button
          style={{backgroundColor:color}}
          onClick={() => setCount(count += num)}>
          {num }
      </button>
  )
}

export default Button