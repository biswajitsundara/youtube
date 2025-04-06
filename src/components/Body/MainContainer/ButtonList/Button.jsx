import React from 'react'

function Button({name}) {

  const fontStyle = name === 'All' ? 'bg-black text-white' : 'bg-gray-200';

  return (
    <div>
      <button className={`px-5 py-2 m-2 mt-4 rounded-lg text-sm min-w-[12px] font-medium ${fontStyle}`}>
        {name}
      </button>
    </div>
  )
}

export default Button
