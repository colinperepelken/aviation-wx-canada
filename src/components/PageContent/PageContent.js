import React, { Component } from 'react';
import './PageContent.css';

class PageContent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <div id="page-content">{this.props.children}</div>
  }
}

export default PageContent;
