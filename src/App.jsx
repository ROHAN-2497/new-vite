import React from "react";
import { useRef } from "react";

const App = () => {
  let firstName,
    lastName = useRef();

  const changeName = () => {
    const changeFirstName = firstName.value;
    const changeLasttName = lastName.value;
    alert(changeFirstName + " " + changeLasttName);
  };

  return (
    <div>
      <input
        ref={(firstname) => (firstName = firstname)}
        type="text"
        placeholder="First Name"
      />{" "}
      <br />
      <input
        ref={(lastname) => (lastName = lastname)}
        type="any"
        placeholder="Last Name"
      />{" "}
      <br />
      <button onClick={changeName}>Click</button>
    </div>
  );
};

export default App;
