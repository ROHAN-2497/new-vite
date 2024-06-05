import React from "react";
import { useRef } from "react";

const App = () => {
  let number = useRef(0);
  const changeNumber = () => {
    number.current++;
    console.log(number.current);
  };
  return (
    <div className="m-20">
      <button onClick={changeNumber} className="border p-2 bg-black text-white">
        Click That
      </button>
    </div>
  );
};

export default App;
