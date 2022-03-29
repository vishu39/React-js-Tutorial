import React from "react";

const Hello = () => {
  //  jsx method
  //   return (
  //     <div className='dummy>
  //       <h1>Hello Vishu</h1>
  //     </div>
  //   );
  return React.createElement(
    "div",
    { id: "hello", className: "dummy" },
    React.createElement("h1", null, "Hello Vishu")
  );
};

export default Hello;
