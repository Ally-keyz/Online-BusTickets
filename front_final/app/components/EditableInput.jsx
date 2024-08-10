import React, { useState } from 'react';

function EditableInput({ initialValue }) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(initialValue);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    //  API call to save the data
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="flex items-center space-x-2">
      {isEditing ? (
        <>
          <input
            type="text"
            value={value}
            onChange={handleChange}
            className="px-2 py-1 border border-gray-300 rounded"
          />
          <button
            onClick={handleSaveClick}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Save
          </button>
        </>
      ) : (
        <>
          <span>{value}</span>
          <button
            onClick={handleEditClick}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          >
            Edit
          </button>
        </>
      )}
    </div>
  );
}

export default EditableInput;
