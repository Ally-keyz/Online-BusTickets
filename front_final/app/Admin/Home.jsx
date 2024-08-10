import React, { useState, useEffect } from 'react';
import '../Admin/ripple.css';

function Home2() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => {
        if (prevCount < 300) {
          return prevCount + 1;
        } else {
          clearInterval(interval);
          return prevCount;
        }
      });
    }, 10);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount2(prevCount => {
        if (prevCount < 500) {
          return prevCount + 1;
        } else {
          clearInterval(interval);
          return prevCount;
        }
      });
    }, 10);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount3(prevCount => {
        if (prevCount < 400) {
          return prevCount + 1;
        } else {
          clearInterval(interval);
          return prevCount;
        }
      });
    }, 10);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount4(prevCount => {
        if (prevCount < 1000) {
          return prevCount + 1;
        } else {
          clearInterval(interval);
          return prevCount;
        }
      });
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex px-5 items-center text-[10px] w-full h-20 bg-blue-200 rounded-md shadow-sm shadow-gray-200">
        <img src="app/assets/pngegg (1).png" className='w-8 h-8' alt="" />
        <div className="text-[20px] ml-3 text-white font-bold">Volcano</div>
      </div>
      <div className="flex flex-wrap justify-around p-10 w-full mt-5 h-96 bg-blue-200 rounded-md shadow-sm shadow-gray-200">
        <div className="w-40 h-40 flex button cursor-pointer justify-center rounded-md items-center bg-blue-400 mb-4 sm:mb-0">
          <div>
            <div className="flex justify-center mb-1">
              <img src="app/assets/add-32.png" width={20} height={20} alt="" />
            </div>
            <div className="text-white text-[10px] font-semibold">Total week travels</div>
            <div className="flex justify-center text-[17px] mt-2 text-white font-semibold">
              {count}
            </div>
          </div>
        </div>
        <div className="w-40 h-40 flex button cursor-pointer justify-center rounded-md items-center bg-blue-400 mb-4 sm:mb-0">
          <div>
            <div className="flex justify-center mb-1">
              <img src="app/assets/add-32.png" width={20} height={20} alt="" />
            </div>
            <div className="text-white text-[10px] font-semibold">Total Agents</div>
            <div className="flex justify-center text-[17px] mt-2 text-white font-semibold">
              {count2}
            </div>
          </div>
        </div>
        <div className="w-40 h-40 flex button cursor-pointer justify-center rounded-md items-center bg-blue-400 mb-4 sm:mb-0">
          <div>
            <div className="flex justify-center mb-1">
              <img src="app/assets/add-32.png" width={20} height={20} alt="" />
            </div>
            <div className="text-white text-[10px] font-semibold">Total Drivers</div>
            <div className="flex justify-center text-[17px] mt-2 text-white font-semibold">
              {count3}
            </div>
          </div>
        </div>
        <div className="w-40 h-40 flex button cursor-pointer justify-center rounded-md items-center bg-blue-400">
          <div>
            <div className="flex justify-center mb-1">
              <img src="app/assets/add-32.png" width={20} height={20} alt="" />
            </div>
            <div className="text-white text-[10px] font-semibold">Total week Bookings</div>
            <div className="flex justify-center text-[17px] mt-2 text-white font-semibold">
              {count4}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home2;
