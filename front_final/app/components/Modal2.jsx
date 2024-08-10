import React from "react";

function Modal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg shadow-lg w-1/3">
        <h2 className="text-xl font-semibold mb-4">Upload Ticket Schedule</h2>
        <input type="file" onChange={handleFileChange} className="mb-4" />
        <button onClick={handleUpload} className="bg-blue-400 text-white py-2 px-4 rounded">
          Upload
        </button>
        <button onClick={onClose} className="bg-gray-400 text-white py-2 px-4 rounded ml-2">
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
