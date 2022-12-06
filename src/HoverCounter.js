import React, { useState } from "react";

const HoverCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <div onMouseOver={() => setCount((prev) => prev + 1)}>
      Hovered {count} times
    </div>
  );
};

export default HoverCounter;
