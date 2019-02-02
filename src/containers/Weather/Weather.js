import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import PageContent from '../../components/PageContent/PageContent';
import './Weather.css';
import { Card, CardDeck } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Weather extends Component {
  render() {
    return <React.Fragment>
      <Header active="weather" />
      <PageContent id="weather-body" heading="Forecasts and Observations">
        <h2>Alphanumeric Data</h2>
        <CardDeck>
          <LinkContainer to="/airmet">
            <Card className="mb-4">
              <Card.Body className="text-center">
                <Card.Title>AIRMET / SIGMET</Card.Title>
              </Card.Body>
            </Card>
          </LinkContainer>
          <Card className="mb-4">
            <Card.Body className="text-center">
              <Card.Title>Upper Winds</Card.Title>
            </Card.Body>
          </Card>
          <div className="w-100 d-none d-sm-block d-md-none">{/* wrap every 2 on sm */}</div>
          <LinkContainer to="/metar">
            <Card className="mb-4">
              <Card.Body className="text-center">
                <Card.Title>METAR / TAF</Card.Title>
              </Card.Body>
            </Card>
          </LinkContainer>
          <div class="w-100 d-none d-md-block d-lg-none">{/* wrap every 3 on md */}</div>
          <Card className="mb-4">
            <Card.Body className="text-center">
              <Card.Title>Live RVR</Card.Title>
            </Card.Body>
          </Card>
          <div class="w-100 d-none d-sm-block d-md-none">{/* wrap every 2 on sm */}</div>
          <div class="w-100 d-none d-lg-block d-xl-none">{/* wrap every 4 on lg */}</div>
          <Card className="mb-4">
            <Card.Body className="text-center">
              <Card.Title>AIP Supplements</Card.Title>
            </Card.Body>
          </Card>
          <div class="w-100 d-none d-xl-block">{/* wrap every 5 on xl */}</div>
          <Card className="mb-4">
            <Card.Body className="text-center">
              <Card.Title>NOTAM</Card.Title>
            </Card.Body>
          </Card>
          <div class="w-100 d-none d-sm-block d-md-none">{/* wrap every 2 on sm */}</div>
          <div class="w-100 d-none d-md-block d-lg-none">{/* wrap every 3 on md */}</div>
          <Card className="mb-4">
            <Card.Body className="text-center">
              <Card.Title>AIC</Card.Title>
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Body className="text-center">
              <Card.Title>Volcanic Ash</Card.Title>
            </Card.Body>
          </Card>
          <div class="w-100 d-none d-sm-block d-md-none">{/* wrap every 2 on sm */}</div>
          <div class="w-100 d-none d-lg-block d-xl-none">{/* wrap every 4 on lg */}</div>
          <Card className="mb-4">
            <Card.Body className="text-center">
              <Card.Title>PIREP</Card.Title>
            </Card.Body>
          </Card>
          <div class="w-100 d-none d-md-block d-lg-none">{/* wrap every 3 on md */}</div>
          <Card className="mb-4">
            <Card.Body className="text-center">
              <Card.Title>VFR Route Forecast</Card.Title>
            </Card.Body>
          </Card>
        </CardDeck>
        <h2>Graphical Weather Products</h2>
        <CardDeck>
          <Card className="mb-4">
            <Card.Img className="img-fluid" variant="top" src="images/weather/flight_conditions.png" />
            <Card.Body className="text-center">
              <Card.Title>Flight Conditions</Card.Title>
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Img className="img-fluid" variant="top" src="images/weather/sig_mid_wx.png" />
            <Card.Body className="text-center">
              <Card.Title>Significant Mid-level Weather</Card.Title>
            </Card.Body>
          </Card>
          <div className="w-100 d-none d-sm-block d-md-none">{/* wrap every 2 on sm */}</div>
          <Card className="mb-4">
            <Card.Img className="img-fluid" variant="top" src="images/weather/upper_air_analysis.png" />
            <Card.Body className="text-center">
              <Card.Title>Upper Air Analysis</Card.Title>
            </Card.Body>
          </Card>
          <div class="w-100 d-none d-md-block d-lg-none">{/* wrap every 3 on md */}</div>
          <LinkContainer to="/gfa">
            <Card className="mb-4">
              <Card.Img className="img-fluid" variant="top" src="images/weather/gfa.png" />
              <Card.Body className="text-center">
                <Card.Title>Graphical Area Forecast (GFA)</Card.Title>
              </Card.Body>
            </Card>
          </LinkContainer>
          <div className="w-100 d-none d-sm-block d-md-none">{/* wrap every 2 on sm */}</div>
          <div class="w-100 d-none d-lg-block d-xl-none">{/* wrap every 4 on lg */}</div>
          <Card className="mb-4">
            <Card.Img className="img-fluid" variant="top" src="images/weather/asep.png" />
            <Card.Body className="text-center">
              <Card.Title>ASEP</Card.Title>
            </Card.Body>
          </Card>
          <div class="w-100 d-none d-xl-block">{/* wrap every 5 on xl */}</div>
          <Card className="mb-4">
            <Card.Img className="img-fluid" variant="top" src="images/weather/wx_cams.png" />
            <Card.Body className="text-center">
              <Card.Title>Weather Cams</Card.Title>
            </Card.Body>
          </Card>
          <div className="w-100 d-none d-sm-block d-md-none">{/* wrap every 2 on sm */}</div>
          <div class="w-100 d-none d-md-block d-lg-none">{/* wrap every 3 on md */}</div>
          <Card className="mb-4">
            <Card.Img className="img-fluid" variant="top" src="images/weather/sig_hi_wx.png" />
            <Card.Body className="text-center">
              <Card.Title>Significant High Level Weather</Card.Title>
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Img className="img-fluid" variant="top" src="images/weather/can_turb.png" />
            <Card.Body className="text-center">
              <Card.Title>Canadian Turbulence Forecast</Card.Title>
            </Card.Body>
          </Card>
          <div className="w-100 d-none d-sm-block d-md-none">{/* wrap every 2 on sm */}</div>
          <div class="w-100 d-none d-lg-block d-xl-none">{/* wrap every 4 on lg */}</div>
          <Card className="mb-4">
            <Card.Img className="img-fluid" variant="top" src="images/weather/west_coast.png" />
            <Card.Body className="text-center">
              <Card.Title>Local Graphic Forecast West Coast</Card.Title>
            </Card.Body>
          </Card>
          <div class="w-100 d-none d-md-block d-lg-none">{/* wrap every 3 on md */}</div>
          <Card className="mb-4">
            <Card.Img className="img-fluid" variant="top" src="images/weather/comox.png" />
            <Card.Body className="text-center">
              <Card.Title>Comox (DND) Charts</Card.Title>
            </Card.Body>
          </Card>
          <div className="w-100 d-none d-sm-block d-md-none">{/* wrap every 2 on sm */}</div>
          <div class="w-100 d-none d-xl-block">{/* wrap every 5 on xl */}</div>
          <Card className="mb-4">
            <Card.Img className="img-fluid" variant="top" src="images/weather/upper_below_180.png" />
            <Card.Body className="text-center">
              <Card.Title>Upper Winds &le; FL180</Card.Title>
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Img className="img-fluid" variant="top" src="images/weather/sig_wx_atlantic.png" />
            <Card.Body className="text-center">
              <Card.Title>Significant Weather Atlantic</Card.Title>
            </Card.Body>
          </Card>
          <div className="w-100 d-none d-sm-block d-md-none">{/* wrap every 2 on sm */}</div>
          <div class="w-100 d-none d-md-block d-lg-none">{/* wrap every 3 on md */}</div>
          <div class="w-100 d-none d-lg-block d-xl-none">{/* wrap every 4 on lg */}</div>
          <Card className="mb-4">
            <Card.Img className="img-fluid" variant="top" src="images/weather/n_atlc_e.png" />
            <Card.Body className="text-center">
              <Card.Title>N ATLC Turbulence Eastbound</Card.Title>
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Img className="img-fluid" variant="top" src="images/weather/n_atlc_w.png" />
            <Card.Body className="text-center">
              <Card.Title>N ATLC Turbulence Westbound</Card.Title>
            </Card.Body>
          </Card>
          <div className="w-100 d-none d-sm-block d-md-none">{/* wrap every 2 on sm */}</div>
          <Card className="mb-4">
            <Card.Img className="img-fluid" variant="top" src="images/weather/upper_winds_high.png" />
            <Card.Body className="text-center">
              <Card.Title>Upper Winds FL240 to FL450</Card.Title>
            </Card.Body>
          </Card>
          <div class="w-100 d-none d-md-block d-lg-none">{/* wrap every 3 on md */}</div>
          <div class="w-100 d-none d-xl-block">{/* wrap every 5 on xl */}</div>
          <Card className="mb-4">
            <Card.Img className="img-fluid" variant="top" src="images/weather/sfc_analysis.png" />
            <Card.Body className="text-center">
              <Card.Title>Surface Analysis</Card.Title>
            </Card.Body>
          </Card>
          <div className="w-100 d-none d-sm-block d-md-none">{/* wrap every 2 on sm */}</div>
          <div class="w-100 d-none d-lg-block d-xl-none">{/* wrap every 4 on lg */}</div>
          <Card className="mb-4">
            <Card.Img className="img-fluid" variant="top" src="images/weather/radar.png" />
            <Card.Body className="text-center">
              <Card.Title>Radar</Card.Title>
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Img className="img-fluid" variant="top" src="images/weather/satellite.png" />
            <Card.Body className="text-center">
              <Card.Title>Satellite</Card.Title>
            </Card.Body>
          </Card>
        </CardDeck>
        <h2>Additional Links</h2>
        <CardDeck>
          <Card className="mb-4">
            <Card.Body className="text-center">
              <Card.Title>Airport Diagrams</Card.Title>
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Body className="text-center">
              <Card.Title>U.S. Weather (ADDS)</Card.Title>
            </Card.Body>
          </Card>
          <div className="w-100 d-none d-sm-block d-md-none">{/* wrap every 2 on sm */}</div>
          <Card className="mb-4">
            <Card.Body className="text-center">
              <Card.Title>U.S. Weather Cams</Card.Title>
            </Card.Body>
          </Card>
          <div class="w-100 d-none d-md-block d-lg-none">{/* wrap every 3 on md */}</div>
          <Card className="mb-4">
            <Card.Body className="text-center">
              <Card.Title>Sunrise / Sunset (NRC)</Card.Title>
            </Card.Body>
          </Card>
          <div className="w-100 d-none d-sm-block d-md-none">{/* wrap every 2 on sm */}</div>
          <div class="w-100 d-none d-lg-block d-xl-none">{/* wrap every 4 on lg */}</div>
          <Card className="mb-4">
            <Card.Body className="text-center">
              <Card.Title>Notices</Card.Title>
            </Card.Body>
          </Card>
        </CardDeck>
      </PageContent>
    </React.Fragment>
  }
}

export default Weather;
