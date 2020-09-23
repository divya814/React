import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Message from './Components/Message';
import Counter from './Components/Counter';

class App extends Component{
render(){
  return (
    <div className="App">
      <Counter/>
      <Greet name="Raj" hero="Batman">
      <p>This is a children props</p>
      </Greet>
      
      <Greet name="Neha" hero="Wonder Woman"/>
      <Welcome name="Diana" hero="Power Puff Girl"></Welcome>

      <Message></Message>
    </div>
  );
}
}

export default App;
