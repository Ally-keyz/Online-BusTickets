import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import LayOut from '../LayOut.jsx'
import About from '../app/pages/About.jsx'
import Download from '../app/pages/Download.jsx'
import Contact from '../app/pages/contact.jsx'
import Admin from '../app/pages/Admin.jsx'
import Landing from '../app/Landing/Landing.jsx'
import Potal from '../app/pages/potal.jsx'
import DashContent from '../app/pages/DashContent.jsx'
import Home2 from '../app/Admin/Home.jsx'
import Schedule from '../app/Admin/Schedule.jsx';
import Reporting from '../app/Admin/Reporting.jsx'
import Employee from '../app/Admin/Employee.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<LayOut />}>
      <Route path="/" element={<Landing />} />
      <Route path="About" element={<About />} />
      <Route path="Download" element={<Download />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="Admin" element={<Potal />} />
      <Route path="Dash" element={<DashContent />}>
        <Route path='' element={<Home2 />} />
        <Route path="Schedule" element={<Schedule />} />
        <Route path='Reporting' element={<Reporting />} />
        <Route path='Employee' element={<Employee />} />
      </Route>
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);