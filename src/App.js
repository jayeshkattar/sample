import React from "react";
import "./App.css";
import Home from "./Home";

function App() {
  const name = "Jayesh";
  return (
    <div className="App">
      <h1>Hello, World</h1>
      <Home nam={name} />
    </div>
  );
} // Component - Functional Component - Function only returns one element

export default App;
