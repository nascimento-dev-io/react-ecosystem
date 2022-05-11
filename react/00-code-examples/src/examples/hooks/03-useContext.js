import React, { useState, useContext } from "react";

import { myContext } from "./03.1-Context-Provider";

const UseContextExample = () => {
  // useContext
  const { toggleTheme, theme } = useContext(myContext);

  return (
    <div style={theme}>
      <UserInfo />
      <hr />
      <Counter />
      <hr />
      <button style={{ padding: "8px 12px" }} onClick={toggleTheme}>
        {" "}
        Toggle Theme
      </button>
    </div>
  );
};
export default UseContextExample;

//  --------------------------------------------------------

// Componente Counter
const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <p>{counter}</p>
      <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>
        +
      </button>{" "}
      |{" "}
      <button onClick={() => setCounter((prevCounter) => prevCounter - 1)}>
        -
      </button>
    </>
  );
};

//  --------------------------------------------------------

// Componente UserInfo
const UserInfo = () => {
  const { user } = useContext(myContext);
  return (
    <>
      <strong>User: {user.name}</strong>
    </>
  );
};

// link para explicação:

