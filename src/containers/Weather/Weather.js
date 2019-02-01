import React, { Component } from 'react';
import Header from '../../components/Header/Header';

class Weather extends Component {
  render() {
    return <React.Fragment>
      <Header active="weather" />
      <h1>Weather</h1>
    </React.Fragment>
  }
}

export default Weather;
