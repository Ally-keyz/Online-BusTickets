import React from 'react'
import { useState } from 'react';
import Modal from '../components/Modal';

function About() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);


  return (
      <>
       <div className=" w-full p-5 mt-16" >
        <div className="w-full text-center">
        <div className="text-[12px] text-gray-800 font-semibold">
            We've partnered with Rwandan's most popular bus companies 
        </div>
        <div className="flex justify-center p-5 mt-3">
         <div  onClick={openModal} className="w-56 flex justify-center cursor-pointer rounded-es-md h-20 animate-flicker animate-grow bg-white rounded shadow-sm shadow-gray-500 mr-7">
            <img src="app/assets/company1.png" width={100} alt="" />
         </div>
         <div  onClick={openModal} className="w-64 flex justify-center cursor-pointer animate-flicker animate-grow h-20 bg-white rounded shadow-sm shadow-gray-500 mr-7">
            <img src="app/assets/company2.png" alt="" width={100}  />
         </div>
         <div  onClick={openModal} className="w-64 flex justify-center cursor-pointer animate-flicker animate-grow h-20 bg-white rounded shadow-sm shadow-gray-500 mr-7">
            <img src="app/assets/company3.png" alt="" width={100}  />
         </div>
         <div  onClick={openModal} className="w-64 flex justify-center cursor-pointer animate-flicker animate-grow h-20 bg-white rounded shadow-sm shadow-gray-500 mr-7">
            <img src="app/assets/company4.png" alt="" width={100}  />
         </div>
        </div>
        <div className="flex justify-center">
        <div  onClick={openModal} className="w-64 flex justify-center cursor-pointer animate-flicker animate-grow h-20 bg-white rounded shadow-sm shadow-gray-500 mr-7">
            <img src="app/assets/company5.png" alt="" width={100}  />
        </div>
        <div  onClick={openModal} className="w-64 flex justify-center cursor-pointer animate-flicker animate-grow h-20 bg-white rounded shadow-sm shadow-gray-500 mr-7">
            <img src="app/assets/company6.png" width={100} alt="" />
        </div>
        </div>
        </div>
       <div className="p-10 mt-14 flex justify-around">
        <div className="">
        <div className="text-[15px] font-bold">Who we are</div>
        <div className="text-[10px] mt-5">
        We are innovative and creative Rwandan intreprenures <br />
        whose main goal is to make Rwanda's transportation <br />
        one of the most fast and well organised transportation in africa <br />
        and beyond 
        </div>
        </div>
        <div className="">
            <img src="app/assets/bg.png" width={190} height={200} alt="" />
        </div>
       <div className="">
        <div className="text-[15px] font-bold">Our mission</div>
        <div className="text-[10px] mt-5">
        To develop an organised ,easy , faster and creative <br />
        transportation system in Rwanda towards making it <br />
        one of the most fast and well organised transportation in africa <br />
        and beyond 
        </div>
       </div>
       </div>                                            
       <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="w-[420px] h-72 bg-white rounded-md">
       <video width="500" controls>
          <source src="app/assets/vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="flex justify-center align-middle p-5">
        <div onClick={closeModal} className="text-center text-white  pt-1 mr-2  text-[11px] rounded cursor-pointer transition-colors duration-500 hover:bg-blue-400  w-24 h-7 bg-blue-600">
                Close
            </div>
            </div>
            </div>
      </Modal>
    </div>
    </>
  )
}

export default About