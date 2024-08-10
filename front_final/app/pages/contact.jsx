import React from 'react'
import Form from '../components/Form'

function Contact() {
  return (
    <>
    <div className=" pl-5 w-full p-5 mt-10">
      <div className=" flex justify-start sm:pl-44 text-[15px] ml-5 font-semibold">Get in touch with us</div>
      <div className="sm:flex justify-center mt-5">
      <div className="w-72 h-80 shadow-lg mr-10 ">
        <div className="flex">
          <div className="pl-4 pt-3">
            <img src="app/assets/call.png" width={27} height={27} alt="" />
          </div>
          <div className="text-[12px] pt-5 pl-4 text-black font-semibold ">Call To Us</div>
        </div>
        <div className="text-[10px] pl-5 pt-5 font-semibold">
            We are available at 24/7 , 7 days a week
        </div>
        <div className="text-[10px] pl-5 pt-1 font-semibold">
            Phone +250793216191
        </div>
        <div className="text-[10px] h-0.5 w-56 bg-slate-500 mt-10 ml-5 font-semibold">
           </div>
           <div className="flex">
          <div className="pl-4 pt-3">
            <img src="app/assets/message.png" width={27} height={27} alt="" />
          </div>
          <div className="text-[12px] pt-5 pl-4 text-black font-semibold ">Write To Us</div>
        </div>
        <div className="text-[10px] pl-5 pt-5 font-semibold">
            Fill out our form and we will contact <br />
            you within 24 hours
        </div>
        <div className="text-[10px] pl-5 pt-1 font-semibold">
            Email: customer@etix.com
        </div>
        <div className="text-[10px] pl-5 pt-1 font-semibold">
            Email: surport@etix.com
        </div>
      </div>
      <Form />
      </div>
    </div>
   </>
  )
}

export default Contact