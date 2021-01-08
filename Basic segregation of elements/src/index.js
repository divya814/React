import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";

// move the entire code in a separate file- "App.js"

// ReactDom is rendering the App which is not a functing but a component for react hence to be written in <>, on "root" which is the entire page's div ID
ReactDOM.render(<App/>, document.getElementById('root'));