import React, { Component } from 'react';
import Header from '../../components/Header/Header';

class Login extends Component {
  render() {
    return <React.Fragment>
      <Header active="login" />
      <h1>Login</h1>
    </React.Fragment>
  }
}

export default Login;
