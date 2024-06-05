import React, { useRef } from "react";

const App = () => {
  let APIData = useRef(null);
  let dataShow = useRef();
  const fatching = async () => {
    const response = await fetch("https://dummyjson.com/products");
    APIData.current = await response.json();
  };
  const showData = () => {
    dataShow.current.innerText = JSON.stringify(APIData.current);
  };
  return (
    <div>
      <p ref={dataShow}></p>
      <button className="border p-2" ref={fatching}>
        Call API
      </button>{" "}
      <br />
      <button className="border p-2" ref={showData}>
        Show Data
      </button>
    </div>
  );
};

export default App;
