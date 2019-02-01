import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import PageContent from '../../components/PageContent/PageContent';

class Flight extends Component {
  render() {
    return <React.Fragment>
      <Header active="flight" />
      <PageContent>
        <h1>File a Flight Plan</h1>
      </PageContent>
    </React.Fragment>
  }
}

export default Flight;
