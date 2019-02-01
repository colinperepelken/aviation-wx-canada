import React, { Component } from 'react';
import './App.css';
import MetarForm from './components/MetarForm';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />  
        <Navigation/>
      </div>
    );
  }
}

export default App;
