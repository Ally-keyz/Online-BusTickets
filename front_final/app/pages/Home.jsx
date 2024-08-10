import React from 'react'

function Home() {
  return (
    <>
      <div className=" w-full absolute  top-48  " >
        <div className="w-full  h-52  pl-5 sm:pl-36 ">
            <div className=" text-white font-semibold text-[20px]">
           <span className='mr-1 text-blue-400'>Travel faster</span>  than ever
           </div>
           <div className="  text-white font-semibold text-[20px]">
            You are now able to book a bus ticket wherever <br />
            you are at any time , Together no more delays <br />
           </div>
           <div className="  text-white mt-3 text-[12px]">
            In order to stay connected  you can download our app on app store or play store <br />
            Continue enjoying your journey by easier booking tickets, <br />
            easy payment and easy tracking of your journey
           </div>
           <div className="flex mt-5 ">
            <div className="text-center text-white  pt-1 mr-2  text-[11px] rounded cursor-pointer transition-colors duration-500 hover:bg-blue-400  w-24 h-7 bg-blue-600">
                Get app
            </div>
            <div className="text-center text-blue-600 pt-1  text-[11px] rounded cursor-pointer border transition-colors duration-500 hover:bg-white border-opacity-5  w-24 h-7 ">
                Learn more
            </div>
           </div>
        </div>
    </div>
    </>
  )
}

export default Home