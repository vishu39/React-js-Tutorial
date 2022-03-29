import React, { Component } from "react";

class Count extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  //   setState 2 function callBack function
  changeCount() {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log(this.state.count);
    //   }
    // );

    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  incrementFive() {
    this.changeCount();
    this.changeCount();
    this.changeCount();
    this.changeCount();
    this.changeCount();
  }

  render() {
    return (
      <div>
        <h1>Count-{this.state.count}</h1>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    );
  }
}
export default Count;
