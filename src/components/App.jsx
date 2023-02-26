import React, { Component } from 'react';
import './App.scss';
import Form from './Form/Form';
import Warning from './Form/Warning/Warning';
import Result from './Result/Result';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      gender: '',
      children: [],
      warning: [],
      form_warning: '',
      key_counter: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const check = this.state.name;

    if (check.length < 3) {
      this.showError('Name must be more than 2 characters');
    } else {
      if (this.state.form_warning) {
        this.setState({ form_warning: '' });
        this.showError(false);
      }
      const req = await fetch(
        `https://api.genderize.io?name=${this.state.name}`
      );
      const raw = await req.json();
      this.setState({ gender: raw.gender });

      setTimeout(() => {
        const component = (
          <Result
            key={this.state.key_counter}
            name={this.state.name}
            gender={this.state.gender}
          />
        );

        this.setState({ children: [...this.state.children, component] });
      }, 100);

      setTimeout(() => {
        this.setState({ key_counter: this.state.key_counter + 1 });
        this.setState({ name: '' });
        this.setState({ gender: '' });
      }, 200);
    }
  }

  showError(error_text) {
    const newError = <Warning text={error_text} />;

    if (error_text === false) {
      this.setState({
        warning: [],
      });
    } else {
      this.setState({ warning: [...this.state.warning, newError] });
      this.setState({ form_warning: 'form_warning' });
    }
  }

  render() {
    return (
      <div className="app-box">
        <Form
          onTextChanges={this.handleChange}
          name={this.state.name}
          onSubmit={this.handleSubmit}
          warning={this.state.warning}
          className={this.state.form_warning}
        />
        <div className="text-out-box">{this.state.children}</div>
      </div>
    );
  }
}

export default App;
