import React, { Component } from "react";

class Followers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName1: "",
      userName2: "",
      message: "",
    };
  }

  getUserName1 = (e) => {
    this.setState({
      userName1: e.target.value,
    });
  };

  getUserName2 = (e) => {
    this.setState({
      userName2: e.target.value,
    });
  };

  validate = () => {
    fetch(`https://api.github.com/users/${this.state.userName1}/followers`)
      .then((response) => response.json())
      .then((data) => {
        // 30 objects
        const filteredData = data.filter(function (object) {
          return object.login === this.state.userName2;
        });

        console.log(filteredData);

        filteredData.length > 0
          ? this.setState({
              message: `${this.state.userName2} is following ${this.state.userName1}`,
            })
          : this.setState({
              message: `${this.state.userName2} is not following ${this.state.userName1}`,
            });
      })
      .catch((error) => error);
  };

  render() {
    return (
      <div>
        <input type="text" id="userName1" onChange={this.getUserName1} />
        <input type="text" id="userName2" onChange={this.getUserName2} />
        <button onClick={this.validate}>VALIDATE</button>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default Followers;
