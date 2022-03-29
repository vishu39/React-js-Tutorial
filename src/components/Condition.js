import React, { Component } from "react";

class Condition extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    //     if (this.state.isLoggedIn) {
    //       return <div>Welcome Vishu</div>;
    //     } else {
    //       return <div>Welcome Guest</div>;
    //     }
    //   }

    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Vishu</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }
    // return <div>{message}</div>;

    // return this.state.isLoggedIn ? (
    //   <div>Welcome Vishu</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );

    return this.state.isLoggedIn && <div>Welcome Vishu</div>;
  }
}
export default Condition;
