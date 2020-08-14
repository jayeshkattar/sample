import React, { Component } from "react";
import Contact from "./Contact";
import Dashboard from "./Dashboard";

class Home extends Component {
  constructor(props) {
    super(props); // props is a keyword (props is an object)  which takes all the parameters
    this.state = {
      data: "",
    };
  }

  // props -> If you need to pass data from parent component to child you can pass
  //             only through props

  // In React data flow only in one direction.  Parent -> Child

  onChang = (e) => {
    this.setState({
      data: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.onChang} />
        <h3>{this.state.data}</h3>
        <h1>{this.props.nam}</h1>
        <Contact address={"indira nagar"} pin={"12345"} />
        <Contact address={"sags"} pin={"852"} />
        <Contact address={"abdcd"} pin={"88566"} />
        <Dashboard />
      </div>
    );
  }
}

export default Home;
