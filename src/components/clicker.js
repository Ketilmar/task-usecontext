import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createContext } from "react";
import SumPage from "../pages/sumPage";
import SumPage2 from "../pages/sumPage2";
import { Routes, Route } from "react-router-dom";

// default value
const TestContext = createContext("test-context");

const Clicker = () => {
  const [clicks, setClicks] = useState(0);

  return (
    <>
      <button onClick={() => setClicks(clicks + 1)}>Add</button>
      <Link to="/sumpage" onClick={() => setClicks(clicks + 1)}>
        <h3>sumPage</h3>
      </Link>
      <Link to="/sumpage2" onClick={() => setClicks(clicks + 1)}>
        <h3>sumPage2</h3>
      </Link>
      <TestContext.Provider value={clicks}>
        {/* <SumPage /> */}
        <Routes>
          <Route path="/sumpage" element={<SumPage />} />
          <Route path="/sumpage2" element={<SumPage2 />} />
        </Routes>
      </TestContext.Provider>
    </>
  );
};

export { Clicker, TestContext };
