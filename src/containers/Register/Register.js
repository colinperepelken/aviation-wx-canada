import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import PageContent from '../../components/PageContent/PageContent';
import { Form, Button } from 'react-bootstrap';

class Register extends Component {
  render() {
    return <React.Fragment>
      <Header active="register" />
      <PageContent id="register-body" heading="Sign Up">
        <Form>
          <Form.Group controlId="formBasicFirstName">
            <Form.Label>First name</Form.Label>
            <Form.Control required type="text" placeholder="Enter first name" />
          </Form.Group>
          <Form.Group controlId="formBasicLastName">
            <Form.Label>Last name</Form.Label>
            <Form.Control required type="text" placeholder="Enter last name" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control required type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control required type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicPasswordConfirm">
            <Form.Label>Password (again)</Form.Label>
            <Form.Control required type="password" placeholder="Password (again)" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </Form>
      </PageContent>
      <Footer />
    </React.Fragment>
  }
}

export default Register;
