import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createContext } from "react";
import { RoutesFile } from "./routes";

// default value
const TestContext = createContext("test-context");

/** provides the click counter and links to pages */
const Clicker = () => {
  const [clicks, setClicks] = useState(0);

  return (
    <>
      <button onClick={() => setClicks(clicks + 1)}>Add</button>
      <Link to="/sumpage" onClick={() => setClicks(clicks + 1)}>
        {/* <h3>sumPage</h3> */}
        <button>sumPage</button>
      </Link>
      <Link to="/sumpage2" onClick={() => setClicks(clicks + 1)}>
        {/* <h3>sumPage2</h3> */}
        <button>sumPAge2</button>
      </Link>
      <TestContext.Provider value={clicks}>
        <RoutesFile />
      </TestContext.Provider>
    </>
  );
};

export { Clicker, TestContext };
