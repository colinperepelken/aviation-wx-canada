import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import PageContent from '../../components/PageContent/PageContent';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Disclaimer extends Component {
  render() {
    return <React.Fragment>
      <Header />
      <PageContent id="disclaimer-body" heading="Disclaimer">
        <p>Pilots are advised to obtain an interpretative weather briefing and all pertinent NOTAM from Flight Information Centres / Flight Service Stations (FIC/FSS) prior to flying. The user accepts sole responsibility and all risks associated with use of the information on this web site. The user expressly releases AVWx, its developer(s) and assigns from any liability or obligation in respect thereof.</p>
        <LinkContainer to="/">
          <Button variant="primary">
            Home
          </Button>
        </LinkContainer>
      </PageContent>
      <Footer />
    </React.Fragment>
  }
}

export default Disclaimer;
