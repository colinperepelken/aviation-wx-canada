import React, { Component } from 'react';
import './WeatherSubmitCancelButtons.css';
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';

class WeatherSubmitCancelButtons extends Component {
  render() {
    return <React.Fragment>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <LinkContainer to="/weather">
        <Button variant="secondary" id="cancel-btn">
          Cancel
        </Button>
      </LinkContainer>
    </React.Fragment>
  }
}

export default WeatherSubmitCancelButtons;
