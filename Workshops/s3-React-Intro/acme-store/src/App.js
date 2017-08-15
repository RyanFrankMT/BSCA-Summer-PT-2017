import React, { Component } from 'react';
import './App.css';
import { Welcome, Customer, Contact } from './components/index.js';
import DATA from './DATA.js';

class App extends Component {
  render() {
    return (
      <div>
        <Welcome />
        <Customer customers={DATA.customers} />
        <Contact />
      </div>
    );
  }
}

export default App;
