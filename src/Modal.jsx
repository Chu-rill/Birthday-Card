// Modal.js
import React, { useState, useEffect } from "react";

const Modal = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); // Set isVisible to true when the modal mounts
  }, []);

  const closeModal = () => {
    setIsVisible(false); // Set isVisible to false to trigger the transition
    onClose(); // Call the onClose function
  };
  return (
    <div className={`modal ${isVisible ? "active" : ""}`}>
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <img src="1.webp" alt="" id="cake" />
        <p>
          Happy birthday Seyiiiii You’re an amazing person and I feel so blessed
          to know you. I hope all your birthdays are great, all your years are
          full of adventures and that every dream you have will eventually
          become a reality.
          <br></br>
          <br></br>
          Cheers to forever being partners in crime 🥂
          <br></br>
          <br></br>
          Now stop being so annoying and send your account number to me 😊
        </p>
      </div>
    </div>
  );
};

export default Modal;
