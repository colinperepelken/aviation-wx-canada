import React, { Component } from 'react';
import './WeatherContent.css';
import { Breadcrumb } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class WeatherContent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      heading: this.props.heading,
      id: this.props.id
    }
  }

  render() {

    const breadcrumb = <Breadcrumb>
      <LinkContainer to="/"><Breadcrumb.Item>Home</Breadcrumb.Item></LinkContainer>
      <LinkContainer to="/weather"><Breadcrumb.Item>Weather</Breadcrumb.Item></LinkContainer>
      <Breadcrumb.Item active>{this.state.heading}</Breadcrumb.Item>
    </Breadcrumb>;

    if (typeof this.state.heading === "undefined") {
      return <div id="weather-content">
        {breadcrumb}
        <div id={this.state.id} class="indented-content">
          {this.props.children}
        </div>
      </div>
    } else {
      return <div id="weather-content">
        {breadcrumb}
        <h1>{this.state.heading}</h1>
        <div id={this.state.id} class="indented-content">
          {this.props.children}
        </div>
      </div>
    }
  }
}

export default WeatherContent;
