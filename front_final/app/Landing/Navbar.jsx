import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);   
    
    
  useEffect(() => {
   const handleScroll = () => {
     if (window.scrollY > 100) {
       setScrolled(true);
     } else {             
       setScrolled(false);
     }
   };
   window.addEventListener('scroll', handleScroll);
   return () => {
     window.removeEventListener('scroll', handleScroll);
   };      
   
                                                
 }, [])

  return (
    <nav className={`${scrolled ? 'w-full   fixed z-50 transition-all duration-700 ease-in-out shadow-sm  bg-custom-gradient   ':'w-full fixed  z-50 '}`}>
      <div className="w-full flex items-center h-16 justify-between sm:justify-around px-4">
        <div className="flex items-center ">
            <img src="app/assets/logo.png" className='mt-1' alt="" width={30} height={20} />
          <h1 className="text-white font-semibold ml-1 text-lg">ETIX</h1>
        </div>
        <div className="hidden md:flex items-center space-x-4">
            <NavLink to={'/'} className={({isActive})=> isActive ? 'text-white text-[13px] underline underline-offset-8':'text-white text-[13px]  transition-colors duration-300  hover:underline hover:underline-offset-8' } >Home</NavLink>
            <NavLink to={'/Download'} className={({isActive})=> isActive ? 'text-white text-[13px] underline underline-offset-8':'text-white text-[13px]  transition-colors duration-300  hover:underline hover:underline-offset-8' } >Download</NavLink>
            <NavLink to={'/About'} className={({isActive})=> isActive ? 'text-white text-[13px] underline underline-offset-8':'text-white text-[13px]  transition-colors duration-300  hover:underline hover:underline-offset-8' } >About</NavLink>
            <NavLink to={'/contact'} className={({isActive})=> isActive ? 'text-white text-[13px] underline underline-offset-8':'text-white text-[13px]  transition-colors duration-300  hover:underline hover:underline-offset-8' } >Contact</NavLink>
            <NavLink to={'/Admin'} className={({isActive})=> isActive ? 'text-white text-[13px] underline underline-offset-8':'text-white text-[13px]  transition-colors duration-300  hover:underline hover:underline-offset-8' } >Admin</NavLink>
      
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <select className="bg-transparent text-white border-none">
            <option value="en" className="bg-gray-800 text-white" style={{fontSize:14}}>English</option>
            <option value="kny" className="bg-gray-800 text-white" style={{fontSize:14}}>Kinyarwanda</option>
            <option value="fr" className="bg-gray-800 text-white" style={{fontSize:14}}>French</option>
            
          </select>
          <a href="#help" className="text-white hover:text-blue-500 transition-colors duration-300 hover:underline hover:underline-offset-8" style={{fontSize:14}}>Help</a>
        </div>
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-700 focus:outline-none"
          >
            <span className="sr-only">Open main menu</span>
            {!isOpen ? (
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            ) : (
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-800 px-2 pt-2 pb-3 space-y-1">
          <a href="#home" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Home</a>
          <a href="#download" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Download</a>
          <a href="#about" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">About</a>
          <a href="#contact" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Contact</a>
          <select className="bg-transparent text-white border-none w-full px-3 py-2 rounded-md">
            <option value="en" className="bg-gray-800 text-white">English</option>
            <option value="es" className="bg-gray-800 text-white">Spanish</option>
            <option value="fr" className="bg-gray-800 text-white">French</option>
            <option value="de" className="bg-gray-800 text-white">German</option>
          </select>
          <a href="#help" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Help</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


