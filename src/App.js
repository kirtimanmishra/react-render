import logo from "./logo.svg";
import "./App.css";
import UseState from "./components/use_state/UseState";
import Parent from "./components/optimizations/same_element_reference/Parent";
import Child from "./components/optimizations/same_element_reference/Child";
import GrandParent from "./components/optimizations/same_element_reference/Grandparent";
import ParentTwo from "./components/optimizations/react_memo/ParentTwo";
import GrandParentTwo from "./components/optimizations/react_memo/GrandparentTwo";
import ParentThree from "./components/optimizations/incorrect_memo/ParentThree";

function App() {
  return (
    <div className="App">
      {/* <UseState /> */}
      {/* <Parent>
        <Child />
      </Parent> */}
      {/* <GrandParent /> */}
      {/* <ParentTwo /> */}
      {/* <GrandParentTwo /> */}
      <ParentThree />
    </div>
  );
}

export default App;
