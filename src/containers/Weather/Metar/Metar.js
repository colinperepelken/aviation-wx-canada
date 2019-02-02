import React, { Component } from 'react';
import Header from '../../../components/Header/Header';
import WeatherContent from '../../../components/WeatherContent/WeatherContent';
import WeatherSubmitCancelButtons from '../../../components/WeatherSubmitCancelButtons/WeatherSubmitCancelButtons';
import { LinkContainer } from 'react-router-bootstrap';
import { Form, Button } from 'react-bootstrap';

class Metar extends Component {
  render() {
    return <React.Fragment>
      <Header active="Weather" />
      <WeatherContent heading="METAR / TAF">
        <Form>
          <Form.Group controlId="formBasicAerodrome">
            <Form.Label>ICAO code(s)</Form.Label>
            <Form.Control required type="text" placeholder="Enter ICAO code(s)" />
            <Form.Text className="text-muted">
              Enter aerodrome ID(s), separated by a space (e.g. CYUL CYYZ CYVR).
            </Form.Text>
          </Form.Group>
          <Form.Group >
              <Form.Label>Select an output format</Form.Label>
              <Form.Check
                type="radio"
                label="Standard"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
                checked
              />
              <Form.Check
                type="radio"
                label="Plain language"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
              />
            </Form.Group>
            <WeatherSubmitCancelButtons />
        </Form>
      </WeatherContent>
    </React.Fragment>
  }
}

export default Metar;
