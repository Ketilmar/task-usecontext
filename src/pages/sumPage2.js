import React from "react";
import { TestContext } from "../components/clicker";

export default function SumPage2() {
  // let value = useContext(TestContext); // Dette er en måte å bruke context på
  return (
    <div className="sumpage-2">
      <p>SumPage2</p>
      {/* dette er en annen måte å bruke context på */}
      <TestContext.Consumer>
        {/* {(value) => console.log(value)} */}
        {(value) => value}
      </TestContext.Consumer>
    </div>
  );
}
