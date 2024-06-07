import React from "react";
import { useState } from "react";

const App = () => {
  let [list, setList] = useState([]);
  let [item, setitem] = useState("");
  const addToList = () => {
    list.push(item);
    setList([...list]);
  };

  const removeItem = (index) => {
    list.splice(index, 1);
    setList([...list]);
  };
  return (
    <div>
      <table>
        <tbody>
          {list.length !== 0 ? (
            list.map((element, index) => {
              return (
                <tr>
                  <td>{element}</td>
                  <td>
                    {" "}
                    <button
                      onClick={() => {
                        removeItem(index);
                      }}
                    >
                      RemoveItem
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr></tr>
          )}
        </tbody>
      </table>{" "}
      <input
        onChange={(e) => setitem(e.target.value)}
        type="text"
        name=""
        id=""
      />
      <button onClick={addToList}>Click</button>
    </div>
  );
};

export default App;
