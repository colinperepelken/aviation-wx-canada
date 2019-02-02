import React, { Component } from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Header.css';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {active: this.props.active};
  }

  render() {
    return <header>
      <Navbar variant="dark" expand="sm">
      <LinkContainer to="/">
        <Navbar.Brand href="/">
          <img src="images/logo.png" alt="logo" />
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/weather">
            <Nav.Link className={(this.state.active === "weather") ? "active" : ""}>Weather</Nav.Link>
          </LinkContainer>
          <Nav.Link href="https://plan.navcanada.ca" className={(this.state.active === "flight") ? "active" : ""}>File a Flight Plan</Nav.Link>
        </Nav>
        <Nav className="navbar-right">
          <LinkContainer to="/register">
            <Nav.Link className={(this.state.active === "register") ? "active" : ""}>Sign Up</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/login">
            <Nav.Link className={(this.state.active === "login") ? "active" : ""}>Login</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>;
  }
}

export default Header;
