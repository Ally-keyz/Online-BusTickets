import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/logo.png';
import home from '../assets/home.png';
import employee from '../assets/employee.png';
import schedule from '../assets/schedule-icon-35779.png';
import report from '../assets/Report.png';
import right from '../assets/right-arrow-icon-7589.png';
import '../Admin/custom-scrollbar.css';
import search from '../assets/tabler_search.png'
import { NavLink } from 'react-router-dom';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import profile from '../assets/user-244-32.png'
import '../Admin/ripple.css';


const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState('');

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const clearSearch = () => {
    setSearchText('');
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className="flex h-screen">
      <div className={`fixed z-20 h-full   bg-blue-400 shadow-sm text-white flex flex-col pt-10 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 md:w-36`}>
        <div className="flex justify-center font-bold text-[18px]">
          <div className="w-full flex  text-blue-500 h-[60px] bg-blue-400 relative top-[-40px]">
            <div className="ml-5 mt-3 flex">
              <img src={logo} className="mt-1 h-[30px]" alt="Logo" />
              <h1 className="text-white mt-1 font-bold ml-1 text-lg">ETIX</h1>
            </div>
          </div>
        </div>
        <nav className="flex-1 px-2 py-1 space-y-1">
          <NavLink to="/Dash" className="flex button text-[9px] items-center px-2 py-2 text-sm font-semibold rounded transition-colors duration-700 hover:bg-blue-300">
            <img src={home} className="mr-3 h-5 w-5" alt="Home" />
            Home
          </NavLink>
          <NavLink to="Employee" className="flex button text-[9px] items-center px-2 py-2 text-sm font-semibold rounded transition-colors duration-700 hover:bg-blue-300">
            <img src={employee} className="mr-3 h-5 w-5" alt="Employees" />
            Employees
          </NavLink>
          <NavLink to="Schedule" className="flex button text-[9px] items-center px-2 py-2 text-sm font-semibold rounded transition-colors duration-700 hover:bg-blue-300">
            <img src={schedule} className="mr-3 h-5 w-5" alt="Schedule" />
            Schedule
          </NavLink>
          <NavLink to="Reporting" className="flex button text-[9px] items-center px-2 py-2 text-sm font-semibold rounded transition-colors duration-700 hover:bg-blue-300">
            <img src={report} className="mr-3 h-5 w-5" alt="Reports" />
            Reports
          </NavLink>
        </nav>
        <div className="flex pl-5 mb-10 cursor-pointer">
          <div className="text-[12px] pr-3 font-semibold hover:text-blue-300 transition-colors duration-700 text-white">
            Log Out
          </div>
          <div>
            <img src={right} className="mr-3 h-5 w-5" alt="Logout" />
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-sm shadow-gray-500 text-blue-400 p-4 fixed w-full z-50 flex justify-evenly items-center">
        <div className="flex items-center bg-white border border-gray-300 rounded-full px-3 py-1 shadow-sm w-full max-w-md">
      <AiOutlineSearch className="text-gray-500" />
      <input
        type="text"
        value={searchText}
        onChange={handleChange}
        placeholder="Search"
        className="flex-grow px-3 py-1  outline-none text-gray-700"
      />
      {searchText && (
        <button onClick={clearSearch} className="focus:outline-none">
          <AiOutlineClose className="text-gray-500" />
        </button>
      )}
    </div>
    <div className="flex items-center">
          <div className="flex">
            <img src={search} className='w-4 h-4' alt="" />
            <div className="text-[13px] ml-3 text-blue-400 font-semibold">Notification</div>
          </div>
          <div className="flex ml-10">
            <img src={profile} className='w-9 h-9' alt="" />
          </div>
          </div>
          <button className="md:hidden text-blue-400" onClick={toggleSidebar}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </header>
        <main className="flex-1 p-6 overflow-auto   mt-16 scrollbar-custom">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;



