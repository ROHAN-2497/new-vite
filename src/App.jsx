import React from "react";
import { useRef } from "react";

const App = () => {
  let myHeadLine = useRef();
  let change = () => {
    myHeadLine.innerHTML = "<ul><li>iooooooooo</li></ul>";
  };
  return (
    <div>
      <h1 ref={(h1) => (myHeadLine = h1)}></h1>
      <button onClick={change}>Click</button>
    </div>
  );
};

export default App;
