import React from "react";

const Event = () => {
  function clickHandler() {
    console.log("clicked");
  }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
};

export default Event;
