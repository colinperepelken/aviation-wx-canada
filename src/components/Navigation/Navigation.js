import React, { Component } from 'react';
import { Navbar, Nav, NavDropDown, Form, FormControl, Button} from 'react-bootstrap';

class Navigation extends Component {
  render() {
    return <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Aviation WX Canada</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link className="active" href="#home">Home</Nav.Link>
      <Nav.Link href="#">About</Nav.Link>
      <Nav.Link href="#">Weather</Nav.Link>
      <Nav.Link href="#">File a Flight Plan</Nav.Link>
    </Nav>
    <Nav className="navbar-right">
      <Nav.Link href="#">Sign Up</Nav.Link>
      <Nav.Link href="#">Login</Nav.Link>
    </Nav>
  </Navbar>;

  }
}

export default Navigation;
