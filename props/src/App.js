import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';

class App extends Component{
render(){
  return (
    <div className="App">
      <Greet name="Raj" hero="Batman">
      <p>This is a children props</p>
      </Greet>
      <Greet name="Amar" hero="Superman"/>
      <Greet name="Neha" hero="Wonder Woman"/>
      <Welcome name="Diana" hero="Power Puff Girl"></Welcome>
    </div>
  );
}
}

export default App;
