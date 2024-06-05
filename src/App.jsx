import React, { useRef } from "react";

const App = () => {
  let APIData = useRef(null);
  const fatching = ()=>{
    let response = fetch("https://dummyjson.com/products")
    APIData.current =  response.json() 
  }
 

  return (
    <div>
      <button ref={}>Call API</button>
      <button ref={}>Show Data</button>
    </div>
  );
};

export default App;
