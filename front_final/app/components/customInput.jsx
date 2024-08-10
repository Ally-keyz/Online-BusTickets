import React, { useState } from 'react';

const CustomInput = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setInputValue(option);
    setIsOpen(false);
  };

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onClick={() => setIsOpen(!isOpen)}
        className="block bg-blue-100 w-full px-12 py-3 text-[10px] text-gray-600 shadow-md rounded-lg  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        placeholder="Select Agency"
      />
      {isOpen && (
        <ul className="absolute z-10  bg-white border  rounded-md shadow-lg w-52 max-h-50 overflow-y-auto mt-1">
          {options
            .filter((option) => option.toLowerCase().includes(inputValue.toLowerCase()))
            .map((option, index) => (
              <li
                key={index}
                onClick={() => handleOptionClick(option)}
                className="px-3 text-[10px]  py-2 cursor-pointer hover:bg-gray-300 hover:text-white"
              >
                {option}
              </li>
            ))}
        </ul>
      )}
  </>
  );
};

export default CustomInput;