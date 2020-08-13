import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

function NotFound() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>404 not found</h1>
        <Link to="/home">Home</Link>
      </header>
    </div>
  );
}

export default NotFound;
