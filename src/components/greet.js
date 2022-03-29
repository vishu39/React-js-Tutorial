import React from "react";

// function Greet() {
//   return <h1>Hello Vishu</h1>;
// }

// use name and heroName insted of props
export const Greet = (props) => {
  // const {name,heroName}=props
  return (
    <div>
      <h1>
        Hello {props.name} a.k.a {props.heroName}
      </h1>
      {props.children}
    </div>
  );
};

// export default Greet;
