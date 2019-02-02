import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import './Footer.css';

class Footer extends Component {
  render() {
    return <footer>
      <p>Copright &copy; 2019 AVWx | <LinkContainer to="/disclaimer"><a>Disclaimer</a></LinkContainer></p>
    </footer>;
  }
}

export default Footer;
