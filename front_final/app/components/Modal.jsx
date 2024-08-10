import React from 'react';
import { useState } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
      onClick={handleBackdropClick}
    >
      <div className=" flex justify-center shadow-lg">
        {children}
      </div>
    </div>
  );
};

export default Modal;
