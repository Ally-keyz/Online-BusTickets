import React, { useState, useEffect } from 'react';
import history from '../assets/history.png';
import download from '../assets/download-2-32.png';

function Reporting() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await fetch('http://localhost:3000/getReportDownload/getDailyReports');
        if (response.ok) {
          const data = await response.json();
          setReports(data);
        } else {
          alert('Failed to fetch report data');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while fetching the report data');
      }
    };

    fetchReports();
  }, []);

  const handleDownload = async () => {
    setIsAnimating(true);
    try {
      const response = await fetch('http://localhost:3000/getReportDownload/download', {
        method: 'GET',
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Daily_Report.xlsx';
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.URL.revokeObjectURL(url);
        alert('Download Complete');
      } else {
        alert('Failed to download report');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while downloading the report');
    } finally {
      setIsAnimating(false);
    }
  };

  return (
    <>
      <div className='flex mt-5'>
        <div className="flex">
          <div className="h-4 w-1 bg-blue-400"></div>
          <div className="text-[10px] ml-1 text-blue-400 font-semibold">
            Daily Reports
          </div>
        </div>
      </div>
      {reports.length > 0 ? (
        reports.map((report, index) => (
          <div key={index} className="mt-5">
              <div className="flex mt-2 justify-center text-blue-400 text-[13px] font-semibold">
              Route: {report.route}
              </div>
            {report.dates.map((dateReport, dateIndex) => (<>
            
      <div key={dateIndex} className="flex justify-between border-b border-gray-300">
        <div className="flex">
        <img src={history} className='w-6 h-6 mt-5' alt="" />
        <div className="text-blue-400 text-[10px] font-bold mt-6 ml-2">Date: {dateReport.date}</div>
        </div>
       
        <div className="relative">
      <button
        onClick={handleDownload}
        className="flex"
        disabled={isAnimating}
      >
        <img src={download} className='w-5 h-5 mt-4' alt="" />
        <div className="text-blue-400 text-[10px] font-bold mt-6 ml-2">Download Report</div>
      </button>
      {isAnimating && (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="animate-rise bg-blue-500 w-3 h-3 rounded-full"></div>
        </div>
      )}
    </div>
       
      </div>
      <div key={dateIndex} className="sm:flex sm:flex-wrap sm:justify-around p-10 w-full mt-2 h-[490px] bg-blue-200 rounded-md shadow-sm shadow-gray-200">
      <div className="w-full sm:w-[1000px] overflow-auto  rounded-md h-96 bg-white scrollbar-custom">
            <div className="flex h-10 w-full sm:w-[960px] ml-0 sm:ml-9 justify-around border-b border-gray-400">
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Driver Name</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Car Plate</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Total passengers</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Total income</div>
            
            </div>
            {/*  This is the card where you are going to map the whole data  */}
            <div className="flex hover:bg-blue-50 transition-colors duration-500 h-10 w-full sm:w-[960px] ml-0 sm:ml-9 justify-around border-b border-gray-200">
            <div className="text-gray-500 text-[12px] font-semibold mt-3">{ dateReport.driverNam || "David"}</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">{dateReport.driverCarPlate || "RAC12D"}</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">{dateReport.seats}</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">{dateReport.totalCost.toFixed(2)} RW</div>
            </div>
            </div>
        </div>
        <div className="relative top-[-25px] cursor-pointer flex w-full justify-end pr-3  text-[13px] text-blue-400 ">Next</div>
              </> ))}
          </div>
        ))
      ) : (
        <div className="text-blue-400 flex justify-center text-center text-[12px] font-semibold mt-5">
          Loading...
        </div>
      )}
    </>
  );
}


export default Reporting;
