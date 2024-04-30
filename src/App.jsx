import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import ConfettiBackground from "./ConfettiBackground";
import Modal from "./Modal";
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      console.log("loading");
      console.log("heppy birthday");
      setLoading(false);
    }, 4000);
  }, []);

  const handleImageClick = () => {
    setShowModal(true);
    console.log("sup");
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      {loading ? (
        <>
          <Loading />
          <ConfettiBackground />
        </>
      ) : (
        <div className="main">
          <img
            src="6.webp"
            alt=""
            className="glow-background"
            onClick={handleImageClick}
            loading="lazy"
          />
          <h1>Tap Me</h1>
          <ConfettiBackground />
        </div>
      )}
      {showModal && <Modal onClose={handleCloseModal} />}
    </div>
  );
};

export default App;

//Birthday
