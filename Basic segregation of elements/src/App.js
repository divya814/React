import React from "react";
import "./index.css";

//function App() to arrow function as in modern JS

const App = () =>{

  // Adding CSS will be similar to JSX not HTML
  // written is {{}} with no dashes in between and first ketter should be small and then capital

  // return <h1 style={{textAlign:"center"}}>Hello World</h1>

  // We can return only 1 element in react so to return multiple things it should wrapped in "div"

  return (
    <div>
      <h1 style={{textAlign:"center"}}>Hello World</h1>
      <button className="button">Click Here</button>    {/*class is changed to className in JSX */}
    </div>

  );
};

export default App;
