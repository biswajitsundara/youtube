import React from 'react'
import Sidebar from '../Body/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import ScrollToTop from '../scroll/ScrollToTop'

function Body() {
  return (
    <div className='grid grid-flow-col'>
      <Sidebar />
      <ScrollToTop/>
      <Outlet />
    </div>
  )
}

export default Body
