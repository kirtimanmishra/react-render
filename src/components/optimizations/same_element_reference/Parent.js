import React, { useState } from "react";

function Parent(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("kirti");
  const { children } = props;
  console.log("Parent one render");

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <button onClick={() => setName("Mishra")}>Change name</button>
      {children}
    </div>
  );
}

export default Parent;
