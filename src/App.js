import React, { Component } from 'react';
import './App.css';
import MetarForm from './components/MetarForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Enter an ICAO airport code to retrieve the latest METAR information.</h1>
          <MetarForm />
        </header>
      </div>
    );
  }
}

export default App;
