import React from 'react'

function Button({name}) {
  return (
    <div>
      <button className='px-5 py-1 m-2 rounded-lg bg-gray-300'>{name}</button>
    </div>
  )
}

export default Button
