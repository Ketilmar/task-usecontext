import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Clicker } from "./components/clicker";
import SumPage from "./pages/sumPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Task - useContext</p>
      </header>
      <Clicker />
      {/* <SumPage /> */}
      {/* <Routes>
        <Route path="/sumpage" element={<SumPage />} />
      </Routes> */}
    </div>
  );
}

export default App;
