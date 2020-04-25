import React, { Component } from "react";
import ReactDOM from "react-dom";

class Index extends Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState(() => {
      return {
        value
      };
    });
  }

  render() {
    return (
      <div>Hello React!</div>
    );
  }
}

export default Form;

const wrapper = document.getElementById('react-container');
wrapper ? ReactDOM.render(<Index />, wrapper) : false;
