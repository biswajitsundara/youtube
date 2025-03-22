import React from 'react'

function ChatMessage({name, message}) {
  return (
    <div className='flex items-center pt-3 px-3'>
       <img className="h-6 w-6" src="https://as1.ftcdn.net/jpg/02/59/39/46/1000_F_259394679_GGA8JJAEkukYJL9XXFH2JoC3nMguBPNH.jpg" alt="user" />
      <span className='font-bold px-4'>{name}</span>
      <span>{message}</span>
    </div>
  )
}

export default ChatMessage
