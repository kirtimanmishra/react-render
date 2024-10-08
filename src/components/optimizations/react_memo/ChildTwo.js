import React from "react";

function ChildTwo(props) {
  console.log("ChildTwo render");
  return <div>ChildTwo component</div>;
}

export default React.memo(ChildTwo);
