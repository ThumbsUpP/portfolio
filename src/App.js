import React, { Component } from 'react';
import Home from './Container/Home/Home'
import './App.css';
import Skills from './Container/Skills/Skills'


class App extends Component {
  render() {
    return (
      <div>
        <Home/>
        <Skills/>
      </div>
    );
  }
}

export default App;


