import React, { Component } from "react";

export class eventBind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello",
    };
    // this.clickHandler = this.clickHandler.bind(this);  best option
  }

  //   clickHandler() {
  //     this.setState({
  //       message: "goodbye",
  //     });
  //     console.log(this);
  //   }

  clickHandler = () => {
    this.setState({
      message: "Goodbye",
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* <button onClick={this.clickHandler.bind(this)}>ClickMe</button> */}
        {/* <button onClick={() => this.clickHandler()}>ClickMe</button> */}
        <button onClick={this.clickHandler}>ClickMe</button>
      </div>
    );
  }
}

export default eventBind;
