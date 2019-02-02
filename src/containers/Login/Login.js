import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import PageContent from '../../components/PageContent/PageContent';
import { Form, Button } from 'react-bootstrap';

class Login extends Component {
  render() {
    return <React.Fragment>
      <Header active="login" />
      <PageContent>
        <h1>Login</h1>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control required type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control required type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </PageContent>
    </React.Fragment>
  }
}

export default Login;
