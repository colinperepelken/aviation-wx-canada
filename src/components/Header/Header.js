import React, { Component } from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {active: this.props.active};
  }

  render() {
    return <header>
      <Navbar bg="primary" variant="dark">
      <LinkContainer to="/">
        <Navbar.Brand href="/">Aviation WX Canada</Navbar.Brand>
      </LinkContainer>
      <Nav className="mr-auto">
        <LinkContainer to="/weather">
          <Nav.Link className={(this.state.active === "weather") ? "active" : ""}>Weather</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/flight">
          <Nav.Link className={(this.state.active === "flight") ? "active" : ""}>File a Flight Plan</Nav.Link>
        </LinkContainer>
      </Nav>
      <Nav className="navbar-right">
        <Nav.Link className={(this.state.active === "register") ? "active" : ""} href="/register">Sign Up</Nav.Link>
        <Nav.Link className={(this.state.active === "login") ? "active" : ""} href="/login">Login</Nav.Link>
      </Nav>
    </Navbar>
  </header>;
  }
}

export default Header;
