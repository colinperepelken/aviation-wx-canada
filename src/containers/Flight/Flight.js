import React, { Component } from 'react';
import Header from '../../components/Header/Header';

class Flight extends Component {
  render() {
    return <React.Fragment>
      <Header active="flight" />
      <h1>File a Flight Plan</h1>
    </React.Fragment>
  }
}

export default Flight;
