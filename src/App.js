import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Clicker } from "./components/clicker";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Task - useContext</p>
      </header>

      <Clicker />
    </div>
  );
}

export default App;
