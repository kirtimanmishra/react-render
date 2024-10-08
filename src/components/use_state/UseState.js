import React, { useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);
  console.log("Use-state render");
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment count</button>
      <button onClick={() => setCount(0)}>Reset count</button>
      <button onClick={() => setCount(5)}>Set count to 5</button>

      <div>Count - {count}</div>
    </div>
  );
}

export default UseState;
