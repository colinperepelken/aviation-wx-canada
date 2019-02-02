import React, { Component } from 'react';
import Header from '../../../components/Header/Header';
import ClickableMap from '../../../components/ClickableMap/ClickableMap';
import WeatherContent from '../../../components/WeatherContent/WeatherContent';

class GFA extends Component {
  render() {
    return <React.Fragment>
      <Header active="Weather" />
      <WeatherContent heading="Graphical Area Forecast (GFA)">
        <p>Select a region to get the GFAs.</p>
        <ClickableMap />
      </WeatherContent>
    </React.Fragment>
  }
}

export default GFA;
