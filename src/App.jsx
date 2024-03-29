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
        <div>
          {/* Your main content when loading is finished */}
          <h1>Main Content</h1>
        </div>
      )}
    </div>
  );
};

export default App;
