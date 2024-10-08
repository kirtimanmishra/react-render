import React from "react";

function ChildThree() {
  console.log("ChildThree render");
  return <div>ChildThree component</div>;
}

export default React.memo(ChildThree);
