import React from "react";
import "./App.css";

function Contact(props) {
  return (
    <div className="Contact">
      <h1>{props.address}</h1>
      <h1>{props.pin}</h1>
    </div>
  );
} // Component - Functional Component - Function only returns one element

export default Contact;
