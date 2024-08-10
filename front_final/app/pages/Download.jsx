import React from 'react'

function Download() {
  return (
    <div className='flex justify-evenly mt-3 pl-5  p-5'>
       <div className="">
       <div className=" text-black mb-3 font-bold text-[14px]">
           Download our app
           </div>
           <div className="text-black text-[11px]">
            Do you you want to travel faster and avoid stress you have been running through while buying bus tickets ?<br className='hidden md:flex' />
            ETIX have brought you a solution , you can now book ticket any where you are at any time <br className='hidden md:flex' />
            All you need is to download our app on app store or google play store.
            Download now
           </div>
           <div className="flex sm:mt-5 mt-1">
            <div className="  mr-2   cursor-pointer ">
                <img src="app/assets/google-play-6647242_1280.png" width={85} height={50} alt="" />
            </div>
            <div className="  pt-1    cursor-pointer   w-24 h-7 ">
                <img src="app/assets/pngwing.com (1).png" width={100} height={50} alt="" />
            </div>
           </div>
       </div>
       <div className="sm:mr-24">
        <img src="app/assets/undraw_download_re_li50 1.png"  className='sm:h-56  sm:w-60' alt="" />
       </div>
    </div>
  )
}

export default Download