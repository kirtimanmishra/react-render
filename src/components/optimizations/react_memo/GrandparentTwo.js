import React, { useState } from "react";
import ParentTwo from "./ParentTwo";
import ChildTwo from "./ChildTwo";

function GrandParentTwo() {
  const [newCount, setNewCount] = useState(0);
  console.log("GrandParentTwo render");

  return (
    <div>
      <button onClick={() => setNewCount((nc) => nc + 1)}>
        GrandParentTwoCount - {newCount}
      </button>
      <ParentTwo>
        <ChildTwo />
      </ParentTwo>
    </div>
  );
}

export default GrandParentTwo;
