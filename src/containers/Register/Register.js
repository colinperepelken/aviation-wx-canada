import React, { Component } from 'react';
import Header from '../../components/Header/Header';

class Register extends Component {
  render() {
    return <React.Fragment>
      <Header active="register" />
      <h1>Sign Up</h1>
    </React.Fragment>
  }
}

export default Register;
