import React, { Component } from 'react';
import { Navbar, Nav, NavDropDown, Form, FormControl, Button} from 'react-bootstrap';

class Header extends Component {
  render() {
    return <header>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
        integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
        crossorigin="anonymous"/>
      <Navbar bg="primary" variant="dark">
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
  </header>
  }
}

export default Header;
