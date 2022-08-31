import React, { useState } from "react";

const Clicker = () => {
  const [clicks, setClicks] = useState(0);

  return <button onClick={() => setClicks(clicks + 1)}>Add</button>;
};

export { Clicker };
