import React, { useState } from "react";

const App = () => {
  let [objValue, setObjvalue] = useState({
    key1: "value 1",
    key2: "value 2",
    key3: "value 3",
  });
  const changeValue = () => {
    setObjvalue((prevObj) => ({
      ...prevObj,
      key1: "new value 1",
    }));
  };
  return (
    <div className="m-20">
      <h1>Object:{objValue.key1} </h1>
      <button
        onClick={changeValue}
        className="px-1 border-red-200 border-2 bg-black text-white"
      >
        Click
      </button>
    </div>
  );
};

export default App;
