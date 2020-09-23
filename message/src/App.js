import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './Components/Message';

class App extends Component{
render(){
  return (
    <div className="App">
      <Message></Message>
    </div>
  );
}
}

export default App;
