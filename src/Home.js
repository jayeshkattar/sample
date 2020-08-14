import React, { Component } from "react"; // 16 - classes and Functions .. (>16.8)
import Contact from "./Contact";
import Dashboard from "./Dashboard";
import List from "./List";

class Home extends Component {
  // Container Component
  constructor(props) {
    super(props); // props is a keyword (props is an object)  which takes all the parameters
    this.state = {
      // state -> applicable only for class components
      data: "",
      name: "",
      stuName: "",
      students: ["Harshith", "Neelam", "Abdullah", "Ranjani"],
      employees: ["A", "B", "C"],
    };
    this.captureName = this.captureName.bind(this);
    this.addStudent = this.addStudent.bind(this);
  }

  // props -> If you need to pass data from parent component to child you can pass
  //             only through props

  // In React data flow only in one direction.  Parent -> Child

  captureName(event) {
    // document.getElementById('stName') => <input type="text" />
    // event.target
    this.setState({
      stuName: event.target.value,
    });
  } // If u use a arrow function => The function gets binded automatically

  addStudent() {
    let tempData = this.state.students;
    tempData.push(this.state.stuName);
    this.setState({
      students: tempData,
    }); //
  }

  render() {
    return (
      <div>
        {console.log("Rendered!")}
        <label>Enter the Student Name: </label>
        <input type="text" onChange={this.captureName} />
        <button onClick={this.addStudent}>ADD STUDENT</button>

        <List data={this.state.students} />
        <List data={this.state.employees} />

        {/* <input type="text" onChange={this.onChang} />
        <h3>{this.state.data}</h3>
        <h1>{this.props.nam}</h1>
        <Contact address={"indira nagar"} pin={"12345"} />
        <Contact address={"sags"} pin={"852"} />
        <Contact address={"abdcd"} pin={"88566"} />
        <Dashboard /> */}
      </div>
    );
  }
}

export default Home;
