import React from "react";
import { useState } from "react";

const App = () => {
  let [list, setList] = useState([]);
  let [item, setItem] = useState("");
  const addList = () => {
    list.push(item);
    setList([...list]);
  };

  return (
    <div className="">
      <p>{list.length}</p>
      <input
        className="bg-black text-white"
        placeholder=""
        onChange={(e) => setItem(e.target.value)}
        type="text"
      />
      <button className="border-2 px-2 bg-amber-400" onClick={addList}>
        Add
      </button>
    </div>
  );
};

export default App;
