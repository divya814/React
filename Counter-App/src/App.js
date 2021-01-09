import React, { useState } from "react";
import "./App.css";

function App(){
  // State  
                          // put 0 as default value
  const [count,setCount] = useState(0); // part of hooks
    // [variable name, method- setVariableName]

  return (
    <div className="App">
      <header>
        <h1>Counter App using State/hooks</h1>
      </header>
      <h2>Value of Counter is {count}</h2>
      <button onClick={()=>setCount(0)}>Reset Counter</button>
      <button onClick={() => setCount(count+1)}>Increase Counter</button>
      <button onClick={() => (count<=0 ? setCount(0):setCount(count-1))}>Decrease Counter</button>

    </div>
  );
}
export default App;                   