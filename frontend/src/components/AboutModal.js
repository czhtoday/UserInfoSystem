import React, { useState } from 'react';
import './AboutModal.css';

function AboutModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="aboutButton" onClick={() => setIsOpen(true)}>About</button>
      {isOpen && (
        <div className="modal">
          <button className="closeButton" onClick={() => setIsOpen(false)}>X</button>
          <p>This system is designed to manage participants efficiently...</p>
          <button className="closeButton" onClick={() => setIsOpen(false)}>Close</button>
        </div>
      )}
    </>
  );
}

export default AboutModal;
