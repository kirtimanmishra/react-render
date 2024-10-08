import React, { useState } from "react";
import Parent from "./Parent";
import Child from "./Child";

function GrandParent() {
  const [newCount, setNewCount] = useState(0);
  console.log("GrandParent one render");

  return (
    <div>
      <button onClick={() => setNewCount((nc) => nc + 1)}>
        GrandParentCount - {newCount}
      </button>
      <Parent>
        <Child />
      </Parent>
    </div>
  );
}

export default GrandParent;
