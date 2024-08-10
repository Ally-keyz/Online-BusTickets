import React from 'react'
import Layout from './DashBoard'
import { Outlet } from 'react-router-dom'

function DashContent() {
  return (
    <>
   <Layout >
   <div className=''>
        <Outlet />
      </div>
   </Layout>

    </>
  )
}

export default DashContent