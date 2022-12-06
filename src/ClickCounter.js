import React, { useState } from "react";

const ClickCounter = ({ name }) => {
  //Testing commit
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Clicked {count} times
      </button>
      <p>name: {name}</p>
    </>
  );
};

export default ClickCounter;
