import React, { Component } from 'react';
import Home from './Container/Home/Home'
import './App.css';
import Skills from './Container/Skills/Skills'
import MySelf from './Container/MySelf/MySelf';


class App extends Component {
  render() {
    return (
      <div>
        <Home/>
        <MySelf/>
        <Skills/>
      </div>
    );
  }
}

export default App;


