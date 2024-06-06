import React, { useState } from "react";

const App = () => {
  let [number, setNumber] = useState(0);
  const increaceNumber = () => {
    setNumber(number + 1);
  };
  return (
    <div>
      <h1>Number : {number}</h1>
      <button onClick={increaceNumber} className="px-2 bg-black text-white">
        Increace Number
      </button>
    </div>
  );
};

export default App;
