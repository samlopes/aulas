import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Home</h1>
        <Link to="/dash">Dash</Link>
      </header>
    </div>
  );
}

export default App;
