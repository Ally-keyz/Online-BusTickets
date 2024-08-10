import React from 'react'
import Navbar from './Navbar'
import Download from '../pages/Download'
import About from '../pages/About'
import Admin from '../pages/Admin'
import Slides from '../components/slides'
import Contact from '../pages/contact'
import Home from '../pages/Home'
function Landing() {
  return (<>
   
    <div>
    <Navbar />
        <img src={'app/assets/landing.jpg'} alt="Background" className="w-full h-screen  object-cover"  />
      <div className="absolute inset-0 gradient-overlay ">
      </div>  
      <div className="absolute inset-0 shadow-overlay-center"></div>
      <div className="absolute inset-0 shadow-overlay"></div>
      </div>
      <Home />
      <Download  />
      <About />
      <Admin />
      <Contact />
      </> )
}

export default Landing