import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import PageContent from '../../components/PageContent/PageContent';

class Register extends Component {
  render() {
    return <React.Fragment>
      <Header active="register" />
      <PageContent>
        <h1>Sign Up</h1>
      </PageContent>
    </React.Fragment>
  }
}

export default Register;
