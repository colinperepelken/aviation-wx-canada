import React, { Component } from 'react';
import './PageContent.css';

class PageContent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      heading: this.props.heading,
      id: this.props.id
    }
  }

  render() {
    if (typeof this.state.heading === "undefined") {
      return <div id="page-content">
        <div id={this.state.id} class="indented-content">
          {this.props.children}
        </div>
      </div>
    } else {
      return <div id="page-content">
        <h1>{this.state.heading}</h1>
        <div id={this.state.id} class="indented-content">
          {this.props.children}
        </div>
      </div>
    }
  }
}

export default PageContent;
