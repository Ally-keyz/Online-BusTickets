import React from 'react'
import { Outlet } from 'react-router-dom'
import Landing from './app/Landing/Landing'
import './src/App.css'

function LayOut() {
  return (
    <div>
       <Outlet />
    </div>
  )
}

export default LayOut