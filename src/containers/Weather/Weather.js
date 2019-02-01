import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import { Card, CardGroup} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Weather extends Component {
  render() {
    return <React.Fragment>
      <Header active="weather" />
      <h1>Forecasts and Observations</h1>
      <h2>Alphanumeric Data</h2>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src="images/temp.jpg" />
          <Card.Body className="text-center">
            <Card.Title>AIRMET/SIGMET</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="images/temp.jpg" />
          <Card.Body className="text-center">
            <Card.Title>Upper Winds</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="images/temp.jpg" />
          <Card.Body className="text-center">
            <Card.Title>METAR/TAF</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="images/temp.jpg" />
          <Card.Body className="text-center">
            <Card.Title>Live RVR</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="images/temp.jpg" />
          <Card.Body className="text-center">
            <Card.Title>AIP Supplements</Card.Title>
          </Card.Body>
        </Card>
      </CardGroup>;
      <CardGroup>
        <Card>
          <Card.Img variant="top" src="images/temp.jpg" />
          <Card.Body className="text-center">
            <Card.Title>NOTAM</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="images/temp.jpg" />
          <Card.Body className="text-center">
            <Card.Title>AIC</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="images/temp.jpg" />
          <Card.Body className="text-center">
            <Card.Title>Volcanic Ash</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="images/temp.jpg" />
          <Card.Body className="text-center">
            <Card.Title>PIREP</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="images/temp.jpg" />
          <Card.Body className="text-center">
            <Card.Title>VFR Route Forecast</Card.Title>
          </Card.Body>
        </Card>
      </CardGroup>;
      <h2>Graphical Weather Products</h2>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src="images/temp.jpg" />
          <Card.Body className="text-center">
            <Card.Title>Flight Conditions</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="images/temp.jpg" />
          <Card.Body className="text-center">
            <Card.Title>Significant Mid-level Weather</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="images/temp.jpg" />
          <Card.Body className="text-center">
            <Card.Title>Upper Air Analysis</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="images/temp.jpg" />
          <Card.Body className="text-center">
            <Card.Title>Graphical FA</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="images/temp.jpg" />
          <Card.Body className="text-center">
            <Card.Title>ASEP</Card.Title>
          </Card.Body>
        </Card>
      </CardGroup>;
      <CardGroup>
        <Card>
          <Card.Img variant="top" src="images/temp.jpg" />
          <Card.Body className="text-center">
            <Card.Title>Weather Cams</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="images/temp.jpg" />
          <Card.Body className="text-center">
            <Card.Title>Significant High Level Weather</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="images/temp.jpg" />
          <Card.Body className="text-center">
            <Card.Title>Canadian Turbulence Forecast</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="images/temp.jpg" />
          <Card.Body className="text-center">
            <Card.Title>Local Graphic Forecast West Coast</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="images/temp.jpg" />
          <Card.Body className="text-center">
            <Card.Title>Comox (DND) Charts</Card.Title>
          </Card.Body>
        </Card>
      </CardGroup>;
      <CardGroup>
        <Card>
          <Card.Img variant="top" src="images/temp.jpg" />
          <Card.Body className="text-center">
            <Card.Title>Upper Winds &le; FL180</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="images/temp.jpg" />
          <Card.Body className="text-center">
            <Card.Title>Significant Weather Atlantic</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="images/temp.jpg" />
          <Card.Body className="text-center">
            <Card.Title>N ATLC Turbulence Eastbound</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="images/temp.jpg" />
          <Card.Body className="text-center">
            <Card.Title>Radar</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="images/temp.jpg" />
          <Card.Body className="text-center">
            <Card.Title>Upper Winds FL240 to FL450</Card.Title>
          </Card.Body>
        </Card>
      </CardGroup>;
      <CardGroup>
        <Card>
          <Card.Img variant="top" src="images/temp.jpg" />
          <Card.Body className="text-center">
            <Card.Title>Surface Analysis</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="images/temp.jpg" />
          <Card.Body className="text-center">
            <Card.Title>N ATLC Turbulence Westbound</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="images/temp.jpg" />
          <Card.Body className="text-center">
            <Card.Title>Satellite</Card.Title>
          </Card.Body>
        </Card>
      </CardGroup>;
      <h2>Additional Links</h2>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src="images/temp.jpg" />
          <Card.Body className="text-center">
            <Card.Title>Airport Diagrams</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="images/temp.jpg" />
          <Card.Body className="text-center">
            <Card.Title>U.S. Weather (ADDS)</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="images/temp.jpg" />
          <Card.Body className="text-center">
            <Card.Title>U.S. Weather Cams</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="images/temp.jpg" />
          <Card.Body className="text-center">
            <Card.Title>Sunrise / Sunset (NRC)</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="images/temp.jpg" />
          <Card.Body className="text-center">
            <Card.Title>Notices</Card.Title>
          </Card.Body>
        </Card>
      </CardGroup>;
    </React.Fragment>
  }
}

export default Weather;
