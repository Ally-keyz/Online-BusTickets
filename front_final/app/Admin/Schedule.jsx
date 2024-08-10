import React, { useState, useEffect } from "react";
import add from "../assets/add_10337420.png";
import upload from "../assets/upload-1-17-32.png";
import edit from "../assets/edit-button_6325975.png";
import remove from "../assets/trash_5949807.png";
import Modal from "../components/Modal";

function Schedule() {
  const [open, setOpen] = useState(false);
  const[open2,setOpen2] = useState(false);
  const [file, setFile] = useState(null);
  const [schedules, setSchedules] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editSchedule, setEditSchedule] = useState(null); // State for holding schedule to edit
  const [editModalOpen, setEditModalOpen] = useState(false);

  const closeModal2 = () => setOpen(false);
  const openModal2 = () => setOpen(true);
  const openModal3 = () => setOpen2(true);
  const closeEditModal = () => {
    setEditModalOpen(false);
    setEditSchedule(null);
  };
  const openEditModal = (schedule) => {
    setEditSchedule(schedule);
    setEditModalOpen(true);
  };

  const handleFileChange = (event) => {
    alert("Please upload a PDF file.");
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file before uploading.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(
        "http://localhost:3000/uploadTicketScheduleFile/api/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const result = await response.json();
        alert(result.message || "File uploaded successfully.");
        fetchSchedules();
        setFile(null);
      } else {
        const errorText = await response.text();
        alert(`File upload failed: ${errorText}`);
      }
    } catch (error) {
      alert(`Error uploading file: ${error.message}`);
    }
  };

  const fetchSchedules = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/tickeschedule/find/getSchedules"
      );
      if (response.ok) {
        const data = await response.json();
        setSchedules(data);
      } else {
        alert("Failed to fetch schedules");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while fetching the schedules");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this schedule?")) {
      console.log(id)
      try {
        const response = await fetch(`http://localhost:3000/tickeschedule/find/deleteSchedule/${id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          alert("Schedule deleted successfully.");
          fetchSchedules(); // Refresh the list
        } else {
          alert("Failed to delete schedule.");
        }
      } catch (error) {
        alert(`Error deleting schedule: ${error.message}`);
      }
    }
  };

  const handleUpdate = async () => {
    if (!editSchedule) {
      alert("No schedule selected for update.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/tickeschedule/update/${editSchedule._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editSchedule),
      });

      if (response.ok) {
        const result = await response.json();
        alert(result.message || "Schedule updated successfully.");
        closeEditModal();
        fetchSchedules(); // Refresh the list
      } else {
        alert("Failed to update schedule.");
      }
    } catch (error) {
      alert(`Error updating schedule: ${error.message}`);
    }
  };
  const handleAddSchedule = async()=>{

  }

  useEffect(() => {
    fetchSchedules();
  }, []);

  return (
    <>
      <div className="flex justify-end">
        <div onClick={openModal2} className="flex mb-1 mr-20 button cursor-pointer">
          <img src={upload} className="w-5 h-5" alt="Upload" />
          <div
            
            className="text-[10px] mt-1 ml-2 font-semibold text-blue-300"
          >
            Upload Schedule
          </div>
        </div>
        <div onClick={openModal3} className="flex button justify-end mb-1 mr-24 button cursor-pointer ">
          <img src={add} className='w-5 h-5' alt="Add" />
          <div className="text-[10px] mt-1 ml-2 font-semibold text-blue-300">Add Schedule</div>
        </div>
      </div>

      <div className="flex mt-5">
        <div className="flex">
          <div className="h-4 w-1 bg-blue-400"></div>
          <div className="text-[10px] ml-1 text-blue-400 font-semibold">
            Today's schedules
          </div>
        </div>
      </div>

      <div className="flex mt-2 justify-center text-blue-400 text-[13px] font-semibold">
        Northern province travels
      </div>
      <div className="sm:flex sm:flex-wrap sm:justify-around p-10 w-full mt-2 h-[490px] bg-blue-200 rounded-md shadow-sm shadow-gray-200">
        <div className="w-full sm:w-auto mb-4 sm:mb-0">
          <div className="w-full sm:w-[1010px] overflow-auto rounded-md h-96 bg-white scrollbar-custom">
            <div className="flex h-10 w-full sm:w-[960px] ml-0 sm:ml-9 justify-around border-b border-gray-400">
              <div className="text-gray-500 text-[12px] font-semibold mt-3">
                Driver Name
              </div>
              <div className="text-gray-500 text-[12px] font-semibold mt-3">
                Car Plate
              </div>
              <div className="text-gray-500 text-[12px] font-semibold mt-3">
                Origin
              </div>
              <div className="text-gray-500 text-[12px] font-semibold mt-3">
                Destination
              </div>
              <div className="text-gray-500 text-[12px] font-semibold mt-3">
                Seats Available
              </div>
              <div className="text-gray-500 text-[12px] font-semibold mt-3">
                Cost
              </div>
              <div className="text-gray-500 text-[12px] font-semibold mt-3">
                Edit
              </div>
              <div className="text-gray-500 text-[12px] font-semibold mt-3">
                Remove
              </div>
            </div>
            {isLoading ? (
              <div className="text-center text-blue-400 text-[12px] font-semibold mt-5">
                Loading...
              </div>
            ) : schedules.length > 0 ? (
              schedules.map((schedule, index) => {
                const [origin, destination] = (
                  schedule.route || "Unknown - Unknown"
                ).split(" - ");

                return (
                  <div
                    key={index}
                    className="flex hover:bg-blue-50 transition-colors duration-500 h-10 w-full sm:w-[960px] ml-0 sm:ml-9 justify-around border-b border-gray-200"
                  >
                    <div className="text-gray-500 text-[12px] font-semibold mt-3">
                      {schedule.driverName || "John"}
                    </div>
                    <div className="text-gray-500 text-[12px] font-semibold mt-3">
                      {schedule.driverCarPlate || "RAC 128C"}
                    </div>
                    <div className="text-gray-500 text-[12px] font-semibold mt-3">
                      {origin}
                    </div>
                    <div className="text-gray-500 text-[12px] font-semibold mt-3">
                      {destination}
                    </div>
                    <div className="text-gray-500 text-[12px] font-semibold mt-3">
                      {schedule.availableSeats || "Unknown"}/30
                    </div>
                    <div className="text-gray-500 text-[12px] font-semibold mt-3">
                      {schedule.totalCost?.toFixed(2) || "0.00"} RwF
                    </div>
                    <div
                      className="text-gray-500 text-[12px] font-semibold mt-2 cursor-pointer"
                      onClick={() => openEditModal(schedule)}
                    >
                      <img src={edit} className="w-7 h-7" alt="Edit" />
                    </div>
                    <div
                      className="text-gray-500 text-[12px] font-semibold mt-2 cursor-pointer"
                      onClick={() => handleDelete(schedule.id)}
                    >
                      <img src={remove} className="w-7 h-7" alt="Remove" />
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center text-blue-400 text-[12px] font-semibold mt-5">
                No schedules available
              </div>
            )}
          </div>
        </div>
      </div>
      

      {/* Upload Modal */}
      <Modal isOpen={open} onClose={closeModal2}>
        <div className="flex justify-center bg-white rounded w-full flex-col items-center p-4">
          <h2 className="font-semibold text-[15px] mb-4">Upload Ticket Schedule</h2>
          <input
            type="file"
             className="block mb-4 bg-black w-64 cursor-pointer px-12 py-2 text-[10px] text-gray-600 shadow-md rounded-lg mt-2  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            onChange={handleFileChange}
            
          />
          <div className=" flex">
          <div onClick={handleUpload} className="text-center text-white bg-blue-400 pt-1 mt-16 text-[11px] font-semibold rounded cursor-pointer border transition-colors duration-500 hover:bg-blue-200 border-opacity-5 w-32 h-7">
            <button type="submit" className="w-full h-full">Upload</button>
          </div>
          <div onClick={closeModal2} className="text-center text-white bg-red-500 pt-1 mt-16 text-[11px] font-semibold rounded cursor-pointer border transition-colors duration-500 hover:bg-blue-200 border-opacity-5 w-32 h-7">
            <button type="submit" className="w-full h-full">cancle</button>
          </div>
          </div>
        </div>
      </Modal>

      {/* Edit Modal */}
      {editModalOpen && (
        <Modal isOpen={editModalOpen} onClose={closeEditModal}>
          <div className="flex bg-white w-96 rounded justify-center items-center flex-col p-4">
            <h2 className=" font-semibold text-[13px] mb-4">Edit Schedule</h2>
            {/* Example Input Fields for Editing Schedule */}
            <input
              type="text"
              value={editSchedule.driverName}
              onChange={(e) => setEditSchedule({ ...editSchedule, driverName: e.target.value })}
              className="block w-full px-12 py-2 text-[10px] bg-blue-200 text-gray-600 shadow-md rounded-lg mt-2  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Driver Name"
            />
            <input
              type="text"
              value={editSchedule.driverCarPlate}
              onChange={(e) => setEditSchedule({ ...editSchedule, driverCarPlate: e.target.value })}
              className="block w-full px-12 py-2 text-[10px] bg-blue-200 text-gray-600 shadow-md rounded-lg mt-2  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Car Plate"
            />
            <input
              type="text"
              value={editSchedule.route}
              onChange={(e) => setEditSchedule({ ...editSchedule, route: e.target.value })}
              className="block w-full px-12 py-2 text-[10px] bg-blue-200 text-gray-600 shadow-md rounded-lg mt-2  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Route"
            />
            <input
              type="number"
              value={editSchedule.availableSeats}
              onChange={(e) => setEditSchedule({ ...editSchedule, availableSeats: e.target.value })}
              className="block w-full px-12 py-2 text-[10px] bg-blue-200 text-gray-600 shadow-md rounded-lg mt-2  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Available Seats"
            />
            <input
              type="number"
              value={editSchedule.totalCost}
              onChange={(e) => setEditSchedule({ ...editSchedule, totalCost: e.target.value })}
              className="block w-full px-12 py-2 text-[10px] bg-blue-200 text-gray-600 shadow-md rounded-lg mt-2  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Cost"
            />
           <div className=" flex">
          <div onClick={handleUpdate} className="text-center text-white mr-3 bg-blue-400 pt-1 mt-16 text-[11px] font-semibold rounded cursor-pointer border transition-colors duration-500 hover:bg-blue-200 border-opacity-5 w-32 h-7">
            <button type="submit" className="w-full h-full">Update</button>
          </div>
          <div onClick={closeEditModal} className="text-center text-white bg-red-500 pt-1 mt-16 text-[11px] font-semibold rounded cursor-pointer border transition-colors duration-500 hover:bg-blue-200 border-opacity-5 w-32 h-7">
            <button type="submit" className="w-full h-full">cancle</button>
          </div>
          </div>
          </div>
        </Modal>
      )}
    </>
  );
}

export default Schedule;
