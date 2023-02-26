import React, { Component } from 'react';
import './TextField.scss';

export class TextField extends Component {
  render() {
    return (
      <input
        className="text-field"
        type="text"
        placeholder="Input any name"
        value={this.props.name}
        onChange={this.props.onChange}
      />
    );
  }
}

export default TextField;
