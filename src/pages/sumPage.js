import React from "react";
import { TestContext } from "../components/clicker";

export default function SumPage() {
  // let value = useContext(TestContext);   // Dette er en måte å bruke context på
  return (
    <div className="sumpage">
      <p>SumPage</p>
      {/* dette er en annen måte å bruke context på */}
      <TestContext.Consumer>{(value) => value}</TestContext.Consumer>
    </div>
  );
}

// export { SumPage };
