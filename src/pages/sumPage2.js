import React, { useContext } from "react";
// import { Clicker } from "../components/clicker";
import { TestContext } from "../components/clicker";

export default function SumPage2() {
  // Dette er en måte å bruke context på
  // let value = useContext(TestContext);
  return (
    <div className="sum-body">
      <p>SumPage2</p>
      {/* <p>{value}</p> */}
      {/* dette er en annen måte å bruke context på */}
      <TestContext.Consumer>
        {/* {(value) => console.log(value)} */}
        {(value) => value}
      </TestContext.Consumer>
    </div>
  );
}
