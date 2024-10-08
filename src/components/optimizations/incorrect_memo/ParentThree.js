import React, { useState } from "react";
import ChildThree from "./ChildThree";

function ParentThree() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("kirti");

  console.log("ParentThree render");

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <button onClick={() => setName("Mishra")}>Change name</button>
      <ChildThree>
        <strong>This is children to child three</strong>
      </ChildThree>
    </div>
  );
}

export default ParentThree;
