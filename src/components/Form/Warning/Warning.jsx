import React, { Component } from 'react';
import './Warning.scss';

export class Warning extends Component {
  render() {
    return <div className="warning">Error: {this.props.text}</div>;
  }
}

export default Warning;
