import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import ConfettiBackground from "./ConfettiBackground";
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      console.log("loading");
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div>
      {loading ? (
        <>
          <Loading />
          <ConfettiBackground />
        </>
      ) : (
        <div className="main">
          {/* Your main content when loading is finished */}
          <img src="./public/img/2.webp" alt="" className="glow-background" />
          <ConfettiBackground />
        </div>
      )}
    </div>
  );
};

export default App;
