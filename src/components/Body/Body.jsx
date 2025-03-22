import React from 'react'
import Sidebar from '../Body/Sidebar/Sidebar'
import MainContainer from '../Body/MainContainer/MainContainer'
import { Outlet } from 'react-router-dom'

function Body() {
  return (
    <div className='flex'>
      <Sidebar />
      <Outlet />
      {/* <MainContainer /> */}
    </div>
  )
}

export default Body
