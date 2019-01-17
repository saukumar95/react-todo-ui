import React, { Component } from 'react';
import './App.css';
import Header from './Components/header';
import InputComponent from './Components/inputComponent';
import DisplayComponent from './Components/displayComponent';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <InputComponent /><br />
        <DisplayComponent />
      </div>
    );
  }
}

export default App;
