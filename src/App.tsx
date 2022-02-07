import React from "react";
import "./App.scss";
import { DemoClass } from "./DemoClass";
import { DemoFunction } from "./DemoFunction";

function App() {
  return (
    <div>
      <DemoClass compName="Class component" />
      <DemoFunction compName="Function component" />
    </div>
  );
}

export default App;
