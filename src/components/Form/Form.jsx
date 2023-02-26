import React, { Component } from 'react';
import SubmitBtn from './SubmitBtn/SubmitBtn';
import TextField from './TextField/TextField';
import './Form.scss';

export class Form extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.onTextChanges(event);
  }

  handleSubmit(event) {
    this.props.onSubmit(event);
  }

  render() {
    return (
      <div className="div">
        <form
          className={`form ${this.props.className}`}
          action=""
          onSubmit={this.handleSubmit}
        >
          <TextField name={this.props.name} onChange={this.handleChange} />
          <SubmitBtn />
        </form>
        {this.props.warning}
      </div>
    );
  }
}

export default Form;
