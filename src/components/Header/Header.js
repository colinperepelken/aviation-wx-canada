import React, { Component } from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return <header>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
        integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
        crossorigin="anonymous"/>
      <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="/">Aviation WX Canada</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link className="active" href="/">Home</Nav.Link>
        <Nav.Link href="/weather">Weather</Nav.Link>
        <Nav.Link href="/flight">File a Flight Plan</Nav.Link>
      </Nav>
      <Nav className="navbar-right">
        <Nav.Link href="/register">Sign Up</Nav.Link>
        <Nav.Link href="/login">Login</Nav.Link>
      </Nav>
    </Navbar>
  </header>;
  }
}

export default Header;
