import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import PageContent from '../../components/PageContent/PageContent';

class Login extends Component {
  render() {
    return <React.Fragment>
      <Header active="login" />
      <PageContent>
        <h1>Login</h1>
      </PageContent>
    </React.Fragment>
  }
}

export default Login;
