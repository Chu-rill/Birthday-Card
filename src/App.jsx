import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      console.log("loading");
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
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
