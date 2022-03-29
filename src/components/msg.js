import React, { Component } from "react";

class Msg extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome Visitor",
    };
  }
  changeMsg() {
    this.setState({
      message: "Thanks for Subscribing",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMsg()}>Subscribe</button>
      </div>
    );
  }
}
export default Msg;
