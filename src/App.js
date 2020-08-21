import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Contact from "./Contact";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/home">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Route exact path="/home" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/dashboard" component={Dashboard} />
      </BrowserRouter>
    </div>
  );
} // Component - Functional Component - Function only returns one element

export default App;
