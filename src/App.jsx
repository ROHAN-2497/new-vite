import React from "react";
import { useRef } from "react";

const App = () => {
  let number = useRef();
  const changeNumber = () => {
    number.current++;
  };
  return (
    <div className="m-20">
      <button onClick={newColour} className="border p-2 bg-black text-white">
        Click That
      </button>
    </div>
  );
};

export default App;
