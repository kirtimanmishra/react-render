import React, { useState } from "react";
import ChildTwo from "./ChildTwo";

function ParentTwo(props) {
  const { children } = props;
  const [count, setCount] = useState(0);
  const [name, setName] = useState("kirti");

  console.log("ParentTwo render");

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <button onClick={() => setName("Mishra")}>Change name</button>
      {/* <ChildTwo name={name} /> */}
      <ChildTwo />
    </div>
  );
}

export default ParentTwo;
