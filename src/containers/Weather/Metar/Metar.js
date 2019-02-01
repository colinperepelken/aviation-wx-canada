import React, { Component } from 'react';
import Header from '../../../components/Header/Header';
import PageContent from '../../../components/PageContent/PageContent';
import { LinkContainer } from 'react-router-bootstrap';
import { Breadcrumb} from 'react-bootstrap';

class Metar extends Component {
  render() {
    return <React.Fragment>
      <Header active="Weather" />
      <PageContent>
        <Breadcrumb>
          <LinkContainer to="/"><Breadcrumb.Item>Home</Breadcrumb.Item></LinkContainer>
          <LinkContainer to="/weather"><Breadcrumb.Item>Weather</Breadcrumb.Item></LinkContainer>
          <Breadcrumb.Item active>METAR / TAF</Breadcrumb.Item>
        </Breadcrumb>
        <h1>METAR / TAF</h1>
      </PageContent>
    </React.Fragment>
  }
}

export default Metar;
