import React from "react";
import { useState } from "react";

const App = () => {
  let [list, setList] = useState([]);
  let [item, setitem] = useState(0);
  const change
  return (
    <div>
      <table>
        <tbody></tbody>
      </table>{" "}
      <input
        onChange={(e) => setitem(e.target.value)}
        type="text"
        name=""
        id=""
      />
      <button onClick={}>Click</button>
    </div>
  );
};

export default App;
