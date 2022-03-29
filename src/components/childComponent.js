import React, { Component } from "react";

export class childComponent extends Component {
  render() {
    return (
      <div>
        {/* <button onClick={this.props.greetHandler}>Greet Parent</button> */}
        <button onClick={() => this.props.greetHandler("child")}>
          Greet Parent
        </button>
      </div>
    );
  }
}

export default childComponent;
