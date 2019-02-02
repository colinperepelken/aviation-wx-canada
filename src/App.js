import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import PageContent from './components/PageContent/PageContent';
import { Carousel, CardDeck, Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class App extends Component {
  render() {
    return <React.Fragment>
      <Header />
      <PageContent>
        <div id="app-body">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/frontpage/carousel/slide_1.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>AWWS replacement is here!</h3>
                <p>Aviation Wx Canada features a redesigned weather interface optimized for modern browsers and mobile devices.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/frontpage/carousel/slide_1.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Sign up for an account</h3>
                <p>There are many advantages to creating an account including saving airports and flight plans.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/frontpage/carousel/slide_1.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Email notifications</h3>
                <p>Sign up to receive email or text notifications when a new METAR is released.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <CardDeck>
            <Card>
              <Card.Img variant="top" src="images/frontpage/weather.jpg" />
              <Card.Body>
                <Card.Title>Weather</Card.Title>
                <Card.Text>
                  Click on 'Weather' to view up to date Alphanumeric and Graphical weather data.
                  Weather data is sourced from a variety of locations including NavCanada.
                </Card.Text>
                <LinkContainer to="/weather">
                  <Button variant="primary">Weather</Button>
                </LinkContainer>
              </Card.Body>

            </Card>
            <Card>
              <Card.Img variant="top" src="images/frontpage/flight.jpg" />
              <Card.Body>
                <Card.Title>File a Flight Plan</Card.Title>
                <Card.Text>
                  Clicking to file a flight plan will redirect you do NavCanada's flight planning system.
                </Card.Text>
                <a href="https://plan.navcanada.ca"><Button variant="primary">File a Flight Plan</Button></a>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src="images/frontpage/account.jpg" />
              <Card.Body>
                <Card.Title>User Accounts</Card.Title>
                <Card.Text>
                  Create a user account or login to an existing account to receive email and text notifications, as well as save your airport.
                </Card.Text>
                <LinkContainer to="/login">
                  <Button variant="primary">Login</Button>
                </LinkContainer>
              </Card.Body>
            </Card>
          </CardDeck>
        </div>
      </PageContent>
    </React.Fragment>;
  }
}

export default App;
