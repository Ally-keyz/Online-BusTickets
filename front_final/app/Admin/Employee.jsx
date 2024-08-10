import React, { useState, useEffect } from "react";
import "../Admin/custom-scrollbar.css";
import edit from "../assets/edit-button_6325975.png";
import remove from "../assets/trash_5949807.png";
import "../Admin/ripple.css";
import add from "../assets/add_10337420.png";
import Modal from "../components/Modal";
import CustomInput from "../components/customInput";

function Employee() {
  const options = ["Horizon", "Volcano", "Ritco"];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [workStation, setWorkStation] = useState("");
  const [Password, setPassword] = useState("");
  const [name2, setName2] = useState("");
  const [workStation2, setWorkStation2] = useState("");
  const [email2, setEmail2] = useState("");
  const [Carplate, setDriverCarPlate] = useState("");
  const [Password2, setPassword2] = useState("");
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [agents, setAgents] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [itemsPerPage] = useState(8);
  //editing(agent)
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [currentAgent, setCurrentAgent] = useState(null);
  //editing(driver)

  const [editDriverModalOpen, setEditDriverModalOpen] = useState(false);
  const [currentDriver, setCurrentDriver] = useState(null);

  // Modal handlers
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openModal2 = () => setOpen(true);
  const closeModal2 = () => setOpen(false);

  // Add agent
  const handleAddAgent = async (event) => {
    event.preventDefault();
    if (!email || !Password || !workStation || !name) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:3000/addAgents/agentRegister",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            agentName: name,
            agentEmail: email,
            agentPassword: Password,
            agentAgency: selectedOption,
            agentWorkStation: workStation,
          }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        alert("Agent added successfully");
        closeModal();
        setName("");
        setEmail("");
        setWorkStation("");
        setPassword("");
        handleFetchAgents();
      } else {
        alert(data.error || "Failed to add agent");
      }
    } catch (err) {
      console.log(err);
      alert("An error occurred while adding the agent");
    }
  };

  // Add driver(aple)
  const handleAddDriver = async (event) => {
    event.preventDefault();
    if (!Carplate || !name2 || !Password2) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/AddDrivers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          driverName: name2,
          driverCar: Carplate,
          driverPassword: Password2,
          driverAgency: selectedOption,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Driver added successfully");
        closeModal2();
        setName2("");
        setDriverCarPlate("");
        setPassword2("");
        handleFetchDrivers();
      } else {
        alert(data.error || "Failed to add driver");
      }
    } catch (err) {
      console.log(err);
      alert("An error occurred while adding the driver");
    }
  };

  // Fetch agents
  const handleFetchAgents = async () => {
    try {
      const response = await fetch("http://localhost:3000/addAgents/agents", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();
      if (response.ok) {
        setAgents(data.agents);
      } else {
        alert(data.error || "Failed to fetch agents");
      }
    } catch (err) {
      console.log(err);
      alert("An error occurred while fetching agents");
    }finally {
      setIsLoading(false);
    }
  };

  // Fetch drivers
  const handleFetchDrivers = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/driverAuth/getDrivers",
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = await response.json();
      if (response.ok) {
        setDrivers(data.getAlldrivers);
      } else {
        alert(data.error || "Failed to fetch drivers");
      }
    } catch (err) {
      console.log(err);
      alert("An error occurred while fetching drivers");
    }
  };

  // Delete agent
  const handleDeleteAgent = async (agentId) => {
    if (!agentId) {
      alert("Agent ID is required");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3000/addAgents/deleteAgent/${agentId}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = await response.json();
      if (response.ok) {
        alert("Agent deleted successfully");
        handleFetchAgents();
      } else {
        alert(data.error || "Failed to delete agent");
      }
    } catch (err) {
      console.error("An error occurred while deleting the agent:", err);
      alert("An error occurred while deleting the agent");
    }
  };

  //edit functionality
  const openEditModal = () => {
    setEditModalOpen(true);
  };

  const openEditDriverModal = () => {
    setEditDriverModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
    
    setCurrentAgent(null);
    setName("");
    setEmail("");
    setWorkStation("");
    setPassword("");
    setSelectedOption(options[0]);
  };

  const agentUpdateData = async (agentId) => {
    try {
      const response = await fetch(
        `http://localhost:3000/addAgents/agents/${agentId}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = await response.json();
      if (response.ok) {
        setCurrentAgent(data.agent);
        setName(data.agent.agentName || "");
        setEmail(data.agent.agentEmail || "");
        setWorkStation(data.agent.agentWorkStation || "");
        setPassword(data.agent.agentPassword || "");
        setSelectedOption(data.agent.agentAgency || options[0]);
        openEditModal();
      } else {
        alert(data.error || "Failed to fetch agent");
      }
    } catch (err) {
      console.log(err);
      alert("An error occurred while fetching agent");
    }
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    if (currentAgent) {
      handleEditAgent(currentAgent._id, {
        agentName: name,
        agentEmail: email,
        agentPassword: Password,
        agentWorkStation: workStation,
        agentAgency: selectedOption,
      });
    }
  };

  
  const handleEditAgent = async (agentId, updateData) => {
    if (!agentId) {
      alert("Agent ID is required");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3000/addAgents/UpdateAgent/${agentId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updateData),
        }
      );

      const data = await response.json();
      if (response.ok) {
        alert("Agent updated successfully");
        handleFetchAgents(); 
        closeEditModal();
      } else {
        alert(data.error || "Failed to update agent");
      }
    } catch (err) {
      console.error("An error occurred while updating the agent:", err);
      alert("An error occurred while updating the agent");
    }
  };



  const driverUpdateData = async (driverId) => {
    try {
      const response = await fetch(
        `http://localhost:3000/driverAuth/getDrivers/${driverId}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = await response.json();
      if (response.ok) {
        setCurrentDriver(data.getDriver);
        setName2(data.getDriver.driverName || "");
        setDriverCarPlate(data.getDriver.driverCar || "");
        setPassword2(data.getDriver.driverPassword || "");
        setSelectedOption(data.getDriver.driverAgency || options[0]);
        openEditDriverModal();
      } else {
        alert(data.error || "Failed to fetch driver");
      }
    } catch (err) {
      console.log(err);
      alert("An error occurred while fetching driver");
    }
  };

  
  const handleEditDriver = async (driverId, updateData) => {
    if (!driverId) {
      alert("Driver ID is required");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3000/driverAuth/updateDriver/${driverId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updateData),
        }
      );

      const data = await response.json();
      if (response.ok) {
        alert("Driver updated successfully");
        handleFetchDrivers(); 
        closeEditDriverModal(); 
      } else {
        alert(data.error || "Failed to update driver");
      }
    } catch (err) {
      console.error("An error occurred while updating the driver:", err);
      alert("An error occurred while updating the driver");
    }
  };

  
  const handleUpdateDriverSubmit = (e) => {
    e.preventDefault();
    if (currentDriver) {
      handleEditDriver(currentDriver._id, {
        driverName: name2,
        driverCar: Carplate,
        driverPassword: Password2,
        driverAgency: selectedOption,
      });
    }
  };


  const closeEditDriverModal = () => {
    setEditDriverModalOpen(false);
    setCurrentDriver(null);
    setName2("");
    setDriverCarPlate("");
    setPassword2("");
    setSelectedOption(options[0]);
  };

  const handleDeleteDriver = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:3000/driverAuth/deleteDriver/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        alert("The driver has been deleted successfully");

        handleFetchDrivers();
      } else {
        const errorText = await response.text();
        alert(errorText || "Failed to delete the driver");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while deleting the driver");
    }
  };

  useEffect(() => {
    handleFetchAgents();
    handleFetchDrivers();
  }, []);

  // Pagination logic for agents(alpe)
  const indexOfLastAgent = currentPage * itemsPerPage;
  const indexOfFirstAgent = indexOfLastAgent - itemsPerPage;
  const currentAgents = agents.slice(indexOfFirstAgent, indexOfLastAgent);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="flex justify-end">
        <div
          onClick={openModal}
          className="flex mb-1 mr-20 button cursor-pointer"
        >
          <img src={add} className="w-5 h-5" alt="Add" />
          <div className="text-[10px] mt-1 ml-2 font-semibold text-blue-300">
            Add Agent
          </div>
        </div>
        <div
          onClick={openModal2}
          className="flex justify-end mb-1 mr-24 button cursor-pointer"
        >
          <img src={add} className="w-5 h-5" alt="Add" />
          <div className="text-[10px] mt-1 ml-2 font-semibold text-blue-300">
            Add Driver
          </div>
        </div>
      </div>
      <div className="flex mt-5">
        <div className="flex">
          <div className="h-4 w-1 bg-blue-400"></div>
          <div className="text-[10px] ml-1 text-blue-400 font-semibold">
            Agents and their work station
          </div>
        </div>
      </div>
      <div className="sm:flex sm:flex-wrap sm:justify-around p-10 w-full mt-2 h-[1000px] sm:h-[490px] bg-blue-200 rounded-md shadow-sm shadow-gray-200">
        <div className="w-full sm:w-auto mb-4 sm:mb-0">
          <div className="flex justify-center text-[20px] text-white font-bold mb-2">
            Agents
          </div>
          <div className="w-full sm:w-[450px] rounded-md h-96 bg-white scrollbar-custom">
            <div className="flex h-10 w-full sm:w-[410px] ml-0 sm:ml-9 justify-around border-b border-gray-400">
              <div className="text-gray-500 text-[12px] font-semibold mt-3">
                Name
              </div>
              <div className="text-gray-500 text-[12px] font-semibold mt-3">
                Work Station
              </div>
              <div className="text-gray-500 text-[12px] font-semibold mt-3">
                Remove
              </div>
              <div className="text-gray-500 text-[12px] font-semibold mt-3">
                Edit
              </div>
            </div>
            {isLoading ? (
              <div className="text-center text-blue-400 text-[12px] font-semibold mt-5">
                Loading...
              </div>
            ):
            currentAgents.map((agent) => (
              <div
                key={agent.id}
                className="flex hover:bg-blue-50 transition-colors h-14 w-full sm:w-[410px] items-center justify-around border-b border-gray-200"
              >
                <div className="text-gray-500 text-[12px] font-semibold mt-3">
                  {agent.agentName}
                </div>
                <div className="text-gray-500 text-[12px] font-semibold mt-3">
                  {agent.agentWorkStation}
                </div>
                <div
                  onClick={() => handleDeleteAgent(agent._id)}
                  className="cursor-pointer"
                >
                  <img src={remove} className="w-5 h-5" alt="Delete" />
                </div>
                <div
                  onClick={() => agentUpdateData(agent._id)}
                  className="cursor-pointer"
                >
                  <img src={edit} className="w-5 h-5" alt="Edit" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full sm:w-auto mb-4 sm:mb-0">
          <div className="flex justify-center text-[20px] text-white font-bold mb-2">
            Drivers
          </div>
          <div className="w-full sm:w-[450px] rounded-md h-96 bg-white scrollbar-custom">
            <div className="flex h-10 w-full sm:w-[410px] ml-0 sm:ml-9 justify-around border-b border-gray-400">
              <div className="text-gray-500 text-[12px] font-semibold mt-3">
                Name
              </div>
              <div className="text-gray-500 text-[12px] font-semibold mt-3">
                Vehicle Plate
              </div>
              <div className="text-gray-500 text-[12px] font-semibold mt-3">
                Remove
              </div>
              <div className="text-gray-500 text-[12px] font-semibold mt-3">
                Edit
              </div>
            </div>
            {
              isLoading ? (
                <div className="text-center text-blue-400 text-[12px] font-semibold mt-5">
                  Loading...
                </div>
              ):
            drivers.map((driver) => (
              <div
                key={driver._id}
                className="flex hover:bg-blue-50 transition-colors h-14 w-full sm:w-[410px] items-center justify-around border-b border-gray-200"
              >
                <div className="text-gray-500 text-[12px] font-semibold mt-3">
                  {driver.driverName}
                </div>
                <div className="text-gray-500 text-[12px] font-semibold mt-3">
                  {driver.driverCar}
                </div>
                <div
                  onClick={() => handleDeleteDriver(driver._id)}
                  className="cursor-pointer"
                >
                  <img src={remove} className="w-5 h-5" alt="Delete" />
                </div>
                <div
                  onClick={() => driverUpdateData(driver._id)}
                  className="cursor-pointer"
                >
                  <img src={edit} className="w-5 h-5" alt="Edit" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {isModalOpen && (
  <Modal isOpen={isModalOpen} onClose={closeModal}>
    <div className="flex bg-white rounded-lg shadow-xl w-[420px] h-96">
      <div className="flex justify-center items-center w-[150px] bg-blue-400">
        <div className="text-[12px] font-bold text-white">Add Agent</div>
      </div>
      <div className="pl-10">
        <div className="mt-5 ml-20 mb-10 text-[20px] text-blue-400 font-bold">ETIX</div>
        <form onSubmit={handleAddAgent}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block w-full px-12 py-2 text-[10px] text-gray-600 shadow-md rounded-lg mt-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Name"
          />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full px-12 py-2 text-[10px] text-gray-600 shadow-md rounded-lg mt-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Email"
          />
          <input
            type="text"
            value={workStation}
            onChange={(e) => setWorkStation(e.target.value)}
            className="block w-full px-12 py-2 text-[10px] text-gray-600 shadow-md rounded-lg mt-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Work Station"
          />
          <input
            type="password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full px-12 py-2 text-[10px] text-gray-600 shadow-md rounded-lg mt-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Password"
          />
          <div className="text-center text-white bg-blue-400 pt-1 mt-16 text-[11px] font-semibold rounded cursor-pointer border transition-colors duration-500 hover:bg-blue-200 border-opacity-5 w-52 h-7">
            <button type="submit" className="w-full h-full">Register</button>
          </div>
        </form>
      </div>
    </div>
  </Modal>
)}
      {open && (
        <Modal  isOpen={open} onClose={closeModal2}>
          <div className="flex  bg-white rounded-lg shadow-xl  w-[420px] h-96  ">
            <div className="flex justify-center items-center w-[150px]  bg-blue-400">
              <div className="text-[12px] font-bold text-white">Add Driver</div>
            </div>
            <div className="pl-10">
              <div className=" mt-5 ml-20 mb-10 text-[20px]  text-blue-400 font-bold">
                ETIX
              </div>
              <form onSubmit={handleAddDriver}>
                <input
                  type="text"
                  value={name2}
                  onChange={(e) => setName2(e.target.value)}
                  className="block w-full px-12 py-2 text-[10px] text-gray-600 shadow-md rounded-lg mt-2  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Driver Name"
                />
                <input
                  type="text"
                  value={Carplate}
                  onChange={(e) => setDriverCarPlate(e.target.value)}
                  className="block w-full px-12 py-2 text-[10px] text-gray-600 shadow-md rounded-lg mt-2  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Driver Car plate"
                />
                <input
                  type="text"
                  value={workStation2}
                  onChange={(e) => setWorkStation2(e.target.value)}
                  className="block w-full px-12 py-2 text-[10px] text-gray-600 shadow-md rounded-lg mt-2  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Driver's Workstation"
                />
                <input
                  type="password"
                  value={Password2}
                  onChange={(e) => setPassword2(e.target.value)}
                  className="block w-full px-12 py-2 text-[10px] text-gray-600 shadow-md rounded-lg mt-2  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Password"
                />
               <div className="text-center text-white bg-blue-400 pt-1 mt-16 text-[11px] font-semibold rounded cursor-pointer border transition-colors duration-500 hover:bg-blue-200 border-opacity-5 w-52 h-7">
            <button type="submit" className="w-full h-full">Register</button>
          </div>
              </form>
            </div>
          </div>
        </Modal>
      )}

     
      <div className="flex justify-center mt-4">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 mx-1 button bg-gray-600 hover:bg-slate-800 transition-colors duration-700 cursor-pointer text-[12px] text-white rounded"
        >
          Previous
        </button>
        <span className="p-2 text-[10px]">Page {currentPage}</span>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastAgent >= agents.length}
          className="p-2 text-[12px] button hover:bg-slate-800 cursor-pointer transition-colors duration-700 mx-1 bg-black text-white rounded"
        >
          Next
        </button>
      </div>

  
      {editModalOpen && (
        <Modal
          title="Edit Agent"
          isOpen={editModalOpen}
          onClose={closeEditModal}
          onSubmit={handleUpdateSubmit}
          style={{
            width: "40rem",
            height: "40rem",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div className="flex bg-white rounded-lg shadow-xl w-[420px] h-96">
          <div className="flex justify-center items-center w-[150px] bg-blue-400">
        <div className="text-[17px] font-bold text-white">Edit Agent</div>
      </div>
      <div className="pl-5 mt-10">
            <input
              className="block w-full px-12 py-2 text-[10px] bg-blue-200 text-gray-600 shadow-md rounded-lg mt-2  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Agent Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
               className="block w-full px-12 py-2 text-[10px] bg-blue-200 text-gray-600 shadow-md rounded-lg mt-2  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Agent Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
               className="block w-full px-12 py-2 text-[10px] bg-blue-200 text-gray-600 shadow-md rounded-lg mt-2  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Work Station"
              value={workStation}
              onChange={(e) => setWorkStation(e.target.value)}
            />
            <input
              className="block w-full px-12 py-2 text-[10px] bg-blue-200 text-gray-600 shadow-md rounded-lg mt-2  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="password"
              type="text"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <select
               className="block w-full px-12 py-2 text-[10px] bg-blue-200 text-gray-600 shadow-md rounded-lg mt-2  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button
              type="submit"
              onClick={handleUpdateSubmit}
             className="text-center text-white bg-blue-400 pt-1 mt-16 text-[11px] font-semibold rounded cursor-pointer border transition-colors duration-500 hover:bg-blue-200 border-opacity-5 w-52 h-7"
            >
              Save
            </button>
          </div>
          </div>
          </div>
        </Modal>
      )}

     

      {editDriverModalOpen && (
        <Modal isOpen={editDriverModalOpen} onClose={closeEditDriverModal}>
          <div className="flex bg-white rounded-lg shadow-xl w-[420px] h-96">
          <div className="flex justify-center items-center w-[150px] bg-blue-400">
        <div className="text-[17px] font-bold text-white">Edit Driver</div>
      </div>
          <form
            onSubmit={handleUpdateDriverSubmit}
            className="pl-5 mt-10"
          >
            <input
              label="Name"
               className="block w-full px-12 py-2 text-[10px] bg-blue-200 text-gray-600 shadow-md rounded-lg mt-2  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={name2}
              onChange={(e) => setName2(e.target.value)}
              required
            />
            <input
              label="Vehicle Plate"
               className="block w-full px-12 py-2 text-[10px] bg-blue-200 text-gray-600 shadow-md rounded-lg mt-2  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={Carplate}
              onChange={(e) => setDriverCarPlate(e.target.value)}
              required
            />
            <input
              label="Password"
               className="block w-full px-12 py-2 text-[10px] bg-blue-200 text-gray-600 shadow-md rounded-lg mt-2  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              type="text"
              value={Password2}
              onChange={(e) => setPassword2(e.target.value)}
              required
            />
             <select
                value={selectedOption}
                 className="block w-full px-12 py-2 text-[10px] bg-blue-200 text-gray-600 shadow-md rounded-lg mt-2  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                onChange={(e) => setSelectedOption(e.target.value)}
                
              >
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            <button
              type="submit"
              className="text-center text-white bg-blue-400 pt-1 mt-16 text-[11px] font-semibold rounded cursor-pointer border transition-colors duration-500 hover:bg-blue-200 border-opacity-5 w-52 h-7" 
            >
              Update Driver
            </button>
          </form>
          </div>
        </Modal>
      )}
    </>
  );
}

export default Employee;
