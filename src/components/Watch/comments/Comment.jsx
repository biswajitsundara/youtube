import React from 'react'

function Comment({data}) {
  const {name, text, replies} = data;
  return (
    <div className='flex shadow-sm p-2 bg-gray-100 rounded-lg my-5'>
      <img className="h-8 w-8" src="https://as1.ftcdn.net/jpg/02/59/39/46/1000_F_259394679_GGA8JJAEkukYJL9XXFH2JoC3nMguBPNH.jpg" alt="user" />
      <div>
        <p className='px-3 font-bold'>{name}</p>
        <p className='px-3'>{text}</p>
      </div>
    </div>
  )
}

export default Comment;
